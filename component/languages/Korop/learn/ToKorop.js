import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
import {DataTable} from 'react-native-paper'

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
              The <Text style={styles.bold}>Korop</Text> language is divided into consonant and vowel phonemes. Durop has a system of contrastive tone that co-occurs and interacts with intonational systems.
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
        <DataTable.Cell>High tone</DataTable.Cell>
        <DataTable.Cell numeric>á</DataTable.Cell>
        <DataTable.Cell numeric>núm</DataTable.Cell>
        <DataTable.Cell numeric>grow</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Low tone</DataTable.Cell>
        <DataTable.Cell numeric>à</DataTable.Cell>
        <DataTable.Cell numeric>cɔ̀n</DataTable.Cell>
        <DataTable.Cell numeric>sing</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Rising tone</DataTable.Cell>
        <DataTable.Cell numeric>ǎ</DataTable.Cell>
        <DataTable.Cell numeric>cɔ̌n</DataTable.Cell>
        <DataTable.Cell numeric>drink</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Falling tone</DataTable.Cell>
        <DataTable.Cell numeric>â</DataTable.Cell>
        <DataTable.Cell numeric>cɔ̌n</DataTable.Cell>
        <DataTable.Cell numeric>heap</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Downstep</DataTable.Cell>
        <DataTable.Cell numeric>áǃCá</DataTable.Cell>
        <DataTable.Cell numeric></DataTable.Cell>
        <DataTable.Cell numeric></DataTable.Cell>
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
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>VOWELS</Text>
        <Text style={styles.intro}>
             The vowel phonemes of DuRop are presented in the chart (table) below;
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
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>High front vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[i]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/i/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>í-nàːní</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>rock</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Mid front vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[e]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/e/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ké-kwé</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>thorn</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>
        
        <View style={styles.container}>
          <Text style={styles.abt}>Low front vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[ɛ]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/ɛ/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ǹtɛ̀m</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>friend</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Low central vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[a]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/a/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ká-kám</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>plantain</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Low back vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[ɔ]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/ɔ/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>k-ɔ́ːt ̄</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>neck</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Low back vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[o]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/o/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ó-kpó</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>corpse</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>High back vowel phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[u]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/u/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ù-fù.fùŋ</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>wind</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>vow.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.head}>CONSONANT</Text>
        <Text style={styles.intro}>
             The consonant phonemes of DuRop including the glides (semivowels) are presented in the chart (table) below;
              </Text>
              <View style={{marginTop: 10}} />
              <View style={styles.title}>
                <Text style={styles.top}>Labial</Text>
                <Text style={styles.top}>Alveolar</Text>
                <Text style={styles.top}>Palatal</Text>
                <Text style={styles.top}>Velar</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>kp</Text>
                <Text style={styles.top2}>t</Text>
                <Text style={styles.top2}>c</Text>
                <Text style={styles.top2}>k</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>b</Text>
                <Text style={styles.top2}>d</Text>
                <Text style={styles.top2}></Text>
                <Text style={styles.top2}></Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>f</Text>
                <Text style={styles.top2}>s</Text>
                <Text style={styles.top2}>y</Text>
                <Text style={styles.top2}>w</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.top2}>m</Text>
                <Text style={styles.top2}>n</Text>
                <Text style={styles.top2}>ɲ</Text>
                <Text style={styles.top2}>ŋ</Text>
              </View>
              <View style={styles.move}>
              <Blink>
              <Text style={styles.swipe}>Swipe Left</Text>
              </Blink>
              </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Voiceless labial plosive phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[kp]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/kp/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>kpɛ́</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>pay</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Voiced labial plosive phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[b] ~ [β]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/b/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ò-tìbí  |   ò-tìβí</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>okra</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Voiceless unreleased bilabial plosive</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[p] ~ [p ̄]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/p/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>kó-βôːp ̄ ké-bǒn  |   kó-βôːp ké-bǒn</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>our wing(s)</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Voiceless alveolar plosive phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[t]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/t/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>tɛ́ná</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>show</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Voiced alveolar plosive phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[d]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/d/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>í-dyèy</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>matchet</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Palatal plosive phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[c]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/c/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>câp ̄</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>animal, meat</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Velar plosive phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[k] ~ [ɤ]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/k/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>kwáká   |   kwáɤá</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>want</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Velar continuant phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[f]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/f/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>fùt ̄</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>swell</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Alveolar continuant phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[s]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/s/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>sɔ̀ká</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>choke</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Alveolar continuant phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[y] ~ [i]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/y/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>dyâ   |   díà</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>eat</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Velar continuant phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[w]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/w/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>wɔ̌w</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>roast</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Labial nasal phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[m]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/m/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>dàmá</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>jump</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Alveolar nasal phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[n]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/n/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>nɛ́w</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>be cold</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Palatal nasal phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[ɲ]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/ɲ/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ɲám</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>sell</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.abt}>Palatal nasal phoneme</Text>
          <View style={styles.content}>
            <Text style={styles.letter}>[ŋ]</Text>
            <Text style={styles.sound}>sound: <Text style={styles.bold}>/ŋ/</Text></Text>
            <View style={styles.col}>
              <Text style={styles.example}>Example:   <Text style={styles.bold}>ŋɛ̂y</Text></Text>
              <Text style={styles.meaning}>Meaning:   <Text style={styles.bold}>run</Text></Text>
              <Text style={styles.status}>Status:   <Text style={styles.bold}>const.</Text></Text>
            </View>
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
