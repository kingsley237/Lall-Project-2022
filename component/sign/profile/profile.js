import React from 'react'
import {View, Text} from 'react-native'
import styles from './profileStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function profile() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <MaterialCommunityIcons name="account-circle" color={"black"} size={90} style={{marginLeft: 50}}/>
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                    <Text style={styles.name}>Profile name</Text>
                    <Text style={styles.uid}>User id</Text>
                </View>                
            </View>
            <View style={styles.button}>
                <View style={styles.btnContent} onClick={() => {console.warn('Hello')}}>
                    <Text style={styles.text}>Edit Name</Text>
                    <MaterialCommunityIcons name="greater-than" color={"black"} size={20} style={{marginLeft: 190}}/>
                </View>
                <View style={styles.btnContent}>
                    <Text style={styles.text}>Edit Number</Text>
                    <MaterialCommunityIcons name="greater-than" color={"black"} size={20} style={{marginLeft: 175}}/>
                </View>
                <View style={styles.btnContent}>
                    <Text style={styles.text}>Edit Email</Text>
                    <MaterialCommunityIcons name="greater-than" color={"black"} size={20} style={{marginLeft: 190}}/>
                </View>
            </View>
        </View>
    )
}

export default profile;
