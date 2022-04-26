import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, ToastAndroid} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../learn/learnStyle';
import { Card } from 'react-native-material-cards';
import FastImage from 'react-native-fast-image'
import database, {firebase}from '@react-native-firebase/database';
import {Button} from 'react-native-paper'



function exercises({navigation}) {

   

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

   var ref='/Languages/Duala'; 
   var a =  database().ref(ref+'/Pronouns');
   var b =  database().ref(ref+'/Alphabet');
   var c =  database().ref(ref+'/Nouns');
   var d =  database().ref(ref+'/Verbs');
   var e =  database().ref(ref+'/Tenses');

   
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

    return ( 
           
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ height: 2240, justifyContent: 'center', backgroundColor: 'white' }}>
        <View style={styles.container}>
           <Text style={styles.title}>EXERCISES</Text> 

            <View style={styles.content}>

               
            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/alpha2.gif')} style={{height: 290, width: 300, left: 10}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                              <MaterialCommunityIcons name="alphabetical-variant" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
                           <Text style={styles.text1}>Alphabet</Text>    
                              </View>
                     <Button style={styles.button1}
                      onPress={()=>navigation.navigate('alphabet')}
                      uppercase={false}
                      disabled={alphacont}
                      icon={icon1}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Launch</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/salutationEx.jpg')} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                              <MaterialCommunityIcons name="message-bulleted" color='black' size={20} style={{marginTop: 13, marginRight: 15,}}/> 
               <Text style={styles.text1}>Pronouns</Text>     
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> navigation.navigate('salutationEx')}
                      uppercase={false}
                      disabled={orth}
                      icon={icon5}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Launch</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/study.gif')} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                           <MaterialCommunityIcons name="account-voice" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
            <Text style={styles.text1}>Nouns</Text>       
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> navigation.navigate('nounsEx')}
                      uppercase={false}
                      disabled={noun}
                      icon={icon3}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Launch</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={{uri:'http://unblast.com/wp-content/uploads/2020/05/Graphic-Design-Vector-Illustration.jpg'}} style={{height: 300, width: 350}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                     <MaterialCommunityIcons name="chair-school" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
        <Text style={styles.text1}>Tenses</Text>     
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> navigation.navigate('punctuationEx')}
                      uppercase={false}
                      disabled={punct}
                      icon={icon4}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Launch</Text>             
                     </Button>
                              </View>
            </Card>

            <Card style={{borderWidth: 1, borderColor: 'grey', borderRadius: 3, elevation: 1, marginTop: 20}}>
                        <View style={{width: 310, height: 200, alignItems: 'center'}}>
                     <FastImage source={require('../../../../img/verbEx.jpg')} style={{height: 300, width: 300}}/>
                     </View>
                     <View style={{flexDirection: 'row', marginTop: 100}}>                     
                     <View style={styles.option1}>
                           <MaterialCommunityIcons name="charity" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
            <Text style={styles.text1}>Verbs</Text>      
                              </View>
                     <Button style={styles.button1}
                      onPress={()=> navigation.navigate('verbEx')}
                      uppercase={false}
                      disabled={division}
                      icon={icon2}
                      color="black"
                      mode="contained"
                      >
                         <Text style={styles.buttontext}>Launch</Text>             
                     </Button>
                              </View>
            </Card>
           </View>
        </View>
        </ScrollView>
    )
}

export default exercises;
