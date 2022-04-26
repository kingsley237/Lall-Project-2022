import React from 'react';
import {View, Text, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './learnStyle';



function learn({navigation}) {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>LEARN</Text> 

            <View style={styles.content}>

           <View style={styles.option1}>
           <MaterialCommunityIcons name="alphabetical-variant" color='black' size={20} style={{marginTop: 10, marginRight: 15,}}/> 
        <Text style={styles.text1}>Alphabet</Text>        
        <Pressable style={styles.button1} onPress={()=> navigation.navigate('en_to_oku')}><Text style={styles.buttontext}>Learn More</Text></Pressable>
           </View>
           </View>
        </View>
    )
}

export default learn;
