import React, {useState} from 'react'
import {StatusBar} from 'expo-status-bar'
import { Image, Text, View, TextInput, ToastAndroid, LogBox, Alert, Linking} from 'react-native';
import homestyles from './HomeStyle.js'
import StyledButton from '../Button/Button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database, {firebase}from '@react-native-firebase/database';
import { Button, Checkbox, Divider } from 'react-native-paper';



function Home({ navigation }) {
    

    LogBox.ignoreAllLogs(true);
   

    const [password, setPassword] = useState('');
    const [checked, setChecked] = React.useState(false);  
    const [email, setEmail] = useState('');
    const [databaseEmail, setdatabaseEmail] = useState('');
    const [dbPassword, setdbPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);
    const [text, setText] = useState("Log in");
    const [icon, setIcon] = useState("");

    async function checkEmail(){
            var id= firebase.auth().currentUser.uid; 
                var ref='/users/UID: '+id;        
                 database()
                .ref(ref+'/Info')
                .child('userEmail')
                .once('value', snapshot => {
                     setdatabaseEmail(snapshot.val())
            });

            database()
            .ref(ref+'/Info')
            .child('userPassword')
            .once('value', snapshot => {
                 setdbPassword(snapshot.val())
        });
        if(databaseEmail != null && dbPassword != null){
                ToastAndroid.show('Email verified.', 1000);
                setLoading(false);                                     
                setDisable(false);
                navigation.replace('Choice')                
            }else if(databaseEmail === "" || databaseEmail != email){
                checkEmptyEmail()              
            }
    
}

 function checkEmptyEmail(){
     setLoading(false);                                     
     setDisable(false);
      setText("Try again");
     setIcon("alert-circle");
    ToastAndroid.show('No account registered. Register or try again.', 1000);
}


      return (
            <View style={homestyles.container}>
                    <Image source = {require('../../img/logo.png')} style={homestyles.img}/>
                        <Text style={homestyles.title}>Login</Text>
                        <Text style={homestyles.desc}>Enter your credentials to have access</Text>
                        <View style={homestyles.email}>
                        <MaterialCommunityIcons name="email" color={'black'} size={25} />
                        <TextInput keyboardType="email-address" style={{flex: 1, paddingLeft: 20, fontSize: 17,}} placeholder="Enter your email" onChangeText={(value) => setEmail(value)}></TextInput>
                        </View> 
                        <View style={homestyles.email}>
                        <MaterialCommunityIcons name="lock" color={'black'} size={25} />
                        <TextInput secureTextEntry={true} style={{flex: 1, paddingLeft: 20, fontSize: 17,}}  placeholder="Enter your password" onChangeText={(value) => setPassword(value)}></TextInput>
                        </View>
                        <View style={homestyles.checkbox}>
                            <Text style={{fontFamily: 'Poppins-Light'}}>Forgotten Password?</Text>
                        <Checkbox
                        color="black"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
            setChecked(!checked);
            if(!checked) {
                const timeout = setTimeout(() => {      
                    clearTimeout(timeout);
                    Linking.openURL('mailto:kinnsleynsah@gmail.com?subject=Request password reset.');
                    setChecked(false);
                }, 3000)                
                ToastAndroid.show('Redirecting. Please wait.', 4000)
                      }
      }}
    />
    </View>
                            <View style={homestyles.operate}>
                                <Button mode="contained" disabled={disable} icon={icon} loading={loading}style={homestyles.button} contentStyle={{paddingRight: 50, paddingLeft: 50, paddingTop: 5, paddingBottom: 5}} color="#000" onPress={() => {
                                    setText("Loading")                                   
                                   
                                   if(email === "" || password === ""){
                                        setLoading(false);                                        
                                        setDisable(false);

                                        ToastAndroid.show('Both fields are required', 4000)
                                    }else{
                                        setLoading(true);
                                        setDisable(true);
                                    auth().signInWithEmailAndPassword(email, password).then(() => {
                                            checkEmail();  
                                    }).catch(error => {
                                        setLoading(false);                                        
                                        setDisable(false)
                                        setText("Try again");
                                        setIcon("alert-circle");
                                        Alert.alert("Warning",error.message, [{text: 'OK', onPress:()=> {
                                            setText("Log in");
                                            setIcon("")
                                        }}]);
                                    });
                                }}}>
                                    
                                    {text}
                                    </Button>
                                    <View style={{padding: 10}}>
                                <Text style={homestyles.toSignup} onPress={() => navigation.navigate('Signup')}>No account? Sign Up</Text>
                                <Divider />
                                </View>
                            </View>
                            
            <StatusBar style="auto"></StatusBar>
            </View>
            
    )
}
export default Home;
