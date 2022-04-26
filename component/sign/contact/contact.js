import React from 'react'
import {View, Text, Linking, TextInput, ScrollView, Pressable} from 'react-native'
import styles from './contactStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function contact() {
    
    return (
        <ScrollView>
        <View style={styles.container}>
                <Text style={styles.header}>Contact Us</Text>
                <View style={styles.content}>
                <Text onPress={()=>{Linking.openURL('tel:683082785');}} style={styles.call}>
                    Call us:  <MaterialCommunityIcons name="phone" color='black' size={20}/> (+237) 683082785
                    </Text>
                    <Text style={styles.mail} onPress={() => Linking.openURL('mailto:kinnsleynsah@gmail.com?subject=LaLL Usage FeedBack / Contact') }> 
                    Mail us: <MaterialCommunityIcons name="mail" color='black' size={20}/> kinnsleynsah@gmail.com
                    </Text>
                    </View>
                    <View style={styles.feedback}>
                    <Text style={styles.header2}>FeedBack</Text>
                    <TextInput style={styles.input} placeholder="Enter your feedback....."></TextInput>
                    <Pressable style={styles.btn} onPress={() => {console.warn("Submit pressed!")}}><Text style={styles.btnText}>SUBMIT</Text></Pressable>
                    </View>

        </View>
        </ScrollView>
    )
}
