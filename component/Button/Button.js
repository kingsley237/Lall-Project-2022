import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';

const StyledButton = (props) => {
    const {type, content, onPress} = props;

    const backColor = type === 'color' ? '#171A20CC' : '#000';
    const TextColor = type === 'color' ? '#FFFFFF' : '#fff';
    return(
        <View style={styles.container}>
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: backColor}]}
        onPress={() => 
            onPress()}
        >
        <Text style={[styles.text, {color: TextColor}]}>{content}</Text>
        </TouchableOpacity>

        </View>
    );
};

export default StyledButton;