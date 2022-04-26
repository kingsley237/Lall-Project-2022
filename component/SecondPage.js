import React, {useRef} from 'react';
import {StatusBar} from 'expo-status-bar'
import {Animated, StyleSheet, Text, View, Image, ToastAndroid} from 'react-native';
import StyledButton from './Button/Button';
import database, {firebase}from '@react-native-firebase/database';
import {Button} from 'react-native-paper';

function SecondPage({navigation}) {
  
  React.useEffect(() =>{
    var id= firebase.auth().currentUser;
    if(id != null){
      ToastAndroid.show('Log-in success.', 2000);
      navigation.replace('Choice')
    }else{

      var RandomNumber = Math.floor(Math.random() * 10000); 
      const date = new Date().toLocaleString();

      database().ref('Visiting user/ID '+ RandomNumber).set({
        GenerateduserID: RandomNumber,
        date: date,
    }).then(() => {
      ToastAndroid.show('Visitor\'s ID is ' + RandomNumber, 4000);
    }).catch((e) => {
      ToastAndroid.show(e.message, 4000);
    });

    }
  },[])
  

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
        <View style={styles.splashscreen}>
        <Image source = {require('../img/logo.png')} style={styles.img}/>
          <View style={styles.titles}>
            <Text style={styles.appname}>Welcome to our platform</Text>
            <FadeInView>
        <StyledButton type="color" content={"sign up"} onPress={() => navigation.navigate('Signup')}/>
        <View style={{marginTop: 3}}></View>
        <StyledButton type="nocolor" content={"log in"} onPress={() => navigation.navigate('Home')}/> 
        </FadeInView>
          </View>
        </View>
        <StatusBar style="auto"></StatusBar>
        <View style={{top: 30, left: 70}}>
        <FadeInView>
          <Button icon="information" mode="outlined" onPress={() => navigation.navigate("About")} color="#000">
            About us
          </Button>
        </FadeInView>
        </View>
    </View>
  );
}

export default SecondPage;

const styles = StyleSheet.create({
    container: {
        height: 900,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    splashscreen:{
      width: 100,
    },
    img:{
        bottom: 170,
      width: 100,
      height: 150,
      right: 120,
    },
    titles:{
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    appname:{
        marginBottom: 100,
        bottom: 180,
      right: 10,
      width: 300,
      fontSize: 50,
      fontWeight: '700',
      fontFamily: 'Poppins-Medium'
    },
    desc:{
        bottom: 190,
      width: 300,
      left: 60,
      fontSize: 17,
      color: '#5c5e62',
      marginTop: -1,
    },
    imgBack:{
      top: 300,
      width: 400,
      height: 500,
      resizeMode: 'cover',
      position: 'absolute',
    },
  });