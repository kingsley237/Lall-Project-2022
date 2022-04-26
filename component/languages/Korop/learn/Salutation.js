import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import Blink from './Blink';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataTable} from 'react-native-paper'

function Salutation() {
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
        <View style={styles.container}>
        <Text style={styles.head}>SALUTATION</Text>
              <Text style={styles.intro}>
              <Text style={styles.bold}>Lamnso </Text>distinguishes several ways through which greeting can be said to someone else.</Text>
              <Text style={styles.keyword}>Example:{"\n"}</Text>
              <Text style={styles.keyword}>Good Morning{"\n"}</Text>
              <Text style={styles.keyword}>ndzə ràn ne</Text>
              <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-left" color='#003366' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
        </View>

       <View style={styles.content}>
                        <View style={{marginTop: 150}}></View>
                            <Text style={styles.head}>Examples</Text>
                            <View style={{marginTop: 20}}></View>                            
                        <View style={styles.table}>
                            <View style={styles.title}>
                              <Text style={styles.top}>Greeting | Word</Text>
                              <Text style={styles.top}>Meaning</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>Good Morning</Text>
                              <Text style={styles.top2}>ndzə ràn ne</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>Greeting</Text>
                              <Text style={styles.top2}>nshàʼnìn</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>Good Bye</Text>
                              <Text style={styles.top2}>bér</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>How are you?</Text>
                              <Text style={styles.top2}>a sa ka?</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>I am fine</Text>
                              <Text style={styles.top2}>im dze kijung</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>Where are you?</Text>
                              <Text style={styles.top2}>a dze fe</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>Where are you going?</Text>
                              <Text style={styles.top2}>a du a dze fe</Text>
                            </View>
                            <View style={styles.title2}>
                              <Text style={styles.top2}>God bless you</Text>
                              <Text style={styles.top2}>nyuy se vi wo</Text>
                            </View>
                            </View>
                            <View style={{top: 90, width: "100%"}}>

<DataTable>
<DataTable.Header>
<DataTable.Title>Greeting | Word</DataTable.Title>
<DataTable.Title numeric>Meaning</DataTable.Title>
</DataTable.Header>

<DataTable.Row>
<DataTable.Cell>1 Singular</DataTable.Cell>
<DataTable.Cell numeric>{w1}</DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
<DataTable.Cell>2 Singular</DataTable.Cell>
<DataTable.Cell numeric>{w3}</DataTable.Cell>
<DataTable.Cell numeric>{w4}</DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
<DataTable.Cell>3 Singular</DataTable.Cell>
<DataTable.Cell numeric>{w5}</DataTable.Cell>
<DataTable.Cell numeric>{w6}</DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
<DataTable.Cell>1 Plural</DataTable.Cell>
<DataTable.Cell numeric>{w7}</DataTable.Cell>
<DataTable.Cell numeric>{w8}</DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
<DataTable.Cell>2 Plural</DataTable.Cell>
<DataTable.Cell numeric>{w9}</DataTable.Cell>
<DataTable.Cell numeric>{w10}</DataTable.Cell>
</DataTable.Row>

<DataTable.Row>
<DataTable.Cell>3 Plural</DataTable.Cell>
<DataTable.Cell numeric>{w11}</DataTable.Cell>
<DataTable.Cell numeric>{w12}</DataTable.Cell>
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
                            <MaterialCommunityIcons name="gesture-swipe-right" color='#003366' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
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
      width: 350,
      color: 'black',
      backgroundColor: 'white',
      padding: 30,
      fontSize: 17,
      borderTopWidth: 2,
      borderBottomWidth: 2,
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
      fontWeight: 'bold',
      color: '#003366'
    },
    head:{
      width: 300,
    position: 'absolute',
    top: 60,
    fontFamily: 'Poppins-Medium',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 48,
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
      backgroundColor: '#003366',
      padding: 10,
      color: 'white'
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
      fontFamily: 'Poppins-Medium'
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
export default Salutation;
