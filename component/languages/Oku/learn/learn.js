import React from 'react';
import {View, Text, TouchableOpacity, ToastAndroid, ScrollView, Alert, RefreshControl} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './learnStyle';
import { Card } from 'react-native-material-cards';
import FastImage from 'react-native-fast-image'
import database, {firebase}from '@react-native-firebase/database';
import { Button } from 'react-native-paper';


function learn({navigation}) {

   const [alphacont, setAlpha] = React.useState(false);
   const [division, setDivision] = React.useState(false);
   const [noun, setNoun] = React.useState(false);
   const [punct, setPunct] = React.useState(false);
   const [orth, setOrth] = React.useState(false);
   const [icon1, seticon1] = React.useState("");
   const [icon2, seticon2] = React.useState("");
   const [icon3, seticon3] = React.useState("");
   const [icon4, seticon4] = React.useState("");
   const [icon5, seticon5] = React.useState("");

   var ref='/Languages/Awing'; 
   var a =  database().ref(ref+'/Orthography');
   var b =  database().ref(ref+'/Alphabet');
   var c =  database().ref(ref+'/Nouns');
   var d =  database().ref(ref+'/Division');
   var e =  database().ref(ref+'/Punctuation');

   
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
   
   e.child('disable').on('value', snapshot => {          
      if(snapshot.val() === "true"){
      setPunct(true);
         seticon4("close-octagon")
      }else{
         setPunct(false);
         seticon4("")     
     }   
   });

   function createTwoButtonAlert(){
      Alert.alert(
         "Usage Tip",
         "Swipe left and right to cycle between lessons and exercises.",
         [
           { text: "OK" }
         ]
       );
    }

   function alpha(){       
      ToastAndroid.show('Please wait...', 5000)
      
      setTimeout(() =>{
         navigation.replace('ToAwing')
           }, 3000);
         navigation.navigate('loading') 
         
      }

      function tenses(){       
         ToastAndroid.show('Please wait a few seconds for initialization...', 5000)
         
         setTimeout(() =>{
            navigation.replace('Salutation')
              }, 4000);
            navigation.navigate('loading2') 
            
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
                  navigation.navigate('loading2') 
                  
               }
      
               function verbs(){       
                  ToastAndroid.show('Please wait a few seconds for initialization...', 5000)
                  
                  setTimeout(() =>{
                     navigation.replace('Verbs')
                       }, 4000);
                     navigation.navigate('loading2') 
                     
                  }

      function reference(){
         Alert.alert(
           "Reference",
           "Orthography guide in Awing\n\nSIL Cameroon Library",
           "",
           "",
           [
             { text: "OK" }
           ]
         );
       }

       setTimeout(() =>{
          createTwoButtonAlert();
       }, 1000)


    return (
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ height: 2270, justifyContent: 'center', backgroundColor: 'white' }}>
        <View style={styles.container}>
           <Text style={styles.title}>LEARN</Text> 

            <View style={styles.content}>
               <Button style={{width: 150, bottom: 45}}
                      onPress={()=> navigation.navigate('about')}
                      uppercase={false}
                      color="black"
                      mode="outlined"
                      >
                        About<Text style={{color: "blue"}}> AWING</Text>             
                     </Button>
            <TouchableOpacity style={styles.ref}
                      onPress={()=> reference()}
                      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                      >
                         <Text style={styles.buttontext2}>Reference</Text>             
                     </TouchableOpacity>
               
            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/alpha.gif')} style={{height: 280, width: 350, left: 10}}/>
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
                     <FastImage source={require('../../../../img/word.jpg')} style={{height: 270, width: 320}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                     <MaterialCommunityIcons name="ab-testing" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
        <Text style={styles.text1}>Word Division</Text>   
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> tenses()}
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

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/noun.gif')} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                           <MaterialCommunityIcons name="account-voice" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
            <Text style={styles.text1}>Nouns</Text>       
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> nouns()}
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
                     <FastImage source={require('../../../../img/punctuationnew.png')} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                     <MaterialCommunityIcons name="account-question" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
        <Text style={styles.text1}>Punctuation</Text>     
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> negate()}
                      uppercase={false}
                      disabled={punct}
                      icon={icon4}
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
            <Text style={styles.text1}>Orthography</Text>      
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> verbs()}
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

           </View>
        </View>
        </ScrollView>
    )
}

export default learn;
