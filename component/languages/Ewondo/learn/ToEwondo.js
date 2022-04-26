import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import data from '../../../learnLanguage/ewondoSymbols.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'simple-carousel-react-native';
import Tts from 'react-native-tts';
import {DataTable} from 'react-native-paper'

function Speak2(word, meaning){
  Tts.setDefaultRate(0.25);
    Tts.speak(word, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      Tts.speak('Letter Meaning,', {
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
      Tts.speak('Letter Meaning,', {
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
              <Text style={styles.bold}>Ewondo</Text> is a tone language. The <Text style={styles.bold}>Ewondo</Text> segmental alphabet is made up of <Text style={styles.bold}>20 consonants</Text> and <Text style={styles.bold}>7 vowels.</Text> It is divided into 3 tones.
              </Text>
              <Text style={styles.keyword}>Keywords</Text>
              <Text style={styles.keyword}>const.     Consonants</Text>
              <Text style={styles.keyword}>vow.       Vowel</Text>
              <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-horizontal" color='orange' size={50} style={{marginBottom: 10, marginRight: 15,}}/> 
        </View>
        </View>

        <View style={styles.container}>
            <Text style={styles.head}>The tones</Text>
            <Text style={styles.intro}>
                  There are<Text style={styles.bold}> 3 tone phonemes: High, Mid, and Low.</Text>
                  </Text>
                  <DataTable>
          <DataTable.Header>
            <DataTable.Title>Tone</DataTable.Title>
            <DataTable.Title numeric>Phonetic</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>High</DataTable.Cell>
            <DataTable.Cell numeric>á | ā́</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Mid</DataTable.Cell>
            <DataTable.Cell numeric>ā</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Low</DataTable.Cell>
            <DataTable.Cell numeric>à</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Pagination
            page={1}
            numberOfPages={1}
            onPageChange={page =>console.log(page)}
            label="1 of 1"
          />
        </DataTable>
        <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-horizontal" color='orange' size={50} style={{marginBottom: 10, marginRight: 15,}}/> 
        </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>Symbols</Text>
        <Text style={styles.intro}>
              Most of the letters used herein have values very similar to that of English and French. Therefore, no further explanation.<Text style={styles.bold}> special linguistics symbols </Text>will be explained. Vowels occur at the 3 levels stated below:
              </Text>
              <View style={{top: 50, width: "100%"}}>
              <DataTable>
      <DataTable.Header>
        <DataTable.Title>Level</DataTable.Title>
        <DataTable.Title numeric>Front</DataTable.Title>
        <DataTable.Title numeric>Central</DataTable.Title>
        <DataTable.Title numeric>Back</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>High</DataTable.Cell>
        <DataTable.Cell numeric>i</DataTable.Cell>
        <DataTable.Cell numeric></DataTable.Cell>
        <DataTable.Cell numeric>u</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Mid</DataTable.Cell>
        <DataTable.Cell numeric>e</DataTable.Cell>
        <DataTable.Cell numeric>ə</DataTable.Cell>
        <DataTable.Cell numeric>o</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Low</DataTable.Cell>
        <DataTable.Cell numeric>ɛ</DataTable.Cell>
        <DataTable.Cell numeric>a</DataTable.Cell>
        <DataTable.Cell numeric>ɔ</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={1}
        numberOfPages={1}
        onPageChange={page =>console.log(page)}
        label="1 of 1"
      />
    </DataTable>
    </View>
    <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-horizontal" color='orange' size={30} style={{marginRight: 15,}}/> 
        </View>
                                            </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Velar nasal</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ŋ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ŋ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ŋ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ŋ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ŋ[0].letter, data.alpha[0].ŋ[0].ex, data.alpha[0].ŋ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Palatal nasal</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɲ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɲ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɲ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].ɲ[0].letter, data.alpha[0].ɲ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Double consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ts[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ts[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].ts[0].letter, data.alpha[0].ts[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Double consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].dz[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].dz[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].dz[0].letter, data.alpha[0].dz[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Double consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].kp[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].kp[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].kp[0].letter, data.alpha[0].kp[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Double consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].gb[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].gb[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].gb[0].letter, data.alpha[0].gb[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].e[0].letter}</Text>
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
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɛ[0].letter}</Text>
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

        <View style={styles.container}>
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].o[0].letter}</Text>
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
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɔ[0].letter}</Text>
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
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ə[0].letter}</Text>
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
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].i[0].letter}</Text>
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
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].u[0].letter}</Text>
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
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].a[0].letter}</Text>
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

        <View style={styles.container}>
          <Text style={styles.abt}>Double consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].č[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].č[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].č[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].č[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].č[0].letter, data.alpha[0].č[0].ex, data.alpha[0].č[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɦ[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ɦ[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɦ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɦ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɦ[0].letter, data.alpha[0].ɦ[0].ex, data.alpha[0].ɦ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʕ[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʕ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].ʕ[0].letter, data.alpha[0].ʕ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɨ[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɨ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].ɨ[0].letter, data.alpha[0].ɨ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Single vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɹ[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ɹ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɹ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ɹ[0].letter, data.alpha[0].ɹ[0].ex, data.alpha[0].ɹ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Velar nasal</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].r̥[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].r̥[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].r̥[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].r̥[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].r̥[0].letter, data.alpha[0].r̥[0].ex, data.alpha[0].r̥[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Consonant</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ɱ[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ɱ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].ɱ[0].letter, data.alpha[0].ɱ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Linguistic symbol</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ʔ[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ʔ[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ʔ[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>symbol.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ʔ[0].letter, data.alpha[0].ʔ[0].ex, data.alpha[0].ʔ[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Linguistic symbol</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].sign[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].sign[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>symbol.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].sign[0].letter, data.alpha[0].sign[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Linguistic symbol</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].sign2[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].sign2[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>symbol.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].sign2[0].letter, data.alpha[0].sign2[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Linguistic symbol</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].sign3[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].sign3[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>symbol.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak2(data.alpha[0].sign3[0].letter, data.alpha[0].sign3[0].meaning)}>
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
top: 50,
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
  left: 5,
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

export default ToNso;
