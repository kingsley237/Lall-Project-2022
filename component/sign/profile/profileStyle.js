import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 100,
    },
    content:{
        position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    left: 0,
    width: 500,
    top: 50,
    paddingBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    },
    name:{
    fontSize: 20,
    },
    uid:{
    color: "grey"
    },
    text:{
    fontSize: 16,
    },
    btnContent:{
        width: 300,
    flexDirection: 'row',
    padding: 11,
    borderWidth: 1,
    marginBottom: 30,
    borderColor: 'black',
    borderRadius: 20,
    },
});

export default styles;