import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    width: 360,
    height: 730,
    alignItems: 'center',
    justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        width: 330,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        padding: 9,
        fontWeight: 'bold',
        letterSpacing: 5,
        bottom: 260,
    },
    call:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    borderBottomColor: 'rgb(29,105,109)',
    borderBottomWidth: 1,
    paddingBottom: 6,
    marginRight: 70,
    marginBottom: 30,
    },
    mail:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        borderBottomColor: 'rgb(29,105,109)',
        borderBottomWidth: 1,
        paddingBottom: 6,
        marginRight: 20,  
    },
    content:{
        position: 'absolute',
        top: 240,
    },
    header2:{
        fontSize: 25,
        width: 330,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        padding: 9,
        fontWeight: 'bold',
        letterSpacing: 5,
    },
    feedback:{
    position: 'absolute',
    top: 420,
    },
    input:{ 
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: '#F8F8F9',
        textAlignVertical: 'top',
        fontWeight: 'bold',
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 5,
    borderColor: '#E6E5ED',
    height: 130,
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
        marginLeft: 180,
        padding: 15,
    width: 150,
    backgroundColor: 'black',
    },
    btnText:{
        fontWeight: 'bold',
    color: 'white',
    },
});

export default styles;