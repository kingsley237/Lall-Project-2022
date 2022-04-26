import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 360,
        height: 726,
        backgroundColor: 'white',
    },
    title:{
    fontSize: 25,
    width: 330,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    padding: 9,
    fontWeight: 'bold',
    letterSpacing: 5,
    position: 'absolute',
    top: 80,
    },
    option1:{
    flexDirection: 'row',
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    paddingLeft: 20,
    },
    button1:{
        marginStart: 30,
        alignItems: 'center',
        padding: 10,
        width: 130,
    borderRadius: 0,
    backgroundColor: 'black',
    },
    buttontext:{
        color: 'white',        
    },
    content:{
    position: 'absolute',
    top: 210,
    },
    text1:{
        alignItems: 'center',
        padding: 10,
        width: 130,
        fontSize: 16,    
    },
    back:{
    backgroundColor: '#fff',
    },
});
export default styles;