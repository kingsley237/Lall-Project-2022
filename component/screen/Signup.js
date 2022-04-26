// @ts-nocheck
import React, {useState} from 'react'
import {View, Text, Image, TextInput, ScrollView, Alert, ToastAndroid, TouchableOpacity, StatusBar} from 'react-native';
import StyledButton from '../Button/Button';
import homestyles from '../Home/HomeStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database, {firebase} from '@react-native-firebase/database';
import { Button, Divider } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';


function Signup({navigation}) {
    const phoneInput = React.useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Sign up");
    const [icon, setIcon] = useState("");
    return (
        <ScrollView>
            
            <View style={homestyles.container}>
                    <Image source = {require('../../img/logo.png')} style={homestyles.img}/>
                        <Text style={homestyles.title}>Sign up</Text>
                        <Text style={homestyles.desc}>Enter your credentials to register</Text> 
                        <View style={homestyles.username}>
                           <MaterialCommunityIcons name="account-circle" color={'black'} size={25} />
                        <TextInput  style={{flex: 1, paddingLeft: 20, fontSize: 17, }} placeholder="Enter your username" value={username} onChangeText={(value) => setUsername(value)}></TextInput>
                        </View>
                        <View style={homestyles.email}>
                           <MaterialCommunityIcons name="email" color={'black'} size={25} />
                        <TextInput keyboardType="email-address"  style={{flex: 1, paddingLeft: 20, fontSize: 17,}} placeholder="Enter your email" value={email} onChangeText={(value) => setEmail(value)}></TextInput>
                        </View>
                        <View style={homestyles.email}>
                           <MaterialCommunityIcons name="lock" color={'black'} size={25} />
                        <TextInput secureTextEntry={true}  style={{flex: 1, paddingLeft: 20, fontSize: 17,}} placeholder="Enter your password" value={password} onChangeText={(value) => setPassword(value)}></TextInput>
                        </View>
                        <View style={homestyles.email}>
                           <MaterialCommunityIcons name="lock" color={'black'} size={25} />
                        <TextInput secureTextEntry={true}  style={{flex: 1, paddingLeft: 20, fontSize: 17,}} placeholder="Confirm your password" value={confirmpassword} onChangeText={(value) => setConfirmPassword(value)}></TextInput>
                        </View>
                           {/*  <PhoneInput
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
                        /> */}

                            <View style={homestyles.operate}>
                                <Button mode="contained" disabled={disable} icon={icon} loading={loading} style={homestyles.button2} contentStyle={{paddingRight: 50, paddingLeft: 50, paddingTop: 5, paddingBottom: 5}} color="#000" onPress={() => {  
                                    
                        if(username === "" || email === "" || password === ""){
                            setLoading(false);                                     
                            setDisable(false);
                            ToastAndroid.show('All fields required', 4000);
                        }else if(confirmpassword != password){
                            ToastAndroid.show('The passwords do not match', 4000);
                        }else /* if(!phoneInput.current.isValidNumber(number)){
                            ToastAndroid.show('Number is invalid in selected country', 4000);
                        }else */{  
                            setLoading(true);                            
                            setDisable(true);                      
                auth().createUserWithEmailAndPassword(email, password).then(() => {  
                    
                    var id= firebase.auth().currentUser.uid;         
                    database().ref('/users/UID: '+id+'/Info').set({
                        userName: username,
                        userEmail: email,
                        userPassword: password,
                    }).then(() => {
                    ToastAndroid.show('Success', 4000);
                    setLoading(false);                                     
                    setDisable(false);
                    navigation.navigate('Confirm', {
                        uid: id,
                      });
                    });           
            }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                setLoading(false);                                     
                setDisable(false);
                setText("Error");
                setIcon("alert-circle")
                Alert.alert('Warning', 'The email already in use', [{text: 'OK', onPress:()=> {
                    setText("Sign up");
                    setIcon("")
                }}]);
            }else if (error.code === 'auth/invalid-email') {
                setLoading(false);                                     
                setDisable(false);
                setText("Error");
                setIcon("alert-circle")
                Alert.alert('Warning', 'The email is invalid', [{text: 'OK', onPress:()=> {
                    setText("Sign up");
                    setIcon("")
                }}]);
            }else if (error.code == 'auth/weak-password') {
                setLoading(false);                                     
                setDisable(false);
                setText("Error");
                setIcon("alert-circle")
                Alert.alert('Warning', 'password is too weak', [{text: 'OK', onPress:()=> {
                    setText("Sign up");
                    setIcon("")
                }}]);
              }            
            setLoading(false);                                     
            setDisable(false);
            setText("Error");
            setIcon("alert-circle");
            Alert.alert('Error', error.message, [{text: 'OK', onPress:()=> {
                setText("Sign up");
                setIcon("")
            }}]);
            console.error(error);
            }); 
             }}}>{text}</Button>
             <View style={{padding: 10}}>
         <Text style={homestyles.toLogin} onPress={() => navigation.navigate('Home')}>Have an account? Log in</Text>
         <Divider />
         </View>
         </View>
            </View>
            <StatusBar backgroundColor={"white"} />
        </ScrollView>
    )
}

export default Signup;
