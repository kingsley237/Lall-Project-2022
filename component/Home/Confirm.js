import React, {useState} from 'react'
import {StatusBar} from 'expo-status-bar'
import { Image, Text, View, TextInput, ScrollView, ToastAndroid, BackHandler, Alert, LogBox} from 'react-native';
import homestyles from './HomeStyle.js'
import StyledButton from '../Button/Button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database, {firebase}from '@react-native-firebase/database';
import { Button } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';

function Confirm({route, navigation}) {
    LogBox.ignoreAllLogs(disable);

    const { uid } = route.params;

    function handleBackButtonClick() {
        Alert.alert(
            "Warning",
            "This action will log you out of your account!",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "Proceed", onPress: () => {auth().signOut().then(() => {
                ToastAndroid.show('Logging out...', 3500);
                setTimeout(() =>{
                    navigation.replace('SecondPage');
                }, 3000)
                            }
                )}
            }
            ]
          );
        return true;
      }

      React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);
    
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [check, setCheck] = useState("Check");
    const [icon, setIcon] = useState("");
    const [tel, setTel] = useState("+237");
    const [number, setNumber] = useState("");
    
    var ref = '/users/UID: '+uid;               
    database()
        .ref(ref+'/Info')
        .child('userEmail')
        .on('value', snapshot => {
            setEmail(snapshot.val())
      });

      database()
      .ref(ref+'/Info')
      .child('userPassword')
      .on('value', snapshot => {
          setPasscode(snapshot.val())
    });

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
      }

    async function confirmCode() {
        try {
          await confirm.confirm(code);       
          auth().signInWithEmailAndPassword(email, passcode).then(() => { 
              if(email === "" && passcode === ""){
                 setLoading(false);
                 setLoading2(false);
                  ToastAndroid.show('No account found!', 3000);
                  setDisable(false);
              }else{           
          ToastAndroid.show('Number checked successfully', 3000);
          auth().signOut().then(() =>{
            navigation.replace('Home')
            setLoading(false);
            setDisable(false);
            setLoading2(false);
          })
        } 
    }).catch(error => {
        setLoading(false);
        setLoading2(false);
        ToastAndroid.show(error, 4000);
    });   
        } catch(error) {
            setLoading(false);
            setLoading2(false);
            ToastAndroid.show('Invalid code', 4000);
            ToastAndroid.show(error, 4000);
        }
      }
    
    const [code, setCode] = useState('');
    const [disable, setDisable] = useState(false);
    const phoneInput = React.useRef(null);
    const [confirm, setConfirm] = useState(null);
    const [email, setEmail] = useState('');
    const [passcode, setPasscode] = useState('');

    function checkNum(number){
        if(number ===""){
            setLoading(false);
            ToastAndroid.show('All fields required', 4000);
        }else if(!phoneInput.current.isValidNumber(number)){
            ToastAndroid.show('Number is invalid in selected country', 4000);
        }else{
     var id= firebase.auth().currentUser.uid; 
      var ref = '/users/UID: '+uid;
      database().ref(ref+'/Info').update({
        PhoneNumber: number,
    }).then(()=> {
        ToastAndroid.show('Number is valid!', 1000);
        setLoading(false);
        setCheck("Checked");
        setIcon("check-circle");
        ToastAndroid.show('Please wait...', 4000)
         signInWithPhoneNumber(number)
    }).catch((e)=> {
        ToastAndroid.show('Error: ' + e.message, 2000);
    });                                            
      /* database()
        .ref(ref+'/Info')
        .child('PhoneNumber')
        .once('value', snapshot => {
            if(number != snapshot.val())
            {
                ToastAndroid.show('Wrong Number or No account found!. Try again.', 2000);
                setLoading(false);
                setCheck("Try again")
            } else{           
        ToastAndroid.show('Number is valid!', 1000);
        setLoading(false);
        setCheck("Checked");
        setIcon("check-circle");
        ToastAndroid.show('Please wait...', 4000)
         signInWithPhoneNumber(number)
        }
        }); */
    }
  }

                {/*To begin with the email and password first, I can insert the data into realtime database using the phone auth ID instead -_- -_- -_- -_-*/}

    return (
        <ScrollView>
            <View style={homestyles.containerConfirm}>
                        <Image source = {require('../../img/logo.png')} style={homestyles.img}/>
                            <Text style={homestyles.title2}>Confirm Code</Text>
                            <Text style={homestyles.desc}>Authenticate your phone number to proceed</Text>

                            <PhoneInput
                            ref={phoneInput}
                            defaultValue={number}
                            defaultCode="CM"                            
                            placeholder="Enter number"
                            layout="first"
                            containerStyle={homestyles.phoneContainer}
                            textContainerStyle={homestyles.textInput}
                            onChangeFormattedText={text => {
                            setNumber(text);
                            }}
                        />
                                <View style={homestyles.operate}>
                                    <Button mode="contained" icon={icon} loading={loading} style={homestyles.confirmBtn} color="#000" onPress={() => {
                                        if(!phoneInput.current.isValidNumber(number)){
                                            ToastAndroid.show('Number is invalid in selected country', 4000);
                                        }else if(number === ""){
                                            ToastAndroid.show('Please enter your phone number', 4000);
                                        }else{
                                        setLoading(true);
                                        setCheck("Checking...");
                                        checkNum(number) 
                                    }                                   
                                    }}>{check}</Button>
                                </View>
                                <View style={homestyles.username2}>
                            <MaterialCommunityIcons name="shield-lock-outline" color={'black'} size={25} />
                            <TextInput keyboardType="number-pad" style={{flex: 1, paddingLeft: 20, fontSize: 17,}} placeholder="Unique OTP" value={code} onChangeText={text => setCode(text)} ></TextInput>
                            </View> 
                                <View style={homestyles.operate2}>
                                    <Button mode="contained" loading={loading2} style={homestyles.confirmBtn} disabled= {disable} color="#000" onPress={() => { 
                                        setDisable(true);
                                        if(code === ""){
                                            ToastAndroid.show('Enter the OTP code sent to proceed.', 4000)
                                            setDisable(false);
                                        }else{
                                        setDisable(true);
                                        setLoading2(true);
                                        confirmCode()
                                    }
                                    }}>Confirm Code</Button>
                                </View>
                                
                <StatusBar backgroundColor={"white"}></StatusBar>
                </View>
            </ScrollView>
    )
}

export default Confirm;
