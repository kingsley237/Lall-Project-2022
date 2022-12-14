import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'simple-carousel-react-native';
import data from '../../../learnLanguage/awingAlpha.json';
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

function ToAwing() {


  return (
    <View>
  <Carousel
  height={720}
  width={Dimensions.get('window').width}
  showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head}>ALPHABET</Text>
              <Text style={styles.intro}>
              <Text style={styles.bold}>Awing</Text> is a grassfield Bantu language spoken in the Mezam division. The <Text style={styles.bold}>Awing</Text> segmental alphabet is made up of <Text style={styles.bold}>22 consonants</Text> and <Text style={styles.bold}>9 vowels</Text>
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
        <Text style={styles.head}>The tones</Text>
              <View style={styles.title}>
                <Text style={styles.top}>Tone</Text>
                <Text style={styles.top}>Phonetic</Text>
                <Text style={styles.top}>Grapheme</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>High</Text>
                <Text style={styles.top2}>[a??]</Text>
                <Text style={styles.top2}>a??</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Mid</Text>
                <Text style={styles.top2}>[a??]</Text>
                <Text style={styles.top2}>a??</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Low</Text>
                <Text style={styles.top2}>[a??]</Text>
                <Text style={styles.top2}>a</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Low-High</Text>
                <Text style={styles.top2}>[a??]</Text>
                <Text style={styles.top2}>a??</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>Low-High-Low</Text>
                <Text style={styles.top2}>[a????]</Text>
                <Text style={styles.top2}>a??</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>High-Low</Text>
                <Text style={styles.top2}>[a??]</Text>
                <Text style={styles.top2}>a??</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>High-Mid</Text>
                <Text style={styles.top2}>[a????]</Text>
                <Text style={styles.top2}>a??</Text>
              </View>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Consonants</Text>
              <Text style={styles.intro}>
                The
              <Text style={styles.bold}> consonant phonemes, their allophones and graphemes</Text> are presented in the next slide. Since many Awing words have short and long form, they will be represented too.
              </Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].p[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].p[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].p[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].p[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].p[0].letter, data.alpha[0].p[0].ex, data.alpha[0].p[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].t[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].t[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].t[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].t[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].t[0].letter, data.alpha[0].t[0].ex, data.alpha[0].t[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].k[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].k[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].k[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].k[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].k[0].letter, data.alpha[0].k[0].ex, data.alpha[0].k[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].l[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].l[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].l[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].l[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].l[0].letter, data.alpha[0].l[0].ex, data.alpha[0].l[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ts[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ts[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ts[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ts[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ts[0].letter, data.alpha[0].ts[0].ex, data.alpha[0].ts[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].f[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].f[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].f[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].f[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].f[0].letter, data.alpha[0].f[0].ex, data.alpha[0].f[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].s[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].s[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].s[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].s[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].s[0].letter, data.alpha[0].s[0].ex, data.alpha[0].s[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].z[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].z[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].z[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].z[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].z[0].letter, data.alpha[0].z[0].ex, data.alpha[0].z[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].m[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].m[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].m[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].m[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].m[0].letter, data.alpha[0].m[0].ex, data.alpha[0].m[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].n[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n[0].letter, data.alpha[0].n[0].ex, data.alpha[0].n[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].w[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].w[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].w[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].w[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].w[0].letter, data.alpha[0].w[0].ex, data.alpha[0].w[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].j[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].j[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].j[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].j[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].j[0].letter, data.alpha[0].j[0].ex, data.alpha[0].j[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
        <Text style={styles.head2}>Nasal-consonants Clusters</Text>
              <Text style={styles.intro}>
                One kind of consonant cluster found in Awing consist of clusters where the first consonant is a
              <Text style={styles.bold}> syllabic nasal consonant</Text> that is pronounced at the same place of articulation as the following consonant.
              </Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].np[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].np[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].np[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].np[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].np[0].letter, data.alpha[0].np[0].ex, data.alpha[0].np[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nt[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nt[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nt[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nt[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nt[0].letter, data.alpha[0].nt[0].ex, data.alpha[0].nt[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nk[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nk[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nk[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nk[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nk[0].letter, data.alpha[0].nk[0].ex, data.alpha[0].nk[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nl[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nl[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nl[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nl[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nl[0].letter, data.alpha[0].nl[0].ex, data.alpha[0].nl[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].n??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n??[0].letter, data.alpha[0].n??[0].ex, data.alpha[0].n??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nts[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nts[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nts[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nts[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nts[0].letter, data.alpha[0].nts[0].ex, data.alpha[0].nts[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nt??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nt??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nt??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nt??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nt??[0].letter, data.alpha[0].nt??[0].ex, data.alpha[0].nt??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nz[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nz[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nz[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nz[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nz[0].letter, data.alpha[0].nz[0].ex, data.alpha[0].nz[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].n??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n??[0].letter, data.alpha[0].n??[0].ex, data.alpha[0].n??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nm[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nm[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nm[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nm[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nm[0].letter, data.alpha[0].nm[0].ex, data.alpha[0].nm[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].nn[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].nn[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].nn[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].nn[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].nn[0].letter, data.alpha[0].nn[0].ex, data.alpha[0].nn[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].n??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n??[0].letter, data.alpha[0].n??[0].ex, data.alpha[0].n??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n??[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].n??[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n??[0].letter, data.alpha[0].n??[0].ex, data.alpha[0].n??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
        <Text style={styles.head2}>Palatalized Consonants</Text>
              <Text style={styles.intro}>
                Another kind of consonant cluster is where the second consonant is the 
              <Text style={styles.bold}> palatal glide [j], </Text>which is always written in Awing as "y".
              </Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].pj[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].pj[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].pj[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].pj[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].pj[0].letter, data.alpha[0].pj[0].ex, data.alpha[0].pj[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].tj[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].tj[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].tj[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].tj[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].tj[0].letter, data.alpha[0].tj[0].ex, data.alpha[0].tj[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].kj[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].kj[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].kj[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].kj[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].kj[0].letter, data.alpha[0].kj[0].ex, data.alpha[0].kj[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].lj[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].lj[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].lj[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].lj[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].lj[0].letter, data.alpha[0].lj[0].ex, data.alpha[0].lj[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??j[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].??j[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??j[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??j[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??j[0].letter, data.alpha[0].??j[0].ex, data.alpha[0].??j[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].fj[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].fj[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].fj[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].fj[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].fj[0].letter, data.alpha[0].fj[0].ex, data.alpha[0].fj[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].mj[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].mj[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].mj[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].mj[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].mj[0].letter, data.alpha[0].mj[0].ex, data.alpha[0].mj[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Vowels</Text>
              <Text style={styles.intro}>
                The
              <Text style={styles.bold}> Awing language has 9 vowels phonemes</Text> presented in the next slide.
              </Text>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].i[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].i[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].i[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].i[0].letter, data.alpha[0].i[0].ex, data.alpha[0].i[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].u[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].u[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].u[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].u[0].letter, data.alpha[0].u[0].ex, data.alpha[0].u[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].e[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].e[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].e[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].e[0].letter, data.alpha[0].e[0].ex, data.alpha[0].e[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].o[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].o[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].o[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].o[0].letter, data.alpha[0].o[0].ex, data.alpha[0].o[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].a[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].a[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].a[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].a[0].letter, data.alpha[0].a[0].ex, data.alpha[0].a[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].??[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].??[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].??[0].meaning}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].??[0].letter, data.alpha[0].??[0].ex, data.alpha[0].??[0].meaning)}>
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
  fontWeight: 'bold',
  color: 'magenta'
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
fontSize: 31,
left: 20,
},
swipe:{
  fontSize: 18,
  fontFamily: 'Poppins-Bold',
  backgroundColor: 'magenta',
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

export default ToAwing;
