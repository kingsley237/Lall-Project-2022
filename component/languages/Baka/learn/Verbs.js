import React from 'react'
import {Text, View, StyleSheet, Dimensions, ToastAndroid} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
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
  const[w25, setw25] = React.useState("");
  const[w26, setw26] = React.useState("");
  const[w27, setw27] = React.useState("");
  const[w28, setw28] = React.useState("");
  const[w29, setw29] = React.useState("");
  const[w30, setw30] = React.useState("");
  const[w31, setw31] = React.useState("");
  const[w32, setw32] = React.useState("");
  const[w33, setw33] = React.useState("");
  const[w34, setw34] = React.useState("");
  const[w35, setw35] = React.useState("");
  const[w36, setw36] = React.useState("");
  const[w37, setw37] = React.useState("");
  const[w38, setw38] = React.useState("");
  const[w39, setw39] = React.useState("");
  const[w40, setw40] = React.useState("");
  const[w41, setw41] = React.useState("");
  const[w42, setw42] = React.useState("");
  const[w43, setw43] = React.useState("");

  var ref='/Languages/Baka'; 
  var db =  database().ref(ref+'/Verbs');
       
React.useEffect(() => {
  const onChildAdd =
  db
  .on('child_added', snapshot => {
    ToastAndroid.show('A new Lesson has been added '+ snapshot.key?.toString().trim() + ' in pending state', 3000);
  });
  
return () => db.off('child_added', onChildAdd);
}, [])

React.useEffect(() => {
  const onChildDelete = 
  db
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

db.child('w25').on('value', snapshot => {
  setw25(snapshot.val());
});

db.child('w26').on('value', snapshot => {
  setw26(snapshot.val());
});

db.child('w27').on('value', snapshot => {
  setw27(snapshot.val());
});

db.child('w28').on('value', snapshot => {
  setw28(snapshot.val());
});

db.child('w29').on('value', snapshot => {
  setw29(snapshot.val());
});

db.child('w30').on('value', snapshot => {
  setw30(snapshot.val());
});

db.child('w31').on('value', snapshot => {
  setw31(snapshot.val());
});

db.child('w32').on('value', snapshot => {
  setw32(snapshot.val());
});

db.child('w33').on('value', snapshot => {
  setw33(snapshot.val());
});

db.child('w34').on('value', snapshot => {
  setw34(snapshot.val());
});

db.child('w35').on('value', snapshot => {
  setw35(snapshot.val());
});

db.child('w36').on('value', snapshot => {
  setw36(snapshot.val());
});

db.child('w37').on('value', snapshot => {
  setw37(snapshot.val());
});

db.child('w38').on('value', snapshot => {
  setw38(snapshot.val());
});

db.child('w39').on('value', snapshot => {
  setw39(snapshot.val());
});

db.child('w40').on('value', snapshot => {
  setw40(snapshot.val());
});

db.child('w41').on('value', snapshot => {
  setw41(snapshot.val());
});

db.child('w42').on('value', snapshot => {
  setw42(snapshot.val());
});

db.child('w43').on('value', snapshot => {
  setw43(snapshot.val());
});




if(intro === "" || w1 === "" || w2 === "" || w3 === "" || w4 === "" || w5 === "" || w6 === "" || w7 === ""|| w8 === "" || w9 === "" || w10 === "" || w11 === "" || w12 === "" || w13 === "" || w14 === "" || w15 === "" || w16 === "" || w17 === "" || w18 === "" || w19 === "" || w20 === "" || w21 === "" || w22 === "" || w23 === "" || w24 === "" || w25 === "" || w26 === "" || w27 === "" || w28 === "" || w29 === "" || w30 === "" || w31 === "" || w32 === "" || w33 === "" || w34 === "" || w35 === "" || w36 === "" || w37 === "" || w38 === "" || w39 === "" || w40 === "" ||w41 === "" || w42 === "" || w43 === ""){
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
  setw25("N/A");
  setw26("N/A");
  setw27("N/A");
  setw28("N/A");
  setw29("N/A");
  setw30("N/A");
  setw31("N/A");
  setw32("N/A");
  setw33("N/A");
  setw34("N/A");
  setw35("N/A");
  setw36("N/A");
  setw37("N/A");
  setw38("N/A");
  setw39("N/A");
  setw40("N/A");
  setw41("N/A");
  setw42("N/A");
  setw43("N/A");
} 
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head2}>Verbs of motion</Text>
              <Text style={styles.intro}>
                {intro}
              </Text>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-left" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
        </View>

       <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>dɔ</Text>
                            <Text style={styles.intro}>{w1}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w2}{"\n"}</Text>
                            <Text style={styles.keyword}>{w3}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View>       

                         <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>gɔ</Text>
                            <Text style={styles.intro}>{w4}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w5}{"\n"}</Text>
                            <Text style={styles.keyword}>{w6}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View>          

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>kà</Text>
                            <Text style={styles.intro}>{w7}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w8}{"\n"}</Text>
                            <Text style={styles.keyword}>{w9}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>kɔtɔ̀</Text>
                            <Text style={styles.intro}>{w10}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w11}{"\n"}</Text>
                            <Text style={styles.keyword}>{w12}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>wɔtɔ̀</Text>
                            <Text style={styles.intro}>{w13}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w14}{"\n"}</Text>
                            <Text style={styles.keyword}>{w15}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 
            
                        <View style={styles.container}>
                          <Text style={styles.head2}>Verbs of action</Text>
                                <Text style={styles.intro}>
                                  {w16}
                                </Text>
                                <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                          </View>

                          <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Ja</Text>
                            <Text style={styles.intro}>{w17}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w18}{"\n"}</Text>
                            <Text style={styles.keyword}>{w19}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Lità</Text>
                            <Text style={styles.intro}>{w20}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w21}{"\n"}</Text>
                            <Text style={styles.keyword}>{w22}</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Mbɛ̀</Text>
                            <Text style={styles.intro}>{w23}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w24}{"\n"}</Text>
                            <Text style={styles.keyword}>{w25}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Mɛɛ̀</Text>
                            <Text style={styles.intro}>{w26}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w27}{"\n"}</Text>
                            <Text style={styles.keyword}>{w28}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Tongòà</Text>
                            <Text style={styles.intro}>{w29}</Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w30}{"\n"}</Text>
                            <Text style={styles.keyword}>{w31}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.head2}>Verbs of Cognition</Text>
                                  <Text style={styles.intro}>
                                    {w32}
                                  </Text>
                                  <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                            </View>

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Pe</Text>
                            <Text style={styles.intro}>
                              {w33}
                            </Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w34}{"\n"}</Text>
                            <Text style={styles.keyword}>{w35}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Tì</Text>
                            <Text style={styles.intro}>
                              {w36}
                            </Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w37}{"\n"}</Text>
                            <Text style={styles.keyword}>{w41}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View> 

                        <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>{w38}</Text>
                            <Text style={styles.intro}>
                              Meaning 'to think', it is always transitive in Baka. There are three seperate entries under Tɔɔ̀; the verb <Text style={styles.bold}>tɔɔ̀</Text> ('to think/to reflect'), the conjunction <Text style={styles.bold}>tɔɔ̀ ɓà</Text> ('even if') and its synonym <Text style={styles.bold}>tɔɔ̀ pe</Text>.
                            </Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>{w39}{"\n"}</Text>
                            <Text style={styles.keyword}>{w40}</Text>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-right" color='grey' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
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
      color: 'white',
      backgroundColor: 'black',
      padding: 20,
      fontSize: 17,
      lineHeight: 26,
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
        backgroundColor: 'black',
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
      fontFamily: 'Poppins-Light'  
    },
    top3:{
      fontSize: 13, 
      fontFamily: 'Poppins-Bold'  
    }
});
export default Verbs;
