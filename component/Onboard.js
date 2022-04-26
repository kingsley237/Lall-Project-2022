import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet, View, TouchableOpacity, Text, Alert, BackHandler} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import NetInfo from '@react-native-community/netinfo'


const Skip =({...props})=>(
        <TouchableOpacity 
        style={styles.Skip}
            {...props}
            ><Text style={styles.white}>Skip</Text>
            </TouchableOpacity>
                
);

function checkInternet(navigation){
  NetInfo.addEventListener(state => {
    if (!state.isConnected) {
      navigation.navigate('internet');
    } 
  });

}

const Next =({...props})=>(
    <TouchableOpacity 
    style={styles.Next}
    {...props}
    ><Text style={styles.white}>Next</Text>
    </TouchableOpacity>
);

const Done =({...props})=>(
    <TouchableOpacity 
    style={styles.Next}
    {...props}
    ><Text 
    style={styles.Done}>Done</Text>
    </TouchableOpacity>
);
function Onboard({ navigation}) {
    return (
        <View style={styles.container}>
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    onSkip={()=> {checkInternet(navigation);
                  navigation.navigate('SecondPage');}}
    onDone={()=> {checkInternet(navigation);
      navigation.navigate('SecondPage');}}
      
    titleStyles={{fontFamily:'Poppins-Medium'}}
    subTitleStyles={{fontFamily:'Poppins-Light'}}
        transitionAnimationDuration = {300}
        pages={[

          {
            backgroundColor: '#09131F',
            image: <Image source={require('../img/muslim.jpg')} style={styles.img}/>,
            title: 'Learn A Local Language',
            subtitle: 'A New Way Of Intergrating With The People',
          },
            
          {
            backgroundColor: 'rgb(255,111,111)',
            image: <Image source={require('../img/board3.png')} style={styles.img}/>,
            title: 'Bringing people together',
            subtitle: 'A Specific Objective: Improve Interactivity Amongst People',
          },
          
          {
            backgroundColor: '#DEDCF4',
            image: <Image source={require('../img/board2.png')} style={styles.img}/>,
            title: 'Ease Communication',
            subtitle: 'Share Your Thoughts With Society\'s Individuals',
          },
          {
            backgroundColor: '#3ABB92',
            image: <Image source={require('../img/board1.png')} style={styles.img}/>,
            title: 'Experience Multilingualism',
            subtitle: 'Sharpen Your Mind Through New Languages',
          },
        ]}
      />
      <StatusBar style="auto"></StatusBar>
      </View>
    )
}

const styles = StyleSheet.create({
img:{
    width: 300,
    height: 300,
},
container: {
  flex: 1,
},
Next:{
    right: 10,
},

Done:{
    fontFamily: 'Poppins-Medium',
    right: 10,
    color: 'white'
},
Skip:{
    left: 10
},
white:{
  color: 'white'
}
});

export default Onboard
