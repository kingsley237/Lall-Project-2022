import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Alert, Dimensions} from 'react-native';
import Carousel from 'simple-carousel-react-native';
import RadioButtonRN from 'radio-buttons-react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import database, {firebase}from '@react-native-firebase/database';

const data = [
    {
      label: 'mi tɛ́ nɛ in mɛɛ'
     },
     {
      label: 'mi zia'
     },
     {
        label: 'mɛ nɛ́ o'
     },
     {
        label: 'None of the above'
       }
    ];
const data2 = [
        {
          label: 'wa zɔ́k yɛ ná'
         },
         {
          label: 'mi tɛ́ nɛ in mɛɛ'
         },
         {
            label: 'mɛ nɛ́ o'
         },
         {
            label: 'None of the above'
           }
    ];
const data3 = [
            {
              label: 'wa'
             },
             {
              label: 'a'
             },
             {
                label: 'mí'
             },
             {
                label: 'ɛ́ɛ́'
               }
    ];
const data4 = [
                {
                  label: 'They ate'
                 },
                 {
                  label: 'I am leaving'
                 },
                 {
                    label: 'Who is it'
                 },
                 {
                    label: 'I heard'
                   }
    ];
    
function NounsExercise() {     
     
    
    const[w1, setw1] = React.useState("");
    const[w2, setw2] = React.useState("");
    const[w3, setw3] = React.useState("");
    const[w4, setw4] = React.useState("");
    const[w5, setw5] = React.useState("");

    var ref='/Languages/Gbaya'; 
    var db =  database().ref(ref+'/NounsExercise');

    
db.child('w1').on('value', snapshot => {
    setw1(snapshot.val());
  });
  
  db.child('w2').on('value', snapshot => {
    setw2(snapshot.val());
  });
  
  db.child('w3').on('value', snapshot => {
    setw3(snapshot.val());
  });
  
  db.child('w4').on('value', snapshot => {
    setw4(snapshot.val());
  });
  
  db.child('w5').on('value', snapshot => {
    setw5(snapshot.val());
  });      
  
  
  React.useEffect(() => {
    const onChildAdd = database()
    .ref(ref+'/NounsExercise')
    .on('child_added', snapshot => {
      ToastAndroid.show('A new Exercise has been added '+ snapshot.key?.toString().trim() + ' in pending state', 3000);
    });
    
  return () => database().ref(ref+'/NounsExercise').off('child_added', onChildAdd);
  }, [])
  
  React.useEffect(() => {
    const onChildDelete = database()
    .ref(ref+'/NounsExercise')
    .on('child_removed', snapshot => {
      ToastAndroid.show('A lesson has been removed: '+ snapshot.key?.toString().trim(), 3000);
    });
    
  return () => database().ref(ref+'/NounsExercise').off('child_added', onChildDelete);
  }, []); 
  if(w1 === "" || w2 === "" || w3 === "" || w4 === "" || w5 === ""){
    setw1("Content not available");
    setw2("Content not available");
    setw3("Content not available");
    setw4("Content not available");
    setw5("Content not available");
  }                                       
        database()
        .ref('/Exercises/Gbaya')
        .child('n1')
        .once('value', snapshot => {
            setAns(snapshot.val())
            });

        database()
        .ref('/Exercises/Gbaya')
        .child('score')
        .once('value', snapshot => {
        setScoreValue(snapshot.val())
            });
            database()
            .ref('/Exercises/Gbaya')
            .child('score2')
            .once('value', snapshot => {
            setScoreValue2(snapshot.val())
                });

        database()
        .ref('/Exercises/Gbaya')
        .child('n2')
        .once('value', snapshot => {
        setAns2(snapshot.val())
            });

        database()
        .ref('/Exercises/Gbaya')
        .child('n3')
        .once('value', snapshot => {
        setAns3(snapshot.val())
        });

        database()
        .ref('/Exercises/Gbaya')
        .child('n4')
        .once('value', snapshot => {
            setAns4(snapshot.val())
        });



    function checkAnswer(value1) {
        if(value1 != ans){
            ToastAndroid.show('Wrong answer. Try again.', 4000);
        }else{
            ToastAndroid.show('Correct answer', 4000);
            setScore(scoreValue + score);
            createTwoButtonAlert();

        }
    }
    function checkAnswer2(value2) {
        if(value2 != ans2){
            ToastAndroid.show('Wrong answer. Try again.', 4000);
        }else{
            ToastAndroid.show('Correct answer', 4000);
            setScore(scoreValue + score);
            createTwoButtonAlert();

        }
    }
    function checkAnswer3(value3) {
        if(value3 != ans3){
            ToastAndroid.show('Wrong answer. Try again.', 4000);
        }else{
            ToastAndroid.show('Correct answer', 4000);
            setScore(scoreValue + score);
            createTwoButtonAlert();

        }
    }
    function checkAnswer4(value4) {
        if(value4 != ans4){
            ToastAndroid.show('Wrong answer. Try again.', 4000);
        }else{
            ToastAndroid.show('Correct answer', 4000);
            setScore(scoreValue + score2);
            createTwoButtonAlert();
        }
    }

    function createTwoButtonAlert(){
        if(scoreValue === 80){
        Alert.alert(
          "Congratulations",
          "You've reached the score limit.",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK" }
          ]
        );
        
        setScore(0);
    }
    }
    

    const[value, setValue] = useState(data);
    const[ans, setAns] = useState('');
    const[ans2, setAns2] = useState('');
    const[ans3, setAns3] = useState('');
    const[ans4, setAns4] = useState('');
    const[score, setScoreValue] = useState(0);
    const[score2, setScoreValue2] = useState(0);
    const[scoreValue, setScore] = useState(0);

    function onPressRadioButton(radioButtonsArray) {
        setValue(radioButtonsArray.label);
    }
    return (
        <Carousel
            height={715}
            width={Dimensions.get('window').width}
            showBubbles={true}
            color="#5ff232">
                
                <View style={styles.container}>
                        <Text style={styles.head}>EXERCISES</Text>
                        <Text style={styles.intro}>
                            <Text style={styles.bold}>Note: </Text>Refer to the Nouns section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>{w1}</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'#5ff232'}
                                                        boxActiveBgColor={'rgb(200,255,200)'}
                                                            data={data}
                                                            selectedBtn={(e) => onPressRadioButton(e)}
                                                            icon={
                                                                <Icon
                                                                name="check-circle"
                                                                size={25}
                                                                color="black"
                                                                />
                                                                    }
                                                            animationTypes={['pulse']}
                                                            textColor={'black'}
                                                        />
                                                        </View>
                                                        <View style={styles.scoreSection}>
                                                            <TouchableOpacity style={styles.submit} onPress={()=> checkAnswer(value)}><Text style={styles.btntext}>Submit</Text></TouchableOpacity>
                                                            <Text style={styles.score}>Score: {scoreValue}/100</Text>
                                                        </View>

                                </View>
                </View>

                <View style={styles.container}>
                        <Text style={styles.intro}>
                            <Text style={styles.bold}>Note: </Text>Refer to the Nouns section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>{w2}</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'#5ff232'}
                                                        boxActiveBgColor={'rgb(200,255,200)'}
                                                            data={data2}
                                                            selectedBtn={(e) => onPressRadioButton(e)}
                                                            icon={
                                                                <Icon
                                                                name="check-circle"
                                                                size={25}
                                                                color="black"
                                                                />
                                                                    }
                                                            animationTypes={['pulse']}
                                                            textColor={'black'}
                                                        />
                                                        </View>
                                                        <View style={styles.scoreSection}>
                                                            <TouchableOpacity style={styles.submit} onPress={()=> checkAnswer2(value)}><Text style={styles.btntext}>Submit</Text></TouchableOpacity>
                                                            <Text style={styles.score}>Score: {scoreValue}/100</Text>
                                                        </View>

                                </View>
                </View>

                <View style={styles.container}>
                        <Text style={styles.intro}>
                            <Text style={styles.bold}>Note: </Text>Refer to the Nouns section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>{w3}</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'#5ff232'}
                                                        boxActiveBgColor={'rgb(200,255,200)'}
                                                            data={data3}
                                                            selectedBtn={(e) => onPressRadioButton(e)}
                                                            icon={
                                                                <Icon
                                                                name="check-circle"
                                                                size={25}
                                                                color="black"
                                                                />
                                                                    }
                                                            animationTypes={['pulse']}
                                                            textColor={'black'}
                                                        />
                                                        </View>
                                                        <View style={styles.scoreSection}>
                                                            <TouchableOpacity style={styles.submit} onPress={()=> checkAnswer3(value)}><Text style={styles.btntext}>Submit</Text></TouchableOpacity>
                                                            <Text style={styles.score}>Score: {scoreValue}/100</Text>
                                                        </View>

                                </View>
                </View>

                <View style={styles.container}>
                        <Text style={styles.intro}>
                            <Text style={styles.bold}>Note: </Text>Refer to the Nouns section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>{w4}</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'#5ff232'}
                                                        boxActiveBgColor={'rgb(200,255,200)'}
                                                            data={data4}
                                                            selectedBtn={(e) => onPressRadioButton(e)}
                                                            icon={
                                                                <Icon
                                                                name="check-circle"
                                                                size={25}
                                                                color="black"
                                                                />
                                                                    }
                                                            animationTypes={['pulse']}
                                                            textColor={'black'}
                                                        />
                                                        </View>
                                                        <View style={styles.scoreSection}>
                                                            <TouchableOpacity style={styles.submit} onPress={()=> checkAnswer4(value)}><Text style={styles.btntext}>Submit</Text></TouchableOpacity>
                                                            <Text style={styles.score}>Score: {scoreValue}/100</Text>
                                                        </View>

                                </View>
                </View>

        </Carousel>
    )
}

const styles = StyleSheet.create({
    content:{
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        top: 20
    },
    radio:{
        width: 300,
        top: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      head:{
        width: 300,
      position: 'absolute',
      top: 50,
      fontFamily: 'Poppins-Medium',
      color: 'black',
      fontSize: 45,
      left: 20,
      },
      intro:{
        color: 'white',
        backgroundColor: 'black',
        padding: 20,
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        bottom: 20
      },
      bold:{
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        color: '#5ff232'
      },
      question:{
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
          borderBottomColor: 'black', 
          borderBottomWidth: 1,
          textAlign: 'center'
      },
      submit:{
          borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
          top: 80,
          backgroundColor: 'black',
          padding: 10,
          left: 10,
          width: 100
      },
      btntext:{
          color: 'white',
          fontFamily: 'Poppins-Medium',
      },
      scoreSection:{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'space-between'
      },
      score:{
        top: 109,
        fontFamily: 'Poppins-Light',
        fontSize: 12
      }
})

export default NounsExercise;
