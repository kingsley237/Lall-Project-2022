import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    content:{
        position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    left: 0,
    width: 500,
    top: 30,
    paddingBottom: 20,
    },
    name:{
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    },
    uid:{
    fontFamily: 'Poppins-Light',
    color: "grey",
    fontSize: 12,
    },
    text:{
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    },
    btnContent:{
        width: 300,
    flexDirection: 'row',
    padding: 13,
    borderWidth: 1,
    marginBottom: 30,
    },
    phone:{
        position: 'absolute',        
        width: 300,
    flexDirection: 'row',
    padding: 13,
    borderWidth: 1,
    top: 285
    },
    btn:{
        top: 370,
        left: 180,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 50,
    },
    button:{
        marginTop: 20
    },
    btn2:{
        top: 370,
        left: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 50,
    },
    btnText:{
        fontFamily: 'Poppins-Bold',
        color: 'white',
    },
    modalView:{
        position: 'absolute',
        height: 460,
        width: 365,
        right: -16,
        bottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    modalView2:{
        position: 'absolute',
        height: 700,
        width: 365,
        right: -16,
        bottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    txtbtnText:{
        fontFamily: 'Poppins-Bold',
        bottom: 80,
        fontSize: 20, 
        right: 68,
    },
    txtbtnText2:{
        fontFamily: 'Poppins-Bold',
        bottom: 80,
        fontSize: 35, 
        right: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 2,
        width: 300
    },
    txtdesc:{
        fontFamily: 'Poppins-Light',
        bottom: 70,
        fontSize: 12, 
        right: 1,
    },
    txtdesc2:{
        fontFamily: 'Poppins-Light',
        bottom: 80,
        fontSize: 12, 
        right: 20,
    },
    txtinput:{
        bottom: 50,
        width: 300,
        borderWidth: 0.5,
        borderRadius: 3,
        borderColor: 'black',
    },
    touchbtn:{
        backgroundColor: 'black',
        width: 120,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    hide:{
        top: 70,
        backgroundColor: 'black',
        width: 100,
        height: 40,
        left: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    hide2:{
        top: 150,
        backgroundColor: 'black',
        width: 100,
        height: 40,
        left: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    txt:{
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
    bold:{
        fontWeight: 'bold',
        color: 'orange',
      },
      copyright:{
          fontFamily: 'Poppins-Medium',
          color: 'black', 
          top: 170,
          fontSize: 15,
      },
      notification:{
          position: 'absolute',
          left: 240,
          top: 14, 
          backgroundColor: 'red',
          color: 'red',
          borderRadius: 20,
          width: 20,
      },
      feed:{
          marginTop: 50,
          right: 1, 
      }, 
      pic:{
          position: 'absolute',
          fontFamily: 'Poppins-Light',
          fontSize: 12,
          top: 92,
          left: 35
      }
});

export default styles;