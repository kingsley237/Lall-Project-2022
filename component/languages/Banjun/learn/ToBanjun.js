import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import data from '../../../learnLanguage/banjunAlpha.json'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
import Tts from 'react-native-tts';


function Speak(word, example, meaning){
  Tts.setDefaultRate(0.25);
    Tts.speak(word, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      
     Tts.setDefaultRate(0.35);
      Tts.speak('Example,', {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      Tts.speak(example, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      Tts.speak('Meaning,', {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      Tts.speak(meaning, {
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
              The <Text style={styles.bold}>Banjun language</Text> belongs to the Bamileke languages and it is hence considered a semi bantu language.</Text>
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
          <Text style={styles.abt}>{data.alpha[0].p[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].p[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].p[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].p[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].p[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].p[0].letter, data.alpha[0].p[0].ex, data.alpha[0].p[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].b[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].b[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].b[0].letter, data.alpha[0].b[0].ex, data.alpha[0].b[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].bh[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].bh[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].bh[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].bh[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].bh[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].bh[0].letter, data.alpha[0].bh[0].ex, data.alpha[0].bh[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].t[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].t[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].t[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].t[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].t[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].t[0].letter, data.alpha[0].t[0].ex, data.alpha[0].t[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].th[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].th[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].th[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].th[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].th[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].th[0].letter, data.alpha[0].th[0].ex, data.alpha[0].th[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].d[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].d[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].d[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].d[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].d[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].d[0].letter, data.alpha[0].d[0].ex, data.alpha[0].d[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].dh[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].dh[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].dh[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].dh[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].dh[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].dh[0].letter, data.alpha[0].dh[0].ex, data.alpha[0].dh[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].f[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].f[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].f[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].f[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].f[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].f[0].letter, data.alpha[0].f[0].ex, data.alpha[0].f[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].v[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].v[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].v[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].v[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].v[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].v[0].letter, data.alpha[0].v[0].ex, data.alpha[0].v[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].pf[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].pf[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].pf[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].pf[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].pf[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].pf[0].letter, data.alpha[0].pf[0].ex, data.alpha[0].pf[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>
        {/* Continue below */}

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ʤ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʤ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ʤ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ʤ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʤ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ʤ[0].letter, data.alpha[0].ʤ[0].ex, data.alpha[0].ʤ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɕ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɕ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɕ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɕ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɕ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɕ[0].letter, data.alpha[0].ɕ[0].ex, data.alpha[0].ɕ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].x[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].x[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].x[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].x[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].x[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].x[0].letter, data.alpha[0].x[0].ex, data.alpha[0].x[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ʃ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʃ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ʃ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ʃ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʃ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ʃ[0].letter, data.alpha[0].ʃ[0].ex, data.alpha[0].ʃ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɲ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɲ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɲ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɲ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɲ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɲ[0].letter, data.alpha[0].ɲ[0].ex, data.alpha[0].ɲ[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n[0].letter, data.alpha[0].n[0].ex, data.alpha[0].n[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].s[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].s[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].s[0].letter, data.alpha[0].s[0].ex, data.alpha[0].s[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].z[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].z[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].z[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].z[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].z[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].z[0].letter, data.alpha[0].z[0].ex, data.alpha[0].z[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ts[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ts[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ts[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ts[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ts[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ts[0].letter, data.alpha[0].ts[0].ex, data.alpha[0].ts[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].dz[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].dz[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].dz[0].letter, data.alpha[0].dz[0].ex, data.alpha[0].dz[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ʒ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʒ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ʒ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ʒ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʒ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ʒ[0].letter, data.alpha[0].ʒ[0].ex, data.alpha[0].ʒ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ʧ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʧ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ʧ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ʧ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʧ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ʧ[0].letter, data.alpha[0].ʧ[0].ex, data.alpha[0].ʧ[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].j[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].j[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].j[0].letter, data.alpha[0].j[0].ex, data.alpha[0].j[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].k[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].k[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].k[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].k[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].k[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].k[0].letter, data.alpha[0].k[0].ex, data.alpha[0].k[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].g[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].g[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].g[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].g[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].g[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].g[0].letter, data.alpha[0].g[0].ex, data.alpha[0].g[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].h[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].h[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].h[0].letter, data.alpha[0].h[0].ex, data.alpha[0].h[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].m[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].m[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].m[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].m[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].m[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].m[0].letter, data.alpha[0].m[0].ex, data.alpha[0].m[0].meaning)}>
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
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].l[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].l[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].l[0].letter, data.alpha[0].l[0].ex, data.alpha[0].l[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].i[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].i[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].i[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].i[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].i[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].i[0].letter, data.alpha[0].i[0].ex, data.alpha[0].i[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].u[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].u[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].u[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].u[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].u[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].u[0].letter, data.alpha[0].u[0].ex, data.alpha[0].u[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ʉ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʉ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ʉ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ʉ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʉ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ʉ[0].letter, data.alpha[0].ʉ[0].ex, data.alpha[0].ʉ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].e[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].e[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].e[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].e[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].e[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].e[0].letter, data.alpha[0].e[0].ex, data.alpha[0].e[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].o[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].o[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].o[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].o[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].o[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].o[0].letter, data.alpha[0].o[0].ex, data.alpha[0].o[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɛ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɛ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɛ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɛ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɛ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɛ[0].letter, data.alpha[0].ɛ[0].ex, data.alpha[0].ɛ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>
        {/* Continue below */}

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɔ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɔ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɔ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɔ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɔ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɔ[0].letter, data.alpha[0].ɔ[0].ex, data.alpha[0].ɔ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ə[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ə[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ə[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ə[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ə[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ə[0].letter, data.alpha[0].ə[0].ex, data.alpha[0].ə[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].ɐ[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɐ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɐ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɐ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɐ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɐ[0].letter, data.alpha[0].ɐ[0].ex, data.alpha[0].ɐ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>{data.alpha[0].a[0].stat}</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].a[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].a[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].a[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].a[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].a[0].letter, data.alpha[0].a[0].ex, data.alpha[0].a[0].meaning)}>
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
