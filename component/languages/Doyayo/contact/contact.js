import React, {useState} from 'react'
import {View, Text, Linking, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from 'react-native'
import styles from './contactStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import database, {firebase}from '@react-native-firebase/database';
import {Chip, Button} from 'react-native-paper'

export default function contact() {

    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState("SUBMIT");
    const [icon, setIcon] = useState("");

    function sendFeedback(message){
        setLoading(true); 
        
        const date = new Date().toLocaleString();

        if(message === ""){
            setLoading(false); 
            ToastAndroid.show('Please enter a message first', 1500);
        }else{
    var id= firebase.auth().currentUser.uid; 
    var ref = '/users/UID: '+id;                                              
    database()
        .ref(ref+'/Feedback')
        .set({
            Message: message,
            Date: date
          })
          .then(() =>{
            setLoading(false);
            setSubmit("SUBMITTED");
            setIcon("check-circle");

            setTimeout(() =>{
                if(submit == "SUBMITTED"){
            reset();
                }
            }, 8000)
          }
           );
        }
    }

    function reset(){
        setSubmit("SUBMIT");
        setIcon("");
        setLoading(false);
    }
    
    const [message, setMessage] = useState('')
    return (
        <ScrollView>
        <View style={styles.container}>
                <Text style={styles.header}>Contact Us</Text>
                <View style={styles.content}>
                <View style={styles.contact}>

                    <View style={styles.mail2}>
                    <Text style={styles.mailText}> 
                    Call us: 
                    </Text>
                    <Chip icon="phone" style={styles.chip} mode="outlined" onPress={() => {Linking.openURL('tel:683082785');}}>          Admin Contact</Chip>
                    </View>

                    <View style={styles.mail}>
                    <Text style={styles.mailText}onPress={() => Linking.openURL('mailto:kinnsleynsah@gmail.com?subject=LaLL Usage FeedBack / Contact') }> 
                    Mail us: 
                    </Text>
                    <Chip icon="email-multiple-outline" style={styles.chip} mode="outlined" onPress={() => Linking.openURL('mailto:kinnsleynsah@gmail.com?subject=LaLL Usage FeedBack / Contact') }>          Admin Email</Chip>
                    </View>

                    </View>
                    </View>
                    <View style={styles.feedback}>
                    <Text style={styles.header2}>FeedBack</Text>
                    <TextInput style={styles.input} placeholder="Enter your feedback....." value={message} onChangeText={(value) => 
                       { 
                       setSubmit("SUBMIT")
                       setIcon("");
                       setLoading(false)
                       setMessage(value)
                    }
                        }></TextInput>
                    <Button mode="contained" icon={icon} loading={loading} style={styles.button2} color="#000" onPress={() => {
                        sendFeedback(message)
                    }
                        }>{submit}</Button>
                    </View>

        </View>
        </ScrollView>
    )
}
