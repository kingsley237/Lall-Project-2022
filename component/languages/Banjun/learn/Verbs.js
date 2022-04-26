import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';

function Verbs() {
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head}>VERBS</Text>
              <Text style={styles.intro}>
                The verbs in Bulu, while it follows other Bantu languages in the use of words or syllables as tense signs, and the verb stem may be modified to a slight degree to indicate something like mood.
              </Text>
              <Text style={styles.keyword}>Main divisions:{"\n"}</Text>
              <Text style={styles.keyword}>Radical verbs{"\n"}</Text>
              <Text style={styles.keyword}>Derivative verbs</Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

       <View style={styles.content}>
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>Radical verbs</Text>
                            <Text style={styles.intro}>It comprises about half the verbs of the language and are those of one syllable or one syllable with the addition of an unaccented vowel. They're the basic verbs of the language.</Text>
                            <View style={{marginTop: 20}}></View>
                            <View style={styles.title}>
                              <Text style={styles.top}>VERB</Text>
                              <Text style={styles.top}>TYPE</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>bo</Text>
                              <Text style={styles.top2}>Radical</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>ke</Text>
                              <Text style={styles.top2}>Radical</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>jô</Text>
                              <Text style={styles.top2}>Radical</Text>
                            </View>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>          

                        <View style={styles.content}>
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>Derivative verbs</Text>
                            <Text style={styles.intro}>Comprising nearly all the other half of the verbs, they are words of an accented first syllable followed by one or two accented syllables.</Text>
                            
                            <View style={styles.title}>
                              <Text style={styles.top}>VERBS</Text>
                              <Text style={styles.top}>TYPE</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>buni</Text>
                              <Text style={styles.top2}>Derivative</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>faté</Text>
                              <Text style={styles.top2}>Derivativez</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>jalé</Text>
                              <Text style={styles.top2}>Derivative</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>bômbô</Text>
                              <Text style={styles.top2}>Derivative</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>tebe</Text>
                              <Text style={styles.top2}>Derivative</Text>
                            </View>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View>          
            
                        <View style={styles.content}>
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>Verbs of state</Text>
                            <View style={styles.title}>
                              <Text style={styles.top}>VERB</Text>
                              <Text style={styles.top}>Suggested meaning</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>bô</Text>
                              <Text style={styles.top2}>to be lying down</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>lô</Text>
                              <Text style={styles.top2}>to be looking at something</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>tele</Text>
                              <Text style={styles.top2}>to be standing</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>bete</Text>
                              <Text style={styles.top2}>to be upon something</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>tii</Text>
                              <Text style={styles.top2}>to be fast (in a trap)</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>to</Text>
                              <Text style={styles.top2}>to be (sitting)</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>bili</Text>
                              <Text style={styles.top2}>to be possessing something</Text>
                            </View>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
                            </View>
                        </View> 
                        
                        <View style={styles.content}>
                        <View style={{marginTop: 60}}></View>
                            <Text style={styles.head}>The K-form of the verb</Text>
                            <Text style={styles.intro}>
                          It is employed chiefly in the imperative singular but has other uses as well which have connection with the imperative.
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
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>The -An form of the verb</Text>
                            <Text style={styles.intro}>
                         This form is made by affixing -an to the simple form of the verb after dropping a final vowel if there is one. It implies "each other" or "one another".
                            </Text>
                            <Text style={styles.keyword}></Text>
                            <Text style={styles.keyword}>Example:{"\n"}</Text>
                            <Text style={styles.keyword}>vinan (to dislike each other){"\n"}</Text>
                            <Text style={styles.keyword}>vini (to dislike)</Text>
                            <View style={styles.move}>
                            <Blink>
                            <Text style={styles.swipe}>Swipe Left</Text>
                            </Blink>
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
