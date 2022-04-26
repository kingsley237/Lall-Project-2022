import React from 'react';
import {View, Text, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../learn/learnStyle';

function exercises({navigation}) {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>EXERCISES</Text> 

            <View style={styles.content}>

           <View style={styles.option1}>
           <MaterialCommunityIcons name="alphabetical-variant" color='black' size={20} style={{marginTop: 10, marginRight: 10,}}/>
        <Text style={styles.text1}>Alphabet</Text>
        <Pressable style={styles.button1} onPress={() => navigation.navigate('signCam')}><Text style={styles.buttontext}>Launch Exercise</Text></Pressable>
           </View>
           </View>
        </View>
    )
}

export default exercises;
