import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Alert, Dimensions} from 'react-native';
import Carousel from 'simple-carousel-react-native';
import RadioButtonRN from 'radio-buttons-react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import database, {firebase}from '@react-native-firebase/database';

const data = [
    {
      label: 'M yí nyám.'
     },
     {
      label: 'M jíe ré.'
     },
     {
        label: 'M yí réʼ.'
     },
     {
        label: 'M jíe nyám.'
       }
    ];
    
const data2 = [
        {
          label: 'Lukoŋ kì yùn ka fó way?'
         },
         {
          label: 'Lukoŋ wun yùn ka fó way?'
         },
         {
            label: 'Lukon yì yùn ka fó way?'
         },
         {
            label: 'None of the above'
           }
    ];

const data3 = [
            {
              label: 'A dù!'
             },
             {
              label: 'dù!'
             },
             {
                label: 'Lá à yóʼ dù!'
             },
             {
                label: 'All of the above'
               }
    ];

const data4 = [
                {
                  label: 'shisi, jiwí, bvə́y'
                 },
                 {
                  label: 'bvə́y, shisi, jwí'
                 },
                 {
                    label: 'jwí, shisi, bvə́y'
                 },
                 {
                    label: 'shisi, jwí, bvə́y'
                   }
    ];

const data5 = [
                    {
                      label: 'add items into a statement'
                     },
                     {
                      label: 'introduce items in a specific order'
                     },
                     {
                        label: 'introduce a list of similar items'
                     },
                     {
                        label: 'None of the above'
                       }
     ];
    
function PunctuationEx() {                                          
        database()
        .ref('/Exercises/Lamnso')
        .child('p1')
        .once('value', snapshot => {
            setAns(snapshot.val())
            });

        database()
        .ref('/Exercises/Lamnso')
        .child('score')
        .once('value', snapshot => {
        setScoreValue(snapshot.val())
            });

        database()
        .ref('/Exercises/Lamnso')
        .child('p2')
        .once('value', snapshot => {
        setAns2(snapshot.val())
            });

        database()
        .ref('/Exercises/Lamnso')
        .child('p3')
        .once('value', snapshot => {
        setAns3(snapshot.val())
        });

        database()
        .ref('/Exercises/Lamnso')
        .child('p4')
        .once('value', snapshot => {
            setAns4(snapshot.val())
        });

        database()
        .ref('/Exercises/Lamnso')
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Punctuation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>"I am eating yams" translates to?</Text>
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Punctuation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>"What did Lukong buy at the market" translates to?</Text>
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Punctuation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>"Go" translates to?</Text>
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Punctuation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>Cat, dog and goat respectively translates to?</Text>
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
                            <Text style={styles.bold}>Note: </Text>Refer to the Punctuation section and answer the questions posed.</Text>
                                <View style={styles.content}>
                                            <Text style={styles.question}>What is the use of the colon in a sentence?</Text>
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
