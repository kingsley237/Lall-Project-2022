import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert} from 'react-native';
import data from '../../../learnLanguage/nsoAlpha.json';
import Carousel from 'simple-carousel-react-native';
import Tts from 'react-native-tts';
import {DataTable} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <Text style={styles.head}>ABOUT | "kùm"</Text>
              <Text style={styles.intro}>
              <Text style={styles.bold}>Lamnso</Text> is a tone language. The <Text style={styles.bold}>Lamnso</Text> segmental alphabet is made up of <Text style={styles.bold}>23 consonants</Text> and <Text style={styles.bold}>6 vowels</Text>
              </Text>
              <Text style={styles.keyword}>Keywords</Text>
              <Text style={styles.keyword}>const.     Consonants</Text>
              <Text style={styles.keyword}>vow.       Vowel</Text>
             
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>THE TONES</Text>
        <View style={{top: 50, width: "100%"}}>
              <DataTable>
      <DataTable.Header>
        <DataTable.Title>Tone</DataTable.Title>
        <DataTable.Title numeric>Phonetic</DataTable.Title>
        <DataTable.Title numeric>Example</DataTable.Title>
        <DataTable.Title numeric>Gloss</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>High-rising</DataTable.Cell>
        <DataTable.Cell numeric>á | ā́</DataTable.Cell>
        <DataTable.Cell numeric>tán</DataTable.Cell>
        <DataTable.Cell numeric>hat</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>High-level</DataTable.Cell>
        <DataTable.Cell numeric>á</DataTable.Cell>
        <DataTable.Cell numeric>láʼ</DataTable.Cell>
        <DataTable.Cell numeric>home</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Low-level</DataTable.Cell>
        <DataTable.Cell numeric>à</DataTable.Cell>
        <DataTable.Cell numeric>njàm</DataTable.Cell>
        <DataTable.Cell numeric>axe</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Low-falling</DataTable.Cell>
        <DataTable.Cell numeric>à̀</DataTable.Cell>
        <DataTable.Cell numeric>bàr</DataTable.Cell>
        <DataTable.Cell numeric>cup</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Mid</DataTable.Cell>
        <DataTable.Cell numeric>ā</DataTable.Cell>
        <DataTable.Cell numeric>lav</DataTable.Cell>
        <DataTable.Cell numeric>house</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>High-falling</DataTable.Cell>
        <DataTable.Cell numeric>â</DataTable.Cell>
        <DataTable.Cell numeric>fon</DataTable.Cell>
        <DataTable.Cell numeric>chief</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>High-mid</DataTable.Cell>
        <DataTable.Cell numeric>á̄</DataTable.Cell>
        <DataTable.Cell numeric>nyóo</DataTable.Cell>
        <DataTable.Cell numeric>sauce</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Low-high</DataTable.Cell>
        <DataTable.Cell numeric>à́</DataTable.Cell>
        <DataTable.Cell numeric>mbìír</DataTable.Cell>
        <DataTable.Cell numeric>bell</DataTable.Cell>
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
                            <MaterialCommunityIcons name="gesture-swipe-horizontal" color='#5ff232' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
                            </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Short vowel</Text>
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

        <View style={styles.container}>
          <Text style={styles.abt}>Long / double vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].aa[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].aa[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].aa[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].aa[0].letter, data.alpha[0].aa[0].ex, data.alpha[0].aa[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].b[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].b[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].b[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].b[0].letter, data.alpha[0].b[0].ex, data.alpha[0].b[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].bv[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].bv[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].bv[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].bv[0].letter, data.alpha[0].bv[0].ex, data.alpha[0].bv[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Consonant letter</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].c[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].c[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].c[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].c[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].c[0].letter, data.alpha[0].c[0].ex, data.alpha[0].c[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].d[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].d[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].d[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].d[0].letter, data.alpha[0].d[0].ex, data.alpha[0].d[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].dz[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].dz[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].dz[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].dz[0].letter, data.alpha[0].dz[0].ex, data.alpha[0].dz[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>  

        <View style={styles.container}>
          <Text style={styles.abt}>Short vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].e[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].e[0].sound}/</Text></Text> 
                <View style={styles.col}>
                    <Text style={styles.example}>Example: <Text style={styles.bold}>{data.alpha[0].e[0].ex}</Text></Text>
                    <Text style={styles.meaning}>Meaning: <Text style={styles.bold}>{data.alpha[0].e[0].meaning}</Text></Text>   
                    <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
                  </View>         
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].e[0].letter, data.alpha[0].e[0].ex, data.alpha[0].e[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>  

        <View style={styles.container}>
          <Text style={styles.abt}>Long / double vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ee[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ee[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ee[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ee[0].letter, data.alpha[0].ee[0].ex, data.alpha[0].ee[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>    

        <View style={styles.container}>
          <Text style={styles.abt}>Short vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ə[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example: <Text style={styles.bold}>{data.alpha[0].ə[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning: <Text style={styles.bold}>{data.alpha[0].ə[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ə[0].letter, data.alpha[0].ə[0].ex, data.alpha[0].ə[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Long / double vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].əə[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example: <Text style={styles.bold}>{data.alpha[0].əə[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning: <Text style={styles.bold}>{data.alpha[0].əə[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].əə[0].letter, data.alpha[0].əə[0].ex, data.alpha[0].əə[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>    

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].f[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].f[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].f[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].f[0].letter, data.alpha[0].f[0].ex, data.alpha[0].f[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].g[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].g[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].g[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].g[0].letter, data.alpha[0].g[0].ex, data.alpha[0].g[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   
        
        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].gb[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].gb[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].gb[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].gb[0].letter, data.alpha[0].gb[0].ex, data.alpha[0].gb[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].gh[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].gh[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].gh[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].gh[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].gh[0].letter, data.alpha[0].gh[0].ex, data.alpha[0].gh[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Trigraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ghv[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ghv[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ghv[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ghv[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ghv[0].letter, data.alpha[0].ghv[0].ex, data.alpha[0].ghv[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   
        
        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].gv[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].gv[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].gv[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].gv[0].letter, data.alpha[0].gv[0].ex, data.alpha[0].gv[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View> 

        <View style={styles.container}>          
        <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].h[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].h[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].h[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].h[0].letter, data.alpha[0].h[0].ex, data.alpha[0].h[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Short vowel</Text>
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
          <Text style={styles.abt}>Long / double vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ii[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ii[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ii[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ii[0].letter, data.alpha[0].ii[0].ex, data.alpha[0].ii[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].j[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].j[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].j[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].j[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].j[0].letter, data.alpha[0].j[0].ex, data.alpha[0].j[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].k[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].k[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].k[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].k[0].letter, data.alpha[0].k[0].ex, data.alpha[0].k[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].kf[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].kf[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].kf[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].kf[0].letter, data.alpha[0].kf[0].ex, data.alpha[0].kf[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].kp[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].kp[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].kp[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].kp[0].letter, data.alpha[0].kp[0].ex, data.alpha[0].kp[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].l[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].l[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].l[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].l[0].letter, data.alpha[0].l[0].ex, data.alpha[0].l[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].m[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].m[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].m[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].m[0].letter, data.alpha[0].m[0].ex, data.alpha[0].m[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].mv[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].mv[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].mv[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].mv[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].mv[0].letter, data.alpha[0].mv[0].ex, data.alpha[0].mv[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].n[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].n[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].n[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].n[0].letter, data.alpha[0].n[0].ex, data.alpha[0].n[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ŋ[0].letter}</Text>
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
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ny[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].ny[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ny[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ny[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ny[0].letter, data.alpha[0].ny[0].ex, data.alpha[0].ny[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Short vowel</Text>
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
          <Text style={styles.abt}>Long / double vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].oo[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].oo[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].oo[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].oo[0].letter, data.alpha[0].oo[0].ex, data.alpha[0].oo[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].p[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].p[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].p[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].p[0].letter, data.alpha[0].p[0].ex, data.alpha[0].p[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].r[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].r[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].r[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].r[0].letter, data.alpha[0].r[0].ex, data.alpha[0].r[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].s[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].s[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].s[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].s[0].letter, data.alpha[0].s[0].ex, data.alpha[0].s[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].sh[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].sh[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].sh[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].sh[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].sh[0].letter, data.alpha[0].sh[0].ex, data.alpha[0].sh[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].t[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].t[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].t[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].t[0].letter, data.alpha[0].t[0].ex, data.alpha[0].t[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Digraph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].ts[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].ts[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].ts[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].ts[0].letter, data.alpha[0].ts[0].ex, data.alpha[0].ts[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Short vowel</Text>
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
          <Text style={styles.abt}>Long / double vowel</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].uu[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].uu[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].uu[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].uu[0].letter, data.alpha[0].uu[0].ex, data.alpha[0].uu[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].v[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].v[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].v[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].v[0].letter, data.alpha[0].v[0].ex, data.alpha[0].v[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].w[0].letter}</Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].w[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].w[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].w[0].letter, data.alpha[0].w[0].ex, data.alpha[0].w[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>          
        <Text style={styles.abt}>Monograph</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].y[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].y[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].y[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].y[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].y[0].letter, data.alpha[0].y[0].ex, data.alpha[0].y[0].meaning)}>
          <MaterialCommunityIcons name="microphone-outline" color='white' size={70} style={{marginTop: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 50, padding: 5}}/>
          </TouchableOpacity>
          <Text style={styles.micdesc}>Listen</Text>
        </View>   

        <View style={styles.container}>
          <Text style={styles.abt}>Glottal stop</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>{data.alpha[0].mark[0].letter}</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/{data.alpha[0].mark[0].sound}/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>{data.alpha[0].mark[0].ex}</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>{data.alpha[0].mark[0].meaning}</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mic} onPress={()=> Speak(data.alpha[0].mark[0].letter, data.alpha[0].mark[0].ex, data.alpha[0].mark[0].meaning)}>
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
