import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
    backgroundColor: '#fff',
    height: 900,
    alignItems: 'center',
    justifyContent: 'center',
    },
    title: {
        marginBottom: 110,
        bottom: 290,
      right: 10,
      width: 300,
      fontSize: 40,
      fontFamily: 'Poppins-Bold',
      borderBottomColor: 'black',
      borderBottomWidth: 1, 
      paddingBottom: 10,
    },
    row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },
    img:{
    width: 190,
    height: 100,
    left: 15,
    },
    col:{
    flexDirection: 'column',
    },
    content:{
        top: 300,
        borderColor: '#E6E5ED',
        borderWidth: 2,
    position: 'absolute',
    width: 310,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    },
    
    content2:{
        borderColor: '#E6E5ED',
        borderWidth: 2,
    position: 'absolute',
    width: 310,
    padding: 5,
    paddingTop: 15,
    bottom: 260,
    alignItems: 'center',
    justifyContent: 'center',
    },
    content3:{
        borderColor: '#E6E5ED',
        borderWidth: 2,
    position: 'absolute',
    width: 310,
    padding: 5,
    paddingTop: 15,
    top: 680,
    alignItems: 'center',
    justifyContent: 'center',
    },
    desc:{
        left: 55,
    fontSize: 15,
    color: 'grey',
    fontFamily: 'Poppins-Light',
    marginTop: 10,
    },
    desc2:{
        left: 59,
    fontSize: 15,
    color: 'grey',
    fontFamily: 'Poppins-Light',
    marginTop: 10,
    },
    desc3:{
        left: 49,
    fontSize: 15,
    color: 'grey',
    fontFamily: 'Poppins-Light',
    marginTop: 10,
    },
    drop:{
        paddingBottom: 20,
        bottom: 60,
        width: 300,
        position: 'absolute',
    },
    shift:{
        marginBottom: 40
    },
    activity:{
        bottom: 70,
        width: 350,
        height: 1000,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    load:{
        color: 'black',
        fontSize: 50,
        position: 'absolute',
    }
});

export default styles;