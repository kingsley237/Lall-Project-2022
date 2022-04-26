import React from 'react'
import {View, Text} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { ActivityIndicator, Colors } from 'react-native-paper';

function loading() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <ActivityIndicator animating={true} color={Colors.red800} size={30} />
                <Text style={{fontFamily: 'Poppins-Medium', marginTop: 15}}>Loading...</Text>
                
        <StatusBar style="auto"></StatusBar>
        </View>
    )
}

export default loading;
