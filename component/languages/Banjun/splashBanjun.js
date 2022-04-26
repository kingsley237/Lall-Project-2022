import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View, Dimensions} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import FastImage from 'react-native-fast-image'
import { Grayscale } from 'react-native-color-matrix-image-filters'


function splashBanjun({ navigation }) { 

    const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim,         
      }}
    >
      {props.children}
    </Animated.View>
  );
}
  

  return (
    <View style={styles.container}>
    <View style={{width: Dimensions.get('window').width, height: 500, backgroundColor: '#8BD7EA', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <FastImage source = {{uri: 'https://i.pinimg.com/originals/e7/eb/f6/e7ebf6bec4e144db3d6696e9c77726bb.gif'}} style={{
    width: 200,
    height: 100,
    top: 500,
    position: 'absolute',}}/>
    <Text style={{color: 'white', top: 580, fontFamily: 'Poppins-Medium', backgroundColor: '#88D7EA', width: Dimensions.get('window').width, textAlign: 'center', position: 'absolute', paddingBottom: 400}}>Loading...</Text>
        <View style={{backgroundColor: 'white', padding: 100}}>
        <FastImage source = {{uri: 'https://cdn.dribbble.com/users/1976394/screenshots/5606793/daliak_reading.gif'}} style={{width: 230, height: 150,}}/>
        </View>
        <View style={{backgroundColor:'#000', width: Dimensions.get('window').width}} />
        </View>
    <StatusBar style="auto"></StatusBar>
    </View>
  );
}

export default splashBanjun;



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8BD7EA',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  }, 
  img4:{
    width: 150,
    height: 100,
    bottom: -2,
    position: 'absolute',
  },
  splashtext:{
    width: 380,
    backgroundColor: 'white',
    top: 571,
    position: 'absolute',
    height: 230,
  },
  img2:{
    width: 150,
    height: 150,
  },
  text:{
    textAlign: 'center',
    color: 'black',
    top: 50, 
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
    fontWeight: 'bold'
  },
  splashscreen:{
      position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 630,
    width: 100,
    right: 240,
    backgroundColor: 'white'
  },
  img:{
    width: 177,
    height: 210,
  },
  img3:{
    bottom: 40,
    width: 350,
    height: 210,
  },
  map:{
    top: 11
  },
  col:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 355,
    bottom: 30
  },
  titles:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  appname:{
    fontFamily: 'JosefinSans-Bold',
    left: 70,
    width: 300,
    fontSize: 70,
  },
  desc:{
    width: 300,
    left: 40,
    marginBottom: 100,
    fontSize: 20,
    color: '#5c5e62',
    marginTop: -1,
    fontFamily: 'Poppins-Light',
  },
  imgBack:{
    top: 290,
    width: 400,
    height: 500,
    resizeMode: 'cover',
    position: 'absolute',
  },
});
