import React from 'react'
import {Text, View, StyleSheet, ToastAndroid} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import database, {firebase}from '@react-native-firebase/database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Verbs() {

  const[intro, setIntro] = React.useState("");
  const[w1, setw1] = React.useState("");
  const[w2, setw2] = React.useState("");
  const[w3, setw3] = React.useState("");
  const[w4, setw4] = React.useState("");
  const[w5, setw5] = React.useState("");
  const[w6, setw6] = React.useState("");
  const[w7, setw7] = React.useState("");

  var ref='/Languages/Awing'; 
  var db =  database().ref(ref+'/Orthography');
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

if(intro === "" || w1 === "" || w2 === "" || w3 === "" || w4 === "" || w5 === "" || w6 === "" || w7 === ""){
  setIntro("Content not available");
  setw1("Content not available");
  setw2("Content not available");
  setw3("Content not available");
  setw4("Content not available");
  setw5("Content not available");
  setw6("Content not available");
  setw7("Content not available");
}
    return (
            <Carousel
                width={360}
                height={715}
                showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head2}>Consonant orthography rules</Text>
              <Text style={styles.intro}>
                {intro}
              </Text>
              <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-left" color='grey' size={30} style={{bottom: 10,marginRight: 10}}/>
              </View>
        </View>

       <View style={styles.content}>
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>Rules</Text>
                            <Text style={styles.intro}>
                              <Text style={styles.bold}>1.  </Text> {w1}{'\n'}{'\n'}               
                              <Text style={styles.bold}>2.  </Text> {w2}{'\n'}{'\n'} 
                              <Text style={styles.bold}>3.  </Text> {w3}{'\n'}{'\n'} 
                              <Text style={styles.bold}>4.  </Text> {w4}{'\n'}{'\n'} 
                              <Text style={styles.bold}>5.  </Text> {w5}{'\n'}{'\n'} 
                              
                              </Text>              
                              <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{bottom: 10,marginRight: 10}}/>
              </View>
                        </View>          

                        <View style={styles.content}>
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>Rules</Text>
                            <View style={{marginBottom: 150}}>
                            <Text style={styles.intro}>
                              <Text style={styles.bold}>6.  </Text> {w6}{'\n'}{'\n'}               
                              <Text style={styles.bold}>7.  </Text> {w7}{'\n'}{'\n'}   
                              
                              </Text>   
                              </View>  
                              <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-right" color='grey' size={30} style={{bottom: 10,marginRight: 10}}/>
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
    table:{
      bottom: 60
    },
    intro:{
      width: 350,
      color: 'black',
      backgroundColor: 'white',
      padding: 30,
      fontSize: 17,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      fontFamily: 'Poppins-Medium',
    },
    content:{
      alignItems: 'center',
      justifyContent: 'center',
    width: 360,
    height: 726,
    },
    bold:{
      fontSize: 17,
      fontWeight: 'bold',
      color: 'grey'
    },
    head:{
      width: 300,
    position: 'absolute',
    top: 60,
    fontFamily: 'Poppins-Medium',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 50,
    left: 20,
    },
    head2:{
      width: 300,
    position: 'absolute',
    top: 60,
    fontFamily: 'Poppins-Medium',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 25,
    left: 20,
    },
    swipe:{
      fontSize: 18,
      fontFamily: 'Poppins-Bold',
      backgroundColor: 'grey',
      padding: 10,
    },
    move:{
      position: 'absolute',
      bottom: 30,
      right: 10,
    },
    header:{
        position: 'absolute',
        top: 100,
        fontFamily: 'Poppins-Bold',
        fontSize: 45,
        left: 20,
        width: 300,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    keyword:{
      top: 40,
      left: 10,
      width: 350,
      fontSize: 18,
      fontFamily: 'Poppins-Light',
    },
    desc:{
        color: 'white',
        lineHeight: 22,
        fontSize: 15,
        fontFamily: 'Poppins-LightItalic'
    },
    textcontent:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 350,
        height: 100,
    },
    other:{
        position: 'absolute',
        bottom: 160,
    },
    ex:{
      fontFamily: 'Poppins-Medium',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    border: {
        borderTopWidth: 2,
        borderTopColor: 'black',
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
      fontFamily: 'Poppins-Medium'  
    },
    top3:{
      fontSize: 13, 
      fontFamily: 'Poppins-Bold'  
    }
});
export default Verbs;
