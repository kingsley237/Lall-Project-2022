import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, View, ImageBackground, ToastAndroid, Image, Alert, BackHandler} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import AsyncStorage from '@react-native-community/async-storage'
import NetInfo from '@react-native-community/netinfo'


function FirstPage({ navigation }) { 

  function checkInternet(){    
  NetInfo.addEventListener(state => {
    if (state.isConnected) {
      navigation.replace('Onboard')
    } else {
      ToastAndroid.show('No connection detected.', 2000);
      navigation.navigate('internet')
    }  
  });
  }

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(async() =>{
    await AsyncStorage.getItem('@viewOnBoarding').then(value =>{
      try{
      if(value === null){
        AsyncStorage.setItem('@viewOnBoarding', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (e) {
      console.warn(e);
    }
    });
  }, []);

 if(isFirstLaunch === null){
    return null;
  }else if(isFirstLaunch === true){
      setTimeout(() =>{
        navigation.replace('Onboard');
       }, 4000);
  }else{
      setTimeout(() =>{
        checkInternet();
       }, 4000); 
  } 

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

      <FadeInView>
    <View style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.imgBack} />   
        <View style={styles.splashscreen}>
        <Image source = {require('../img/new.jpg')} style={styles.img}/>
        </View>
    </View>
    <StatusBar style="auto"></StatusBar>
    </FadeInView>
  );
}

export default FirstPage;



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },

  splashscreen:{
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
    width: 100,
    backgroundColor: 'white'
  },
  img:{
    width: 340,
    height: 250,
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
