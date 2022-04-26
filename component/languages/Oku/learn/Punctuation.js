import React from 'react'
import {Text, View, Dimensions} from 'react-native'
import data from '../../../learnLanguage/awingPunctuation.json';
import Carousel from 'simple-carousel-react-native';
import styles from './nsoStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Punctuation() {
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
                        <View style={styles.container}>
                                    <Text style={styles.head}>INTRO</Text>
                                    <Text style={styles.intro}>
                                The punctuation marks and the rules that govern the<Text style={styles.bold}> Awing language </Text> are the same as those for English.
                                </Text>
                                <Text style={styles.keyword}>Keywords</Text>
                                <Text style={styles.keyword}>COMP.     complementiser </Text>                                
                                <Text style={styles.keyword}>PROG.          progressive marker</Text>
                                <Text style={styles.keyword}>NEG.       Negative</Text>
                                <Text style={styles.keyword}>PL.          Plural</Text>
                                <View style={styles.move}>
              <MaterialCommunityIcons name="gesture-swipe-left" color='#FFCC66' size={30} style={{bottom: 10,marginRight: 10}}/>
              </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].stop[0].name}  "{data.punctuation[0].stop[0].mark}"</Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].stop[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].stop[0].ex}</Text></Text>
                            <Text style={styles.ex}>Breakdown: <Text style={styles.bold}> {data.punctuation[0].stop[0].breakdown}</Text></Text>
                            <Text style={styles.ex}>Meaning:   <Text style={styles.bold}>{data.punctuation[0].stop[0].meaning}</Text></Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].question[0].name}  "{data.punctuation[0].question[0].mark}"</Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].question[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].question[0].ex}</Text></Text>
                            <Text style={styles.ex}>Breakdown: <Text style={styles.bold}> {data.punctuation[0].question[0].breakdown}</Text></Text>
                            <Text style={styles.ex}>Meaning:   <Text style={styles.bold}>{data.punctuation[0].question[0].meaning}</Text></Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].exclamation[0].name}  "{data.punctuation[0].exclamation[0].mark}"</Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].exclamation[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].exclamation[0].ex}</Text></Text>
                            <Text style={styles.ex}>Breakdown: <Text style={styles.bold}> {data.punctuation[0].exclamation[0].breakdown}</Text></Text>
                            <Text style={styles.ex}>Meaning:   <Text style={styles.bold}>{data.punctuation[0].exclamation[0].meaning}</Text></Text>
                            
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].comma[0].name}  "{data.punctuation[0].comma[0].mark}"</Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].comma[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].comma[0].ex}</Text></Text>
                            <Text style={styles.ex}>Breakdown: <Text style={styles.bold}> {data.punctuation[0].comma[0].breakdown}</Text></Text>
                            <Text style={styles.ex}>Meaning:   <Text style={styles.bold}>{data.punctuation[0].comma[0].meaning}</Text></Text>
                            
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].colon[0].name}  "{data.punctuation[0].colon[0].mark}"</Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].colon[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].colon[0].ex}</Text></Text>
                            <Text style={styles.ex}>Breakdown: <Text style={styles.bold}> {data.punctuation[0].colon[0].breakdown}</Text></Text>
                            <Text style={styles.ex}>Meaning:   <Text style={styles.bold}>{data.punctuation[0].colon[0].meaning}</Text></Text>
                            
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].capital[0].name} </Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].capital[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].capital[0].ex}</Text></Text>
                            <Text style={styles.ex}>Breakdown: <Text style={styles.bold}> {data.punctuation[0].capital[0].breakdown}</Text></Text>
                            <Text style={styles.ex}>Meaning:   <Text style={styles.bold}>{data.punctuation[0].capital[0].meaning}</Text></Text>
                            
                            </View>
                        </View>
            
            </Carousel>

    )
}

export default Punctuation;
