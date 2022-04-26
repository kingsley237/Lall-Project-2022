import React from 'react';
import {View, Text, TouchableOpacity, ToastAndroid, ScrollView, Alert, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './learnStyle';
import { Card } from 'react-native-material-cards';
import FastImage from 'react-native-fast-image'
import database, {firebase}from '@react-native-firebase/database';
import {Button} from 'react-native-paper'

function createTwoButtonAlert(){
   Alert.alert(
      "Usage Tip",
      "Swipe left and right to cycle between lessons and exercises.",
      [
        { text: "OK" }
      ]
    );
 }

 function reference(){
   Alert.alert(
     "Reference",
     "Baka grammar\n\nA grammaticalisation account\n\nChrista Kilian-Hatz & Yves Leonard",
     "",
     "",
     [
       {
         text: "Cancel",
         style: "cancel"
       },
       { text: "OK", onPress: () => console.log("OK Pressed") }
     ]
   );
 }

 

function learn({navigation}) {

   

  const [alphacont, setAlpha] = React.useState(false);
  const [division, setDivision] = React.useState(false);
  const [noun, setNoun] = React.useState(false);
  const [orth, setOrth] = React.useState(false);
  const [icon1, seticon1] = React.useState("");
  const [icon2, seticon2] = React.useState("");
  const [icon3, seticon3] = React.useState("");
  const [icon5, seticon5] = React.useState("");

  var ref='/Languages/Baka'; 
  var a =  database().ref(ref+'/Pronouns');
  var b =  database().ref(ref+'/Alphabet');
  var c =  database().ref(ref+'/Negation');
  var d =  database().ref(ref+'/Verbs');

  
React.useEffect(() => {
   const onChildAdd = database()
   .ref(ref)
   .on('child_added', snapshot => {
     ToastAndroid.show('A new Content added '+ snapshot.key?.toString().trim() + ' in pending state', 3000);
   });
   
 return () => database().ref(ref).off('child_added', onChildAdd);
 }, [])
 
 React.useEffect(() => {
   const onChildDelete = database()
   .ref(ref)
   .on('child_removed', snapshot => {
     ToastAndroid.show('A Content has been removed: '+ snapshot.key?.toString().trim(), 3000);
   });
   
 return () => database().ref(ref).off('child_added', onChildDelete);
 }, []);

  a.child('disable').on('value', snapshot => {            
        if(snapshot.val() === "true"){
           setOrth(true);
              seticon5("close-octagon")
           }else{
              setOrth(false);
              seticon5("")     
          }   
  });
  
  b.child('disable').on('value', snapshot => {          
     if(snapshot.val() === "true"){
     setAlpha(true);
        seticon1("close-octagon")
     }else{
         setAlpha(false);
         seticon1("")     
     }   
  });
  
  c.child('disable').on('value', snapshot => {          
     if(snapshot.val() === "true"){
     setNoun(true);
        seticon3("close-octagon")
     }else{
        setNoun(false);
        seticon3("")     
    }   
  });
  
  d.child('disable').on('value', snapshot => {          
     if(snapshot.val() === "true"){
     setDivision(true);
        seticon2("close-octagon")
     }else{
        setDivision(false);
        seticon2("")     
    }   
  });
  

   setTimeout(() =>{
      createTwoButtonAlert();
    }, 1000)

   
function alpha(){       
ToastAndroid.show('Please wait...', 5000)

setTimeout(() =>{
   navigation.replace('ToNso')
     }, 3000);
   navigation.navigate('loading') 
   
}

function tenses(){       
   ToastAndroid.show('Please wait a few seconds for initialization...', 5000)
   
   setTimeout(() =>{
      navigation.replace('Salutation')
        }, 4000);
      navigation.navigate('loading') 
      
   }

   function nouns(){           
      ToastAndroid.show('Please wait a few seconds for initialization...', 5000)
      
      setTimeout(() =>{
         navigation.replace('nouns')
           }, 4000);
         navigation.navigate('loading') 
         
      }

      function negate(){             
         ToastAndroid.show('Please wait a few seconds for initialization...', 5000)
         
         setTimeout(() =>{
            navigation.replace('punctuation')
              }, 4000);
            navigation.navigate('loading') 
            
         }

         function verbs(){        
            ToastAndroid.show('Please wait a few seconds for initialization...', 5000)
            
            setTimeout(() =>{
               navigation.replace('Verbs')
                 }, 4000);
               navigation.navigate('loading') 
               
            }
    return ( 
           
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ height: 1870, justifyContent: 'center', backgroundColor: 'white' }}>
        <View style={styles.container}>
           <Text style={styles.title}>LEARN</Text>

            <View style={styles.content}>
            <Button style={{width: 150, bottom: 45}}
                      onPress={()=> navigation.navigate('about')}
                      uppercase={false}
                      color="black"
                      mode="outlined"
                      >
                        About<Text style={{color: "blue"}}> BAKA</Text>             
                     </Button>
            <TouchableOpacity style={styles.ref}
                      onPress={()=> reference()}
                      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                      >
                         <Text style={styles.buttontext2}>Reference</Text>             
                     </TouchableOpacity>
            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={{uri:'https://discovertemplate.com/wp-content/uploads/2020/07/DT_G17_-Education-Animated-GIF-Icon-Pack.gif'}} style={{height: 250, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                              <MaterialCommunityIcons name="alphabetical-variant" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
                           <Text style={styles.text1}>Alphabet</Text>    
                              </View>
                     <Button style={styles.button1}
                      onPress={()=>alpha()}
                      uppercase={false}
                      disabled={alphacont}
                      icon={icon1}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Learn More</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={{uri:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/tmp/education-mobile.gif'}} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                           <MaterialCommunityIcons name="account-voice" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
            <Text style={styles.text1}>Pronouns</Text>       
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> nouns()}
                      uppercase={false}
                      disabled={orth}
                      icon={icon5}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Learn More</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={{uri:'https://media.istockphoto.com/vectors/the-woman-says-no-with-the-gesture-she-turns-away-and-crosses-her-vector-id1227346879?k=6&m=1227346879&s=612x612&w=0&h=ZnIjd7haUpyDSjLdfQhFKDBnmbSsqSBbr3H6N-AwVSY='}} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                     <MaterialCommunityIcons name="account-question" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
        <Text style={styles.text1}>Negation</Text>     
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> negate()}
                      uppercase={false}
                      disabled={noun}
                      icon={icon3}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Learn More</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/verb.jpg')} style={{height: 300, width: 300}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                           <MaterialCommunityIcons name="charity" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
            <Text style={styles.text1}>Verbs</Text>      
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> verbs()}
                      uppercase={false}
                      disabled={division}
                      icon={icon2}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Learn More</Text>             
                     </Button>
                              </View>
            </Card>

           </View>
        </View>
        <StatusBar
    barStyle = "dark-content"
    // dark-content, light-content and default
    hidden = {false}
    //To hide statusBar
    //Background color of statusBar only works for Android
    translucent = {false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible = {true}
/>
        </ScrollView>
    )
}

export default learn;
