import React, {useState} from 'react';
import {ScrollView, Text, View, StatusBar, ToastAndroid, LogBox, BackHandler, Alert} from 'react-native';
import styles from './choiceStyle';
import { Dropdown } from 'react-native-element-dropdown';
import database, {firebase}from '@react-native-firebase/database';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function choice({navigation}) {

    const [awing, setAwing] = useState("Language loading");
    const [baka, setBaka] = useState("Language loading");
    const [banjun, setBanjun] = useState("Language loading");
    const [bulu, setBuluDb] = useState("Language loading");
    const [doyayo, setDoyayo] = useState("Language loading");
    const [duala, setDuala] = useState("Language loading");
    const [ewondo, setEwondo] = useState("Language loading");
    const [gbaya, setGbaya] = useState("Language loading");
    const [korop, setKorop] = useState("Language loading");
    const [lamnso, setLamnso] = useState("Language loading");


    var ref='Languages'; 
    
   
    React.useEffect(() => {

        database().ref(ref+'/Awing').child('Course name').once('value', snapshot => {
           if(awing === ""){
               setAwing("Language 'Awing' not available");
           }else{
           setAwing(snapshot.val());
           }
       });
   
       database().ref(ref+'/Baka').child('Course name').once('value', snapshot => {
           if(baka === ""){
               setBaka("Language 'Baka' not available");
           }else{
           setBaka(snapshot.val());
           }
       });
   
       database().ref(ref+'/Banjun').child('Course name').once('value', snapshot => {
           if(banjun === ""){
               setBanjun("Language 'Banjun' not available");
           }else{
           setBanjun(snapshot.val());
           }
       });
   
       database().ref(ref+'/Bulu').child('Course name').once('value', snapshot => {
           if(bulu === ""){
               setBuluDb("Language 'Bulu' not available");
           }else{
           setBuluDb(snapshot.val());
           }
       });
   
       database().ref(ref+'/Doyayo').child('Course name').once('value', snapshot => {
           if(doyayo === ""){
               setDoyayo("Language 'Doyayo' not available");
           }else{
           setDoyayo(snapshot.val());
           }
       });
   
       database().ref(ref+'/Duala').child('Course name').once('value', snapshot => {
           if(duala === ""){
               setDuala("Language 'Duala' not available");
           }else{
           setDuala(snapshot.val());
           }
       });
   
       database().ref(ref+'/Ewondo').child('Course name').once('value', snapshot => {
           if(ewondo === ""){
               setEwondo("Language 'Awing' not available");
           }else{
           setEwondo(snapshot.val());
           }
       });
   
       database().ref(ref+'/Gbaya').child('Course name').once('value', snapshot => {
           if(gbaya === ""){
               setGbaya("Language 'Awing' not available");
           }else{
           setGbaya(snapshot.val());
           }
       });
   
       database().ref(ref+'/Korop').child('Course name').once('value', snapshot => {
           if(korop === ""){
               setKorop("Language 'Awing' not available");
           }else{
           setKorop(snapshot.val());
           }
       });
   
       database().ref(ref+'/Lamnso').child('Course name').once('value', snapshot => {
           if(lamnso === ""){
               setLamnso("Language 'Awing' not available");
           }else{
           setLamnso(snapshot.val());
           }
       });

       const onChildAdd = database()
          .ref('/Languages')
          .on('child_added', snapshot => {
            ToastAndroid.show('A new Language has been added '+ snapshot.key?.toString().trim() + ' in pending state', 3000);
          });
          
        return () => database().ref('/Languages').off('child_added', onChildAdd);



    }, []);

    React.useEffect(() => {
        const onChildDelete = database()
        .ref('/Languages')
        .on('child_removed', snapshot => {
          ToastAndroid.show('A Language has been deleted: '+ snapshot.key?.toString().trim(), 3000);
        });
        
      return () => database().ref('/Languages').off('child_added', onChildDelete);
      }, []);
    

    const[choiceLang, setChoice] = useState("");
    const[buluN, setBulu] = useState("Center Region");
    const[nw, setNw] = useState("North West Region");
    const[nt, setNt] = useState("North Region");
    const[sw, setSw] = useState("South West Region");
    const[lt, setLt] = useState("Littoral Region");
    const[et, setEt] = useState("East Region");
    const[en, setEn] = useState("Extreme North");
    const[st, setSt] = useState("South Region");

  var id= firebase.auth().currentUser;
  if(id != null){ 
  LogBox.ignoreAllLogs(true);
  }

  const icon = "map-marker-check-outline";


      let center =[{
          value: bulu, label: bulu,
      }, {
          value: ewondo,  label: ewondo,
      }];

      let north =[{
          value: doyayo,  label: doyayo,
      }];

      let NW = [{
          value: lamnso, label: lamnso,
      }, {
          value: awing, label: awing,
      }];

      let SW = [{
          value: korop, label: korop,
      }];

      let littoral = [{
          value: duala, label: duala,
      }];

      let east = [{
          value: banjun, label: banjun,
      }];

      let exNorth = [{
          value: gbaya, label: gbaya,
      }]
      let south = [{
        value: baka, label: baka,
    }]

    function toLanguage(value){
        if(value === ""){
            ToastAndroid.show('Please make a language choice', 3000)
        }else{
            
        if(value === 'Lamnso course'){ 

            setTimeout(() =>{
            navigation.replace('Userhome')
                }, 5000);
                navigation.navigate('splashLamnso') 

        } else if(value === 'Awing course'){

          setTimeout(() =>{
              navigation.replace('OkuTab')
                 }, 5000);
           navigation.navigate('splashAwing') 

        } else if(value === 'Ewondo course'){

          setTimeout(() =>{
              navigation.replace('Ewondo')
                 }, 5000);
           navigation.navigate('splashEwondo') 

        }else if(value === 'Bulu course'){
          setTimeout(() =>{
              navigation.replace('Bulu')
                 }, 5000);
           navigation.navigate('splashBulu') 
        }else if(value === 'Korop course'){

          setTimeout(() =>{
              navigation.replace('Korop')
                 }, 5000);
           navigation.navigate('splashKorop') 

        }else if(value === 'Duala course'){

          setTimeout(() =>{
              navigation.replace('Duala')
                 }, 5000);
           navigation.navigate('splashDuala') 

        }else if(value === 'Doyayo course'){

          setTimeout(() =>{
              navigation.replace('Doyayo')
                 }, 5000);
           navigation.navigate('splashDoyayo') 

        }else if(value === 'Banjun course'){

          setTimeout(() =>{
              navigation.replace('Banjun')
                 }, 5000);
           navigation.navigate('splashBanjun') 

        }else if(value === 'Baka course'){

          setTimeout(() =>{
              navigation.replace('Baka')
                 }, 5000);
           navigation.navigate('splashBaka') 

        }else if(value === 'Gbaya course'){

          setTimeout(() =>{
              navigation.replace('Gbaya')
                 }, 5000);
           navigation.navigate('splashGbaya') 

        } else{
            ToastAndroid.show('Invalid language choice', 3000)
        }
    }
    }

      function languageChoice(value){ 
          if(value == "Bulu course"){
              setBulu("Bulu course")
          }else {
              setBulu("Ewondo course")
          }
          setChoice(value);
      }

      function NorthWest(value) {
        if(value == "Lamnso course"){
            setNw("Lamnso course")
        }else {
            setNw("Awing course")
        }
        setChoice(value);
      }

      function Southwest(value) {
          setChoice("Korop course");
          setSw("Korop course");
      }

      function Littoral(value) {
          setChoice("Duala course");
          setLt("Duala course");
      }

      function East(value) {
        setChoice("Banjun course");
        setEt("Banjun course");
    }

    function ExtremeNorth(value) {
        setChoice("Gbaya course");
        setEn("Gbaya course");
    }

    function South(value) {
        setChoice("Baka course");
        setSt("Baka course");
    }
    function North(value) {
        setChoice("Doyayo course");
        setNt("Doyayo course");
    }

  
    return (
        <ScrollView style={{backgroundColor: "white"}}>
            <View style={styles.container}>
            <Text style={styles.title}>Choose a language to learn</Text> 
            <View style={styles.drop}>
                        <Dropdown
                        selectedItemColor={'red'}
                    label='Center Region'
                    data={center}                    
                    onChange={e => {languageChoice(e.label)}}
                    placeholder={buluN}
                    labelField="label"
                    valueField="value"
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    maxHeight={120}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                 <Dropdown
                        selectedItemColor={'red'}
                        onChange={(e) => NorthWest(e.label)}
                    label='North West Region'
                    data={NW}
                    placeholder={nw}
                    labelField="label"
                    valueField="value"
                    maxHeight={120}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                 <Dropdown
                        data={SW}
                        selectedItemColor={'red'}
                        onChange={(e) => Southwest(e.label)}
                    label='South West Region'
                    placeholder={sw}
                    labelField="label"
                    valueField="value"
                    maxHeight={60}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                 <Dropdown
                        selectedItemColor={'red'}
                        onChange={(e) => Littoral(e.label)}
                    label='Littoral Region'
                    data={littoral}
                    placeholder={lt}
                    labelField="label"
                    valueField="value"
                    maxHeight={60}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                <Dropdown
                        selectedItemColor={'red'}
                        onChange={(e) => East(e.label)}
                    label='East region'
                    data={east}
                    placeholder={et}
                    labelField="label"
                    valueField="value"
                    maxHeight={60}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                <Dropdown
                        selectedItemColor={'red'}
                        onChange={(e) => North(e.label)}
                    label='North region'
                    data={north}
                    placeholder={nt}
                    labelField="label"
                    valueField="value"
                    maxHeight={60}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                <Dropdown
                        selectedItemColor={'red'}
                        onChange={(e) => ExtremeNorth(e.label)}
                    label='East region'
                    data={exNorth}
                    placeholder={en}
                    labelField="label"
                    valueField="value"
                    maxHeight={60}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                />
                <View style={styles.shift}></View>
                <Dropdown
                        selectedItemColor={'red'}
                        onChange={(e) => South(e.label)}
                    label='South region' 
                    placeholder={st}
                    labelField="label"
                    valueField="value"
                    maxHeight={60}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name={icon} color={'black'} size={25} style={{marginRight: 30}}/>
                    )}
                    fontFamily="Poppins-Light"
                    data={south}
                />
                </View>
                
                     </View>
                     <Button mode="outlined" color="#000" style={{width: 200, bottom: 20, left: 80}} onPress={()=> toLanguage(choiceLang)}>GO</Button>
                     <StatusBar
                    barStyle = "dark-content"
                    hidden = {false}
                    backgroundColor = "#fff"
                    translucent = {false}
                    networkActivityIndicatorVisible = {true}
                />
                     
            </ScrollView>
    );
}

export default choice;
