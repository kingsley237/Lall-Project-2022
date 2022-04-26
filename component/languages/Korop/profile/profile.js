import React, {useState} from 'react'
import {View, Text, ToastAndroid, TouchableOpacity, TextInput, Image, Alert, ScrollView} from 'react-native'
import styles from './profileStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database, {firebase}from '@react-native-firebase/database';
import Modal from 'react-native-modal';
import {StatusBar} from 'expo-status-bar';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Dialog from "react-native-dialog";
import {Badge, Button, Divider, Colors} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';



function profile({navigation}) {

  const [feedback, setFeedback] = useState(false);
  const [del, setDelete] = useState("Delete");
  const [logout, setLog] = useState("Logout");
  const [icon1, setIcon1] = useState("");
  const [icon2, setIcon2] = useState("");
    var id= firebase.auth().currentUser.uid; 
    var ref='/users/UID: '+id; 
    
    database()
    .ref(ref+'/Feedback')
    .child('response')
    .on('value', snapshot => {
        if(snapshot.val()){
          setFeedback(true)
    } else{
      setFeedback(false)
    }
  });


    database()
        .ref(ref+'/Info')
        .child('userName')
        .on('value', snapshot => {
            setName(snapshot.val())
      });
      database()
        .ref(ref+'/Info')
        .child('userEmail')
        .on('value', snapshot => {
            setEmail(snapshot.val())
      });
      database()
      .ref(ref+'/Info')
      .child('PhoneNumber')
      .on('value', snapshot => {
          setNumber(snapshot.val())
    });
    database()
    .ref(ref+'/Feedback')
    .child('response')
    .on('value', snapshot => {
        if(snapshot.val()){
        setNotification(snapshot.val());
        const date = new Date().toLocaleString();
        setTime(date);
    } else{
        setNotification('"Sorry. No notifications right now."');
        setTime('');
    }
  });
  database()
    .ref(ref+'/Feedback')
    .child('Message')
    .on('value', snapshot => {
        if(snapshot.val()){
        setMessage(snapshot.val())
    } else{
        setMessage('"Sorry. You have not given any feedback yet."')
    }
  });

      function changeName(username){
          if(username === ""){              
          ToastAndroid.show('Please enter a new name', 5000)
          }else{
        database()
        .ref(ref+'/Info')
        .update({
            userName: username,
          }).then(() => {
          ToastAndroid.show('Name changed successfully', 5000)
          setModalVisible(false)}
          );
        }
      }
      function changeNumber(usernumber){
          if(usernumber === ""){            
            ToastAndroid.show('Please enter a valid number', 5000)
          } else{
        database()
        .ref(ref+'/Info')
        .update({
            PhoneNumber: usernumber,
          }).then(() => 
          {
          ToastAndroid.show('Number changed successfully', 5000)
          setModalVisible2(false)}
          );
        }
      }

      function deleteAccount(){
        setDelete("Waiting");
        Alert.alert(
          "Warning",
          "Are you sure you want to delete your account? This action can't be undone!",
          [
            {
              text: "Cancel",
              onPress: () => setDelete("Delete"),
              style: "cancel"
            },
            { text: "OK", onPress: () => 
            accountDeleted()
          }
          ]
        );
      }

      function accountDeleted(){
        setDelete("Approved")
        setIcon1("checkbox-marked-circle-outline")  

          database().ref(ref+'/Info').remove().then(() => {
          ToastAndroid.show('Account deleted successfully!', 2000);  
          auth().signOut();    
          setTimeout(() =>{
            navigation.replace('SecondPage');
        }, 3000)

        }) 
      }

      
      function logOut(){
        setLog("Waiting");
        Alert.alert(
          "Warning",
          "Are you sure you want to Log out of your account?",
          [
            {
              text: "Cancel",
              onPress: () => {setLog("Logout")}
            },
            { text: "OK", onPress: () => 
            LoggedOut()
          }
          ]
        );
      }

      function LoggedOut(){ 
        setLog("Approved")
        setIcon2("checkbox-marked-circle-outline")                 
        auth()
        .signOut()
        .then(() => {
        ToastAndroid.show('Logging out...', 3500);
        setTimeout(() =>{
            navigation.replace('SecondPage');
        }, 3000)
                    }
        );
        
      }
    
      const phoneInput = React.useRef(null);
     const [isModalVisible, setModalVisible] = useState(false);
     const [isModalVisible2, setModalVisible2] = useState(false);
     const [isModalVisible3, setModalVisible3] = useState(false);
     const [DBPass, setDB] = useState(false);
      const [name, setName] = useState('')
      const [code, setCode] = useState('')
      const [passwordicon, setpasswordicon] = useState('lock-reset')
      const [resetname, setresetname] = useState('Edit password')
      const [email, setEmail] = useState('')
      const [number, setNumber] = useState('')
      const [newname, setNewname] = useState('')
      const [newnumber, setNewNumber] = useState('')
      const [notification, setNotification] = useState('')
      const [message, setMessage] = useState('')
      const [time, setTime] = useState('')
      const [password, setPassword] = useState('')
      const [pic, setPic] = useState(require('../../../../img/profile.png'))


      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
      };
      const toggleModal3 = () => {
        setModalVisible3(!isModalVisible3);
      };
      const togglePassword = () => {
        setDB(!DBPass);
      };

      function changePic(){
        const options = {quality: 0.7, mediaType:'photo', includeBase64: true, noData: true,
        storageOptions:{
          skipBackup: true, waitUntilSaved: true, path:'images', cameraRoll: true
        }
      }
        launchImageLibrary(options, response =>{
          if(response.errorMessage){
            console.log(errorMessage)
          }else if(!response.didCancel){
          let source = { uri: response.assets[0].uri };
          setPic(source);
          }
        })
      }

      function uploadPic(urival){ 
        let file = uriToBlob(urival);
        storage()
        .ref(ref + '/profilepicture')
        .putFile(file)
        .then(snapshot => snapshot.getDownload)
        .then(uri => updateImage(uri))
        .catch(error => {
          setPic('../../../../img/profile.png');
          Alert.alert(error + 'Error on uplaod image.')
        })
      }

      function uriToBlob(uri){
        return new Promise((resolve, reject) =>{
          const xhr = new XMLHttpRequest();
          xhr.onload = function(){
            resolve(xhr.response);
          };
          xhr.onerror = function(){
            reject(new Error('Error uploading image'))
          };
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          xhr.send(null);
        })
      }

      function updateImage(uri){
        setPic(uri);
      }

      async function editPassword(){

        setresetname("Waiting...")

         await auth().sendPasswordResetEmail(auth().currentUser.email).then(()=>{ToastAndroid.show("Password reset has been sent to your email.", 2000);  setpasswordicon("lock-reset"); setresetname("Edit Password"); togglePassword();}).catch((error)=>{ToastAndroid.show(error.message, 2000); setpasswordicon("lock-reset"); setresetname("Edit Password");});
      }

  
      function checkPassword() {
          database()
          .ref(ref+'/Info')
          .update({
            userPassword: password,
          }).then(() => {          
            ToastAndroid.show("Your password has been changed!", 2000);
          setDB(false)}
      ).catch(error => {
        ToastAndroid.show(error.message, 2000);
      });
      }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
              <TouchableOpacity onPress={()=> changePic()}>
                <Image source={pic} style={{width: 90, height: 90, resizeMode: 'cover', marginLeft: 20, borderRadius: 50}}/>
                </TouchableOpacity>
                <Text style={styles.pic}>Pick Image</Text>
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.uid}>{email}</Text>
                    <Text style={styles.uid}>Tel: {number}</Text>
                </View>                
            </View>
            <Divider style={{width: 500, bottom: 25}}/>
            <View style={styles.button}>
                <Button mode="outlined" style={styles.btnContent} icon="rename-box" contentStyle={{paddingRight: 130, paddingLeft: 0}} color="black" onPress={toggleModal}>
                    Edit Name
                </Button>
                <Button mode="outlined" style={styles.btnContent} icon="counter" contentStyle={{paddingRight: 130, paddingLeft: 0}} color="black" onPress={toggleModal2}>
                    Edit Number
                </Button>
                <Button mode="outlined" style={styles.btnContent} icon="update" contentStyle={{paddingRight: 80, paddingLeft: 0}} color="black" onPress={toggleModal3}>
                    Feedback Update
                </Button>
                <Button mode="outlined" style={styles.phone} icon={passwordicon} contentStyle={{paddingRight: 80, paddingLeft: 0}} color="black" onPress={()=> editPassword()}>
                   {resetname}
                </Button>
                <Badge visible={feedback} style={{position: "absolute", right: 20, bottom: 50}}>1</Badge>
                    <Button icon={icon2} uppercase={false} mode="contained" color={Colors.blueGrey800} style={styles.btn} onPress={() => logOut()}>{logout}</Button>

                    <Button icon={icon1} color={Colors.blue900} uppercase={false} mode="contained" style={styles.btn2} onPress={() => deleteAccount()}>{del}</Button>
             </View>

                <Dialog.Container visible={isModalVisible}>
                  <Dialog.Title>Change Account Name</Dialog.Title>
                  <Dialog.Description>
                    Enter your new account name below and hit update.
                  </Dialog.Description>
                  <Dialog.Input placeholder="New name here" value={newname} onChangeText={text => setNewname(text)}></Dialog.Input>
                  <Dialog.Button label="Cancel" onPress={toggleModal}/>
                  <Dialog.Button label="Update" onPress={()=> changeName(newname)}/>
                  
                 <StatusBar hidden={true} />
                  </Dialog.Container>
                  
                  <Dialog.Container visible={DBPass}>
                  <Dialog.Title>Verify new password</Dialog.Title>
                  <Dialog.Description>
                    Confirm your new password below. Please do not enter the wrong password!
                  </Dialog.Description>
                  <Dialog.Input placeholder="Password reset" value={password} onChangeText={text => setPassword(text)}></Dialog.Input>
                  <Dialog.Button label="Cancel" onPress={togglePassword}/>
                  <Dialog.Button label="Update" onPress={()=>{ 
                    if(password === ""){
                      ToastAndroid.show('Fill in the required information please.')
                    }else{
                    checkPassword()
                    }                    
                    }}/>
                  
                 <StatusBar hidden={true} />
                  </Dialog.Container>


                  <Dialog.Container visible={isModalVisible2}>
                  <Dialog.Title>Change Account Number</Dialog.Title>
                  <Dialog.Description>
                    Enter your new account number with the right format and hit update.
                  </Dialog.Description>
               {/*    <Dialog.Input value={newnumber} onChangeText={text => setNewNumber(text)}></Dialog.Input> */}
                  <PhoneInput
                            ref={phoneInput}
                            defaultValue={newnumber}
                            defaultCode="CM"                            
                            placeholder="Enter number"
                            layout="first"
                            containerStyle={styles.phoneContainer}
                            textContainerStyle={styles.textInput}
                            onChangeFormattedText={text => {
                            setNewNumber(text);
                            }}
                        />

                  <Dialog.Button label="Cancel" onPress={toggleModal2}/>
                  <Dialog.Button label="Update" onPress={()=>{ 
                    if(!phoneInput.current.isValidNumber(newnumber)){
                      ToastAndroid.show('Number is invalid in selected country', 4000);
                  }else{
                    changeNumber(newnumber)
                  }
                    
                    }}/>
                  
                 <StatusBar hidden={true} />
                  </Dialog.Container>

                <Modal 
                    animationOut={'slideOutUp'}
                    isVisible={isModalVisible3}>
                <View style={styles.modalView2}>
                <Text style={styles.txtbtnText2}>Feedback Response</Text>
                <View style={styles.feed}>
                <Text style={styles.txtdesc2}><Text style={styles.bold}>You: {"\n"}</Text> {message} {"\n"}{"\n"}</Text>                
                <Text style={styles.txtdesc2}><Text style={styles.bold}>Admin: {"\n"}</Text> {notification} {"\n"}{"\n"}<Text style={styles.bold}>{time}</Text></Text>                
                </View>
                <TouchableOpacity style={styles.hide2} onPress={toggleModal3}><Text style={styles.txt}>Hide</Text></TouchableOpacity>
                </View>
                <StatusBar/>
                </Modal>
                <Text style={styles.copyright}>{'\u00A9'} 2021 LaLL</Text>
         </View>
    )
}

export default profile;
