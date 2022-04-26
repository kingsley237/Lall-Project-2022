import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import data from '../../../learnLanguage/buluAlpha.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'simple-carousel-react-native';
import Tts from 'react-native-tts';

function Speak(word, about){
  Tts.setDefaultLanguage('en-IE');
  Tts.setDefaultRate(0.25);
    Tts.speak(word, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      
     Tts.setDefaultRate(0.35);
      Tts.speak('Letter status,', {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      Tts.speak(about, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
}

function ToNso() {
  return (
    <View>
  <Carousel
  style={styles.carousel}
  height={720}
  width={Dimensions.get('window').width}
  showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head}>ALPHABET</Text>
              <Text style={styles.intro}>
              <Text style={styles.bold}>Bulu</Text> is a tone language. To become a good Bulu speaker, it is imperative to get the tones of words as nearly correct as possible
              </Text>
              <Text style={styles.keyword}>Keywords</Text>
              <Text style={styles.keyword}>const.     Consonants</Text>
              <Text style={styles.keyword}>vow.       Vowel</Text>
              <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-left" color='orange' size={50} style={{marginTop: 10, marginRight: 15,}}/> 
              </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>RULES</Text>
        <View style={{marginTop: 30}}></View>
              <View style={styles.title}>
                <Text style={styles.top}></Text>
                <Text style={styles.top}></Text>
                <Text style={styles.top}></Text>
                <Text style={styles.top}></Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>1.</Text>
                <Text style={styles.top2}>A question in Bulu, instead of raising the tone of the last word as in English, either leaves the tone unchanged.</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>2.  </Text>
                <Text style={styles.top2}>While there are five tones, most words are found in either tone 1 or 4. The number of words in tones 2, 3 and 5 are comparatively small</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>3. </Text>
                <Text style={styles.top2}>Tone 3 seems to have a slight drop or slide just at the end and tone 5 sometimes a slight drop or slide downward</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>4. </Text>
                <Text style={styles.top2}>A large proportion of the nouns in the Bulu are monosyllables. Of the rest, the greater part consists of words made up of a stem and a noun prefix</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>5.  </Text>
                <Text style={styles.top2}>A noticeable feature of the Bulu language is the great number of words in which the vowels are the same.</Text>
              </View>
              <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-horizontal" color='orange' size={50} style={{marginTop: 10, marginRight: 15,}}/> 
              </View>
        </View>

        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{height: 7000, alignItems: 'center', backgroundColor: 'white' }}>
          <Text style={styles.abt}>Alphabet</Text>
          <View style={{top: 160}}>
          <Text style={styles.intro}>
            The letters used in writing Bulu are as follows:
              </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].a[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].a[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].a[0].letter, data.alpha[0].a[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>          
          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].b[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].b[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].b[0].letter, data.alpha[0].b[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>       
          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].d[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].d[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].d[0].letter, data.alpha[0].d[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>          
          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].e[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].e[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].e[0].letter, data.alpha[0].e[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>          
         
          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].kp[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].kp[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].kp[0].letter, data.alpha[0].kp[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>       

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].f[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].f[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].f[0].letter, data.alpha[0].f[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>    

           <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].g[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].g[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].g[0].letter, data.alpha[0].g[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>        

           <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].i[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].i[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].i[0].letter, data.alpha[0].i[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>     

           <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].j[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].j[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].j[0].letter, data.alpha[0].j[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>         

           <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].k[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].k[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].k[0].letter, data.alpha[0].k[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>         

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].l[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].l[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].l[0].letter, data.alpha[0].l[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>     

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].m[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].m[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].m[0].letter, data.alpha[0].m[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>          

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].n[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].n[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n[0].letter, data.alpha[0].n[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>          

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].ñ[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].ñ[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ñ[0].letter, data.alpha[0].ñ[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>        

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].o[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].o[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].o[0].letter, data.alpha[0].o[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>   

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].ô[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].ô[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ô[0].letter, data.alpha[0].ô[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>  

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].p[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].p[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].p[0].letter, data.alpha[0].p[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>      

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].s[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].s[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].s[0].letter, data.alpha[0].s[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>    

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].t[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].t[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].t[0].letter, data.alpha[0].t[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>       

           <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].u[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].u[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].u[0].letter, data.alpha[0].u[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View> 

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].v[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].v[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].v[0].letter, data.alpha[0].v[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>    

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].w[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].w[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].w[0].letter, data.alpha[0].w[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>     

           <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].y[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].y[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].y[0].letter, data.alpha[0].y[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>       

          <View style={styles.content2}>
            <Text style={styles.letter}>{data.alpha[0].z[0].letter}</Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>{data.alpha[0].z[0].about}</Text></Text> 
              <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].z[0].letter, data.alpha[0].z[0].about)} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={40} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>          
          </View>          
          </ScrollView>
        </View>
        <View style={styles.container}>
        <Text style={styles.head}>Omitted K</Text>
              <Text style={styles.intro}>
           In Bulu speech, the letter k (or g) is ommited between two vowels and the ommision is indicated in speech by a glottal stop or jerk</Text>
           <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-right" color='orange' size={50} style={{marginTop: 10, marginRight: 15,}}/> 
              </View>
        </View>
  </Carousel>
  </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
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
bold:{
  fontSize: 17,
  fontFamily: 'Poppins-Medium',
  fontWeight: 'bold',
  color: 'orange'
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
swipe:{
  fontSize: 18,
  fontFamily: 'Poppins-Bold',
  backgroundColor: 'orange',
  padding: 10,
},
keyword:{
  top: 40,
  left: 10,
  width: 350,
  fontSize: 18,
  fontFamily: 'Poppins-Light',
},
content:{
  top: 190,
  alignItems: 'center',
  justifyContent: 'center',
backgroundColor: 'white',
width: 200,
borderWidth: 1,
height: 150,
},
content2:{
  top: 190,
  alignItems: 'center',
  justifyContent: 'center',
backgroundColor: 'white',
width: 230,
borderWidth: 1,
height: 150,
marginTop: 130
},
letter:{
color: 'black',
fontSize: 40,
fontFamily: 'Poppins-SemiBold'
},
sound:{
  bottom: 20,
color: 'white',
fontFamily: 'Poppins-Medium',
fontSize: 17,
},
example:{
  color: 'white',
  fontFamily: 'Poppins-Medium',
  fontSize: 15,
  },
col:{
  bottom: 10,
  right: 20,
flexDirection: 'column',
},
meaning:{
  fontSize: 15,
  color: 'white',
  fontFamily: 'Poppins-Medium',
  top: 10,
},
status:{
  fontSize: 15,
  color: 'black',
  fontFamily: 'Poppins-Medium',
  top: 20
},
move:{
  position: 'absolute',
  bottom: 50,
  right: 10,
},
mic:{
  position: 'absolute',
  bottom: -60,
},
title:{
  flexDirection: 'row',
  width: 350,
  justifyContent: 'space-between',
  borderBottomWidth: 3,
  borderBottomColor: 'black',
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
micdesc:{
  fontFamily: 'Poppins-Light',
  right: 5,
  top: 105,
  width: 80,
  textAlign: 'center',
  borderBottomWidth: 1,
  borderBottomColor: 'black',
},
abt:{
  position: 'absolute',
  top: 100,
  right: 45,
  fontSize: 20,
  fontFamily: 'Poppins-Medium',
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  width: 300
}
});

export default ToNso;
