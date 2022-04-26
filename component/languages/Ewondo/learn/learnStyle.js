import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
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
    fontFamily: 'Poppins-Bold',
    letterSpacing: 5,
    position: 'absolute',
    top: 80,
    },
    option1:{
    flexDirection: 'row',
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    paddingLeft: 20,
    marginBottom: 30,
    },
    button1:{
        justifyContent: 'center',
        marginRight: 10,
        alignItems: 'center',
        width: 122,
    marginBottom: 25,
    },
    button2:{
        marginStart: 30,
        alignItems: 'center',
        padding: 10,
        width: 122,
    borderRadius: 1,
    backgroundColor: 'blue',
    },
    buttontext:{
        fontFamily: 'Poppins-Light',
        color: 'white',    
        fontSize: 13    
    },
    content:{
    position: 'absolute',
    top: 210,
    },
    text1:{
        alignItems: 'center',
        padding: 10,
        width: 130,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,    
    },
    back:{
    backgroundColor: '#fff',
    },ref:{
        position: 'absolute',
        backgroundColor: 'white', 
        width: 300,
        top: -45,
        left: 210,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
        width: 122,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 25,
    },
    buttontext2:{
        fontFamily: 'Poppins-Light',
        color: 'black',        
    }
});
export default styles;