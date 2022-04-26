import React from 'react'
import {View, Text, StatusBar, StyleSheet, BackHandler, ToastAndroid} from 'react-native'
import FastImage from 'react-native-fast-image'
import { Snackbar } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo'

function internet({navigation}) {

    const [visible2, setVisible2] = React.useState(false); 
    const onDismissSnackBar = () => setVisible2(false);

    React.useEffect(() => {
        NetInfo.addEventListener(state => {                
            if (state.isConnected) { 
                    clearInterval(interval);
                    setVisible2(false);                            
                ToastAndroid.show("LaLL: Connection established.", 1000);
                   toSignup();
              }  
        });
    
    },[])

        function toSignup(){
            navigation.navigate('FirstPage')
          } 

    const interval = setInterval(() => {
        setVisible2(true);
    }, 3000);
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <FastImage source={require('../../img/internet.jpg')} style={{height: 300, width: 350, bottom: 150}}/>
            <Text style={styles.head}>Whoops!</Text>
            <Text style={styles.body}>No network connection found.{"\n"} Check your Internet connection and try again.</Text>

            <Snackbar
                visible={visible2}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Close',
                onPress: () => {                     
                    clearInterval(interval); 
                    BackHandler.exitApp(); 
                },
                }}
                style={{backgroundColor: "#578E7B", color: "#000"}}
                >
                <Text style={styles.desc}>Exit LallProject?</Text>
            </Snackbar>
            
            <StatusBar
                    barStyle = "dark-content"
                    // dark-content, light-content and default
                    hidden = {false}
                    //To hide statusBar
                    backgroundColor = "#fff"
                    //Background color of statusBar only works for Android
                    translucent = {false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible = {true}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        color: "#FC8B7B",
        fontFamily: "Poppins-Light",
        fontSize: 40, 
        fontWeight: "bold",
        letterSpacing: 2,
        bottom: 150
    },
    body:{
        color: "#EBA094",
        textAlign: "center",
        fontFamily: "Poppins-Light",
        bottom: 140,
    },
    desc:{
        color: "#fff",
    }
})

export default internet
