import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';

function Salutation() {
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head}>TENSES</Text>
              <Text style={styles.intro}>
              Tenses in<Text style={styles.bold}> Bulu </Text>indicates not so much time, but rather action at the time indicated. They are ordinarily indicated by a syllable or word preeceding the simple form of the verb.</Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

       <View style={styles.content}>
                        <View style={{marginTop: 50}}></View>
                            <Text style={styles.head}>Present Tense</Text>
                            <Text style={styles.intro}>
                              This tense employs for the tense sign the letter "a" preceeding the simple form of the verb.
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>Mʼ ake.  |   Bi adi.   |  Bʼ asidi{"\n"}</Text>
                            <Text style={styles.keyword}>I go.  |   We eat.   |   They ask.</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>     

                        <View style={styles.content}>
                        <View style={{marginTop: 60}}></View>
                            <Text style={styles.head}>Immediate Past Tense</Text>
                            <Text style={styles.intro}>
                              This tense is not used in European languages but very strictly used in Bulu. It refers to actions during the past of the current day. The tense sign is "ate"
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>Mʼ ate yene môt ate mam me tyà.{"\n"}</Text>
                            <Text style={styles.keyword}>I saw that man this morning.</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>  

                         <View style={styles.content}>
                        <View style={{marginTop: 60}}></View>
                            <Text style={styles.head}>The Past Tense</Text>
                            <Text style={styles.intro}>
                            This is the common tense for all past action longer than ago than last night and employs the tense sign "nga" with a high tone.
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>A nga ke Yaounde{"\n"}</Text>
                            <Text style={styles.keyword}>He went to Yaounde.</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>      

                        <View style={styles.content}>
                            <Text style={styles.head2}>The Historical Past</Text>
                            <Text style={styles.intro}>
                            In other Bantu languages, the historical past is indicated by an introductory word at the beggining of the sentence and a special form of the verb after. In Bulu, the introductory word is "ane" meaning if anything "and".
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>Ane be nga lôñ nda vôm ate.{"\n"}</Text>
                            <Text style={styles.keyword}>And they built a house in that place.</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>      

                         <View style={styles.content}>
                            <Text style={styles.head2}>The Pluperfect Tense</Text>
                            <Text style={styles.intro}>
                           It does not exist in Bulu as a tense but past actions which would use such a tense is expressed by the auxiliary verb "mane" meaning "finish" with the past tense of the verb.
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>A nga mane bo ésaé éte éyoñ me nga kui jale dé.{"\n"}</Text>
                            <Text style={styles.keyword}>He had finished doing that work when i arrived at his village.</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>    

                          <View style={styles.content}>
                        <View style={{marginTop: 60}}></View>
                            <Text style={styles.head}>The Future Tense</Text>
                            <Text style={styles.intro}>
                          Action in the future time is commonly expressed in Bulu by the use of the tense sign "aye" with the simple form of the verb.
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>Mʼ aye so akiti{"\n"}</Text>
                            <Text style={styles.keyword}>I will come tomorrow.</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>      

                        <View style={styles.content}>
                        <View style={{marginTop: 120}}></View>
                            <Text style={styles.head}>The Perfect Tense</Text>
                            <Text style={styles.intro}>
                         This tense is given here last as it differs from the other tenses in that it indicates not action at any given time but action completed at any time, present, past or future. The affixe -ya is added to the simple form of the verb.
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>A boya jam ete.{"\n"}</Text>
                            <Text style={styles.keyword}>He has done that thing.</Text>
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
      borderWidth: 2,
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
      color: '#003366'
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
      backgroundColor: '#003366',
      padding: 10,
      color: 'white'
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
      fontFamily: 'Poppins-Light'
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
export default Salutation;
