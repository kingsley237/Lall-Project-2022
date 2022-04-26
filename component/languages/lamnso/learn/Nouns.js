import React from 'react';
import {Text, View, StyleSheet, Dimensions, ToastAndroid} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
import database, {firebase}from '@react-native-firebase/database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Nouns() {    

  const[intro, setIntro] = React.useState("");
  const[w1, setw1] = React.useState("");
  const[w2, setw2] = React.useState("");
  const[w3, setw3] = React.useState("");
  const[w4, setw4] = React.useState("");
  const[w5, setw5] = React.useState("");
  const[w6, setw6] = React.useState("");
  const[w7, setw7] = React.useState("");
  const[w8, setw8] = React.useState("");
  const[w9, setw9] = React.useState("");
  const[w10, setw10] = React.useState("");
  const[w11, setw11] = React.useState("");
  const[w12, setw12] = React.useState("");
  const[w13, setw13] = React.useState("");
  const[w14, setw14] = React.useState("");
  const[w15, setw15] = React.useState("");
  const[w16, setw16] = React.useState("");
  const[w17, setw17] = React.useState("");
  const[w18, setw18] = React.useState("");
  const[w19, setw19] = React.useState("");
  const[w20, setw20] = React.useState("");
  const[w21, setw21] = React.useState("");
  const[w22, setw22] = React.useState("");
  const[w23, setw23] = React.useState("");
  const[w24, setw24] = React.useState("");

  var ref='/Languages/Lamnso'; 
  var db =  database().ref(ref+'/Nouns');
  React.useEffect(() => {
    const onChildAdd = db
    .on('child_added', snapshot => {
      ToastAndroid.show('A new Lesson has been added '+ snapshot.key?.toString().trim() + ' in pending state', 3000);
    });
    
  return () => db.off('child_added', onChildAdd);
  }, [])
  
  React.useEffect(() => {
    const onChildDelete = db
    .on('child_removed', snapshot => {
      ToastAndroid.show('A lesson has been removed: '+ snapshot.key?.toString().trim(), 3000);
    });
    
  return () => db.off('child_added', onChildDelete);
  }, []);

  db.child('intro').on('value', snapshot => {
        setIntro(snapshot.val());
});

db.child('w24').on('value', snapshot => {
  setw24(snapshot.val());
});

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

db.child('w6').on('value', snapshot => {
  setw6(snapshot.val());
});

db.child('w7').on('value', snapshot => {
  setw7(snapshot.val());
});

db.child('w8').on('value', snapshot => {
  setw8(snapshot.val());
});

db.child('w9').on('value', snapshot => {
  setw9(snapshot.val());
});

db.child('w10').on('value', snapshot => {
  setw10(snapshot.val());
});

db.child('w11').on('value', snapshot => {
  setw11(snapshot.val());
});

db.child('w12').on('value', snapshot => {
  setw12(snapshot.val());
});

db.child('w13').on('value', snapshot => {
  setw13(snapshot.val());
});

db.child('w14').on('value', snapshot => {
  setw14(snapshot.val());
});

db.child('w15').on('value', snapshot => {
  setw15(snapshot.val());
});

db.child('w16').on('value', snapshot => {
  setw16(snapshot.val());
});

db.child('w17').on('value', snapshot => {
  setw17(snapshot.val());
});

db.child('w18').on('value', snapshot => {
  setw18(snapshot.val());
});

db.child('w19').on('value', snapshot => {
  setw19(snapshot.val());
});

db.child('w20').on('value', snapshot => {
  setw20(snapshot.val());
});

db.child('w21').on('value', snapshot => {
  setw21(snapshot.val());
});

db.child('w22').on('value', snapshot => {
  setw22(snapshot.val());
});

db.child('w23').on('value', snapshot => {
  setw23(snapshot.val());
});




if(intro === "" || w1 === "" || w2 === "" || w3 === "" || w4 === "" || w5 === "" || w6 === "" || w7 === ""|| w8 === "" || w9 === "" || w10 === "" || w11 === "" || w12 === "" || w13 === "" || w14 === "" || w15 === "" || w16 === "" || w17 === "" || w18 === "" || w19 === "" || w20 === "" || w21 === "" || w22 === "" || w23 === "" || w24 === ""){
  setIntro("Content not available");
  setw1("N/A");
  setw2("N/A");
  setw3("N/A");
  setw4("N/A");
  setw5("N/A");
  setw6("N/A");
  setw7("N/A");
  setw8("N/A");
  setw9("N/A");
  setw10("N/A");
  setw11("N/A");
  setw12("N/A");
  setw13("N/A");
  setw14("N/A");
  setw15("N/A");
  setw16("N/A");
  setw17("N/A");
  setw18("N/A");
  setw19("N/A");
  setw20("N/A");
  setw21("N/A");
  setw22("N/A");
  setw23("N/A");
  setw24("N/A");
}

    return (
        
  <Carousel
  height={750}
  width={Dimensions.get('window').width}
  showBubbles={false}>
       <View style={styles.container}>
        <Text style={styles.head}>NOUNS</Text>
              <Text style={styles.intro}>
             {intro}
             </Text>
              <Text style={styles.keyword}>Structure:</Text>
              <Text style={styles.keyword}>(prefix 1)     (prefix 2)     noun-stem</Text>
              <Text style={styles.keyword}>noun-class     nasal       CV(C)</Text>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-left" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
             
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Noun Structure</Text>
              <Text style={styles.intro}>
              {w1}
              </Text>
              <Text style={styles.keyword}>Example:</Text>
              <Text style={styles.keyword}>kikún    <Text style={styles.keyword2}> bed</Text></Text>
              <Text style={styles.keyword}>lav     <Text style={styles.keyword2}> house</Text></Text>
              <Text style={styles.keyword}>antèŋ     <Text style={styles.keyword2}> person with walking disability</Text></Text>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
             
        </View>

        <View style={styles.container}>
        <Text style={styles.intro}>{w2}</Text>
              <View style={styles.title}>
                <Text style={styles.top}>Class</Text>
                <Text style={styles.top}>noun prefix</Text>
                <Text style={styles.top}>Class</Text>
                <Text style={styles.top}>noun prefix</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>1</Text>
                <Text style={styles.top3}>{w3}</Text>
                <Text style={styles.top2}>2</Text>
                <Text style={styles.top3}>{w4}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>3</Text>
                <Text style={styles.top3}>{w3}</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}></Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>5</Text>
                <Text style={styles.top3}>{w3}</Text>
                <Text style={styles.top2}>6a^22</Text>
                <Text style={styles.top3}>{w5}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>7</Text>
                <Text style={styles.top3}>{w6}</Text>
                <Text style={styles.top2}>8</Text>
                <Text style={styles.top3}>{w7}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>9</Text>
                <Text style={styles.top3}>{w3}</Text>
                <Text style={styles.top2}>10</Text>
                <Text style={styles.top3}>{w8}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>19</Text>
                <Text style={styles.top3}>{w9}</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}></Text>
              </View>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
            
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Pronouns</Text>
        <Text style={styles.intro}>{w10}</Text>
        <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
              
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Personal pronouns</Text>
              <View style={{marginTop: 60}}></View>
              <View style={styles.title}>
                <Text style={styles.top}>Person | Singular</Text>
                <Text style={styles.top}>Simple</Text>
                <Text style={styles.top}>Focused</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>1st | I</Text>
                <Text style={styles.top2}>{w11}</Text>
                <Text style={styles.top2}>{w12}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>2nd | you</Text>
                <Text style={styles.top2}>{w13}</Text>
                <Text style={styles.top2}>{w14}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>3rd | he</Text>
                <Text style={styles.top2}>{w15}</Text>
                <Text style={styles.top2}>{w16}</Text>
              </View>
              <View style={{marginTop: 20}}></View>
              <View style={styles.title}>
                <Text style={styles.top}>Person | Plural</Text>
                <Text style={styles.top}>Simple / Focused</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>1st | we</Text>
                <Text style={styles.top2}>{w17}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>2nd | you</Text>
                <Text style={styles.top2}>{w18}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>3rd | they</Text>
                <Text style={styles.top2}>{w19}</Text>
              </View>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
           
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Logophoric pronoun</Text>
        <Text style={styles.intro}>{w20}</Text>
              <Text style={styles.keyword}>Example:</Text>
              <Text style={styles.keyword}>Wan wom sùúy ji wun koŋ a kibán.</Text>
              <Text style={styles.keyword2}>My child said that he (the child) likes fufu.</Text>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
              
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Compound Nouns</Text>
        <Text style={styles.intro}>Nouns can be derived from phrases or clauses as below</Text>
              <View style={styles.title}>
                <Text style={styles.top}>{w21}</Text>
                <Text style={styles.top}>{w22}</Text>
                <Text style={styles.top}>{w23}</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>kilìmbìy</Text>
                <Text style={styles.top2}>(prefix-takes-front)</Text>
                <Text style={styles.top2}>leader</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>kimbèʼbìy</Text>
                <Text style={styles.top2}>(prefix-carrier-of-cola-nuts)</Text>
                <Text style={styles.top2}>donkey</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>kiyíŋkùy</Text>
                <Text style={styles.top2}>(prefix-eats-latrine)</Text>
                <Text style={styles.top2}>a certain insect</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>kinànàŋkǒʼndzə̀m</Text>
                <Text style={styles.top2}>(prefix-lifts-humps-of)</Text>
                <Text style={styles.top2}>caterpillar</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>bìnbìnteʼnsə́m</Text>
                <Text style={styles.top2}>(evade-cover-up-matter)</Text>
                <Text style={styles.top2}>hypocrite</Text>
              </View>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
              
        </View>

        <View style={styles.container}>
        <Text style={styles.head2}>Nouns Classes and genders</Text>
              <Text style={styles.intro}>
             {w24}
             </Text>
              <Text style={styles.keyword}>Example:</Text>
              <Text style={styles.keyword}>sg:     <Text style={styles.bold}>Ki</Text>kúm <Text style={styles.bold}>k</Text>ém <Text style={styles.bold}>kí</Text> dzə́ é le?</Text>
              <Text style={styles.keyword}>Meaning:   How is my shirt?</Text>
              <Text style={styles.keyword}>pl:    <Text style={styles.bold}>Vi</Text>kúm <Text style={styles.bold}>v</Text>ém <Text style={styles.bold}>ví</Text> dzə́ é le?</Text>
              <Text style={styles.keyword}>Meaning:   How are my shirts?</Text>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-right" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
              
        </View>

</Carousel>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    intro:{
      color: 'white',
      backgroundColor: 'black',
      padding: 20,
      fontSize: 17,
      fontFamily: 'Poppins-Medium',
    },
    bold:{
      fontWeight: 'bold',
      color: '#5ff232'
    },
    head:{
      width: 300,
    position: 'absolute',
    top: 65,
    fontFamily: 'Poppins-Medium',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 45,
    left: 20,
    },
    head2:{
      width: 300,
    position: 'absolute',
    top: 65,
    fontFamily: 'Poppins-Medium',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 40,
    left: 20,
    },
    swipe:{
      fontSize: 18,
      fontFamily: 'Poppins-Bold',
      backgroundColor: '#5ff232',
      padding: 10,
    },
    keyword:{
      marginTop: 10,
      left: 10,
      width: 350,
      fontSize: 18,
      fontFamily: 'Poppins-Light',
    },
    keyword2:{
      marginTop: 10,
      left: 10,
      width: 350,
      fontSize: 15,
      fontFamily: 'Poppins-MediumItalic',
    },
    content:{
      alignItems: 'center',
      justifyContent: 'center',
    backgroundColor: 'black',
    width: 330,
    height: 250,
    },
move:{
    position: 'absolute',
    bottom: 50,
    right: 10,
  },
  title:{
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    marginTop: 30,
  },
  top:{
    fontSize: 15, 
    fontFamily: 'Poppins-Bold'
  },
  title2:{
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 20,
  },
  top2:{
    fontSize: 13, 
    fontFamily: 'Poppins-Light'  
  },
  top3:{
    fontSize: 13, 
    fontFamily: 'Poppins-Bold'  
  }
});
export default Nouns;
