import React from 'react'
import {Text, View, Dimensions} from 'react-native'
import data from '../../../learnLanguage/nsoPunctuation.json';
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
import styles from './nsoStyles';

function Punctuation() {
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
                        <View style={styles.container}>
                                    <Text style={styles.head}>INTRO</Text>
                                    <Text style={styles.intro}>
                                The rules that govern <Text style={styles.bold}>punctuation marks</Text> and <Text style={styles.bold}>capitalisation</Text> in the <Text style={styles.bold}>Lamnso Language</Text> are the same as those for English. 
                                </Text>
                                <Text style={styles.keyword}>Keywords</Text>
                                <Text style={styles.keyword}>P1.          Past tense </Text>                                
                                <Text style={styles.keyword}>F1.          Future tense</Text>
                                <Text style={styles.keyword}>NEG.       Negative</Text>
                                <Text style={styles.keyword}>PL.          Plural</Text>
                                            <View style={styles.move}>
                                    <Blink>
                                    <Text style={styles.swipe}>Swipe Left</Text>
                                    </Blink>
                                    </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.header}>{data.punctuation[0].stop[0].name}  "{data.punctuation[0].stop[0].mark}"</Text>
                            <View style={styles.textcontent}><Text style={styles.desc}>{data.punctuation[0].stop[0].desc}</Text></View>
                            <View style={styles.other}>
                            <Text style={styles.ex}>Example: <Text style={styles.bold}> {data.punctuation[0].stop[0].ex}</Text></Text>
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
