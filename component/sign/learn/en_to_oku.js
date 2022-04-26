import React, {Component}from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import data from '../../learnLanguage/nsoAlpha.json'

const { width, height } = Dimensions.get('window');

class en_to_oku extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          size: { width, height },
        };
      }
    
      _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
      }
      render(){
    
    return (
        <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
            <View style={[{ backgroundColor: '#BADA55', 
            alignItems: 'center',
            justifyContent: 'center'}, this.state.size]}>
                <Text>
                    {data.greetings.en}
                </Text>
                </View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>{data.greetings.ok}</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
      </View>
    );
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
    backgroundColor: 'black',
    },
    text:{
        color: 'white'
    }
})

export default en_to_oku;
