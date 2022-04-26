import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, ToastAndroid} from 'react-native';
import data from '../../../learnLanguage/bakaAlpha.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
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

      /* Tts.addEventListener('tts-start', (event) => ToastAndroid.show("Listening..."));
      Tts.addEventListener('tts-finish', (event) => ToastAndroid.show("Not listening..."));
 */
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
              The following slides consist of a summary of consonants, vowels and tones in <Text style={styles.bold}>Baka</Text> language listed by Brisson & Boursier (1979).
              </Text>
              <Text style={styles.keyword}>Keywords</Text>
              <Text style={styles.keyword}>const.     Consonants</Text>
              <Text style={styles.keyword}>vow.       Vowel</Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Vowels</Text>
        <Text style={styles.intro}>
              <Text style={styles.bold}>Baka</Text> has a symmetrical vowel system with seven vowels. Every vowel can take three tone heights, so that baka has a total of 21 distinctive vocalic sounds.
              </Text>
              <View style={{marginTop: 10}} />
              <View style={styles.title}>
                <Text style={styles.top}>Level</Text>
                <Text style={styles.top}>Front</Text>
                <Text style={styles.top}>Central</Text>
                <Text style={styles.top}>Back</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Closed</Text>
                <Text style={styles.top2}>i</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}>u</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Half Closed</Text>
                <Text style={styles.top2}>e</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}>o</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Half open</Text>
                <Text style={styles.top2}>ɛ</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}>ɔ</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Open</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}>a</Text>
                <Text style={styles.top2}></Text>
              </View>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>The tones</Text>
        <Text style={styles.intro}>
              Baka is a tone language with a registered tone system. i.e, the tone levels constrast with each other.
              </Text>
              <View style={{marginTop: 30}} />
              <View style={styles.title}>
                <Text style={styles.top}>Tone</Text>
                <Text style={styles.top}>Phonetic</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>High</Text>
                <Text style={styles.top2}>á | ā́</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Mid</Text>
                <Text style={styles.top2}>ā</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Low</Text>
                <Text style={styles.top2}>à</Text>
              </View>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].m[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].m[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].m[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].m[0].letter, data.alpha[0].m[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].n[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].n[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n[0].letter, data.alpha[0].n[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ny[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ny[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ny[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ny[0].letter, data.alpha[0].ny[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ŋ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ŋ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ŋ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ŋ[0].letter, data.alpha[0].ŋ[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].b[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].b[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].b[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].b[0].letter, data.alpha[0].b[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].td[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].td[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].td[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].td[0].letter, data.alpha[0].td[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].kg[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].kg[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].kg[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].kg[0].letter, data.alpha[0].kg[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].kp[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].kp[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].kp[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].kp[0].letter, data.alpha[0].kp[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].mark[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].mark[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].mark[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].mark[0].letter, data.alpha[0].mark[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɸ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɸ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɸ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɸ[0].letter, data.alpha[0].ɸ[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].s[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].s[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].s[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].s[0].letter, data.alpha[0].s[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].j[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].j[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].j[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].j[0].letter, data.alpha[0].j[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].h[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].h[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].h[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].h[0].letter, data.alpha[0].h[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].dz[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].dz[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].dz[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].dz[0].letter, data.alpha[0].dz[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].mb[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].mb[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].mb[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].mb[0].letter, data.alpha[0].mb[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ndz[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ndz[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ndz[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ndz[0].letter, data.alpha[0].ndz[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ŋg[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ŋg[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ŋg[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ŋg[0].letter, data.alpha[0].ŋg[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ngb[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ngb[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ngb[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ngb[0].letter, data.alpha[0].ngb[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].l[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].l[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].l[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].l[0].letter, data.alpha[0].l[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].r[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].r[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].r[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].r[0].letter, data.alpha[0].r[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɓ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɓ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɓ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɓ[0].letter, data.alpha[0].ɓ[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɗ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɗ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɗ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɗ[0].letter, data.alpha[0].ɗ[0].stat)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
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
  alignItems: 'center',
  justifyContent: 'center',
backgroundColor: 'black',
width: 330,
height: 250,
},
letter:{
  bottom: 20,
color: 'white',
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
  color: 'white',
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
  bottom: 70,
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
  fontFamily: 'Poppins-Light'
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
micdesc:{
  top: 190,
  fontFamily: 'Poppins-Light',
  right: 5,
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
