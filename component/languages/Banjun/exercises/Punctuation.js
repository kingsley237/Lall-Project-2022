import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Alert, Dimensions} from 'react-native';
import Carousel from 'simple-carousel-react-native';
import RadioButtonRN from 'radio-buttons-react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import database, {firebase}from '@react-native-firebase/database';

const data = [
    {
      label: 'OK, I do not know'
     },
     {
      label: 'Yes, but I do not know'
     },
     {
        label: 'No, I do not know'
     },
     {
        label: 'Alright, she does not know'
       }
    ];
    
const data2 = [
        {
          label: 'True'
         },
         {
          label: 'False'
         },
         {
            label: 'No such negation in Bulu'
         }
    ];

const data3 = [
            {
              label: 'Nya nde'
             },
             {
              label: 'Se nale'
             },
             {
                label: 'Momo ye'
             },
             {
                label: 'None of the above'
               }
    ];

const data4 = [
                {
                  label: 'He is not here'
                 },
                 {
                  label: 'It is not there'
                 },
                 {
                    label: 'They are not here'
                 },
                 {
                    label: 'She is not there'
                   }
    ];

const data5 = [
                    {
                      label: 'Momo'
                     },
                     {
                      label: 'Nji'
                     },
                     {
                        label: 'Sa'
                     },
                     {
                        label: 'Se'
                       }
     ];
    
function PunctuationEx() {                                          
        database()
        .ref('/Exercises/Bulu')
        .child('p1')
        .once('value', snapshot => {
            setAns(snapshot.val())
            });

        database()
        .ref('/Exercises/Bulu')
        .child('score')
        .once('value', snapshot => {
        setScoreValue(snapshot.val())
            });

        database()
        .ref('/Exercises/Bulu')
        .child('p2')
        .once('value', snapshot => {
        setAns2(snapshot.val())
            });

        database()
        .ref('/Exercises/Bulu')
        .child('p3')
        .once('value', snapshot => {
        setAns3(snapshot.val())
        });

        database()
        .ref('/Exercises/Bulu')
        .child('p4')
        .once('value', snapshot => {
            setAns4(snapshot.val())
        });

        database()
        .ref('/Exercises/Bulu')
        .child('p5')
        .once('value', snapshot => {
            setAns5(snapshot.val())
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
            tip();

        }
    }
    function checkAnswer4(value4) {
        if(value4 != ans4){
            ToastAndroid.show('Wrong answer. Try again.', 4000);
        }else{
            ToastAndroid.show('Correct answer', 4000);
            setScore(scoreValue + score);
            createTwoButtonAlert();
        }
    }
    function checkAnswer5(value5) {
        if(value5 != ans5){
            ToastAndroid.show('Wrong answer. Try again.', 4000);
        }else{
            ToastAndroid.show('Correct answer', 1000);
            setScore(scoreValue + score);
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

    function tip(){
        Alert.alert(
          "Tip",
          "It translates to \"Sa nalé\"",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK" }
          ]
        );
    }    

    const[value, setValue] = useState(data);
    const[ans, setAns] = useState('');
    const[ans2, setAns2] = useState('');
    const[ans3, setAns3] = useState('');
    const[ans4, setAns4] = useState('');
    const[ans5, setAns5] = useState('');
    const[score, setScoreValue] = useState(0);
    const[scoreValue, setScore] = useState(0);

    function onPressRadioButton(radioButtonsArray) {
        setValue(radioButtonsArray.label);
    }
    return (
        <Carousel
            height={715}
            width={Dimensions.get('window').width}
            showBubbles={true}>
                
                <View style={styles.container}>
                        <Text style={styles.head}>EXERCISES</Text>
                        <Text style={styles.intro}>
                            <Text style={styles.bold}>Note: </Text>Refer to the Negation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>"Momo, me nji yem" translates to?</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'cyan'}
                                                        boxActiveBgColor={'rgb(187,255,255)'}
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Negation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>Is Se used in the present tense only?</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'cyan'}
                                                        boxActiveBgColor={'rgb(187,255,255)'}
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Negation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>"Not so" translates to?</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'cyan'}
                                                        boxActiveBgColor={'rgb(187,255,255)'}
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Negation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>"A se va" translates to?</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'cyan'}
                                                        boxActiveBgColor={'rgb(187,255,255)'}
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

                <View style={styles.container}>
                        <Text style={styles.intro}>
                            <Text style={styles.bold}>Note: </Text>Refer to the Negation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>Which of the following negation words can be used as an adjective?</Text>
                                                    <View style={styles.radio}>
                                                        <RadioButtonRN
                                                        duration={300}
                                                        activeColor={'cyan'}
                                                        boxActiveBgColor={'rgb(187,255,255)'}
                                                            data={data5}
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
                                                            <TouchableOpacity style={styles.submit} onPress={()=> checkAnswer5(value)}><Text style={styles.btntext}>Submit</Text></TouchableOpacity>
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
        color: 'cyan'
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

export default PunctuationEx;
