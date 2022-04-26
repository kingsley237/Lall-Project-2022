import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
} from 'react-native-agora';
import database from '@react-native-firebase/database';
import requestCameraAndAudioPermission from './permission';
import styles from './styles';

import {Button, Divider} from 'react-native-paper'

interface Props {}

/**
 * @property 
 * @property 
 * @property channelName Channel Name for the current session
 * @property joinSucceed State variable for storing success
 */
interface State {
  appId: string;
  token: string;
  channelName: string;
  joinSucceed: boolean;
  peerIds: number[];
  disabled: boolean;
  status: string;
}




export default class App extends Component<Props, State> {    

  _engine?: RtcEngine;

  constructor(props) {
    super(props);

    this.state = {
      appId: '670f7cf44f3b4a358e810c3c89ebcb08',
      token: '006670f7cf44f3b4a358e810c3c89ebcb08IADGllzpCJB2CUpzmKD9DxmwR4xVkHNOMvYMJmwV6qBLrQJkFYoAAAAAEAD+bihb3zRFYQEAAQDgNEVh',
      channelName: 'channel-x',
      joinSucceed: false,
      peerIds: [],
      disabled: true,
      status: 'Pending',
    };
    database()
    .ref('/Chat/Lamnso/teacher')    
    .child('status')
    .on('value', snapshot => {
        this.setState({status: snapshot.val()});
        
    });

    if (Platform.OS === 'android') {

      requestCameraAndAudioPermission().then(() => {
        console.log('requested!');
      });
    }
    
  }
  

  componentDidMount() {
    this.init();
  }

  /**
   * @name init
   * @description 
   */
  init = async () => {
    const { appId } = this.state;
    this._engine = await RtcEngine.create(appId);
    await this._engine.enableVideo();

    this._engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    this._engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      ToastAndroid.show('Tutor joined.', 3000);

      const { peerIds } = this.state;

      if (peerIds.indexOf(uid) === -1) {
        this.setState({

          peerIds: [...peerIds, uid],
        });
      }
    });

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      ToastAndroid.show('Tutor ended call.', 3000);
      const { peerIds } = this.state;
      this.setState({

        peerIds: peerIds.filter((id) => id !== uid),
      });
    });

    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);

      this.setState({
        joinSucceed: true,
      });
    });
  };

  /**
   * @name startCall
   * @description 
   */
  startCall = async () => {

    await this._engine?.joinChannel(
      this.state.token,
      this.state.channelName,
      null,
      0
    );
  };

  sendRequest = () => {
      
          
    database()
    .ref('/Chat/Lamnso/Status')
    .once('value')
    .then(snapshot => {
        this.setState({disabled: snapshot.val()})
    });

    database()
    .ref('/Chat/Lamnso/learner')     
    .child('appId')
    .on('value', snapshot => {
        this.setState({appId: snapshot.val()});
        
    });

    database()
    .ref('/Chat/Lamnso/learner')     
    .child('channelName')
    .on('value', snapshot => {
        this.setState({channelName: snapshot.val()});
        
    });

    database()
    .ref('/Chat/Lamnso/teacher')    
    .child('status')
    .on('value', snapshot => {
        this.setState({status: snapshot.val()});
        
    });

    database()
    .ref('/Chat/Lamnso/learner')      
    .child('token')
    .on('value', snapshot => {
        this.setState({token: snapshot.val()});

        database()
        .ref('/Chat/Lamnso/learner')
        .update({
          status: 'active',
        });

    });

    console.log(this.state.appId+ '' + this.state.channelName + ''+ this.state.token)
if(this.state.disabled){
  ToastAndroid.show('Initializing. Wait 5 seconds and try again', 3000);
}else{
          ToastAndroid.show('Call request validated. Await update on tutor status.', 3000);
      }
  }

  /**
   * @name endCall
   * @description 
   */
  endCall = async () => {
    await this._engine?.leaveChannel();
    database()
        .ref('/Chat/Lamnso/learner')
        .update({
          status: 'Pending',
        }).then(() => {
          this.setState({ peerIds: [], joinSucceed: false, disabled: true, status: 'Pending'});
          ToastAndroid.show('Call ended.', 2000);
        });
  };


  render() {
    
    return (
      <View style={styles.max}>
        <View style={styles.max}>
            <Button style={styles.request} mode="contained" color="white" onPress={this.sendRequest}>
              <Text style={styles.buttonText}> Request meeting </Text>
              </Button>
              <View style={styles.login}>
                  <Text style={styles.loginText}>Teacher's status: {this.state.status}</Text>
                  <Divider />
              </View>
              <Text style={styles.videoStat}>Video unavailable!</Text>
          <View style={styles.buttonHolder}>
            <Button disabled={this.state.disabled} icon="video-outline" mode="outlined" color="black" onPress={()=> {this.startCall(); ToastAndroid.show('Call started.', 3000);}}>
              <Text style={styles.buttonText}> Start </Text>
            </Button>
          </View>
          <Button style={styles.endbtn} disabled={this.state.disabled} icon="video-off-outline" onPress={()=>{this.endCall();}} mode="outlined" color="black">
              <Text style={styles.buttonText}> End  </Text>
            </Button>
          {this._renderVideos()}
        </View>
      </View>
    );
  }

  _renderVideos = () => {
    const { joinSucceed } = this.state;
    return joinSucceed ? (
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {this._renderRemoteVideos()}
      </View>
    ) : null;
  };

  _renderRemoteVideos = () => {
    const { peerIds } = this.state;
    return (
      <ScrollView
        style={styles.remoteContainer}
        contentContainerStyle={{ paddingHorizontal: 2.5 }}
        horizontal={true}
      >
        {peerIds.map((value) => {
          return (
            <RtcRemoteView.SurfaceView
              style={styles.remote}
              uid={value}
              channelId={this.state.channelName}
              renderMode={VideoRenderMode.Hidden}
              zOrderMediaOverlay={true}
            />
          );
        })}
      </ScrollView>
    );
  };
  
}
