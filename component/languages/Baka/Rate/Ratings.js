import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid} from 'react-native'
import {Avatar, Button} from 'react-native-paper'
import database, {firebase}from '@react-native-firebase/database';

function Ratings() {
    const [defaultRating, setDefaultRating] = useState(1)
    const [send, setSend] = useState("Send rating")
    const [icon, setIcon] = useState("")
    const [loading, setLoading] = useState(false)
    const [ratings, setRatings] = useState([1,2,3,4,5])

    const emoji = ["😞"]
    const emoji2 = ["😓"]
    const emoji3 = ["🙂"]
    const emoji4 = ["😄"]
    const emoji5 = ["😁"]

    function SendRatings(){
        var id= firebase.auth().currentUser.uid; 
            var ref = '/users/UID: '+id;                                              
            database()
                .ref(ref+'/User Rating')
                .set({
                    Rating: defaultRating,
                })
                .then(() =>{
                    setLoading(false);
                    setSend("SUBMITTED");
                    setIcon("check-circle");
                    ToastAndroid.show('Thanks for the usage feedback.', 4000)
                }
                )
                .catch((e)=>{
                    console.log(e);
                    setLoading(false);
                    setSend("ERROR");
                    setIcon("alert-circle");

                })
    }

    const starNoFill = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
    const starFill = 'https://www.pngkit.com/png/full/938-9388975_glowing-star-with-transparent-background-gold-star-with.png'

    const CustomRatingBar =() =>{
        return(
            <View style={styles.ratingBar}>
                {
                    ratings.map((item, key) => {
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}
                            style={{bottom: 150}}
                            >
                                <Image 
                                style={styles.image}
                                source={item <= defaultRating
                                ? {uri: starFill}
                                : {uri: starNoFill}
                                }
                                />
                            </TouchableOpacity>
                        );
                            })
                            }
                
            </View>
        );
    }

    const Emoji = ()=>{
        return(
            <View style={styles.emojiView}>
           <Avatar.Text style={{backgroundColor: '#FFFFFF'}} size={40} label={emoji} />
           <Avatar.Text style={{backgroundColor: '#FFFFFF'}} size={40} label={emoji2} />
           <Avatar.Text style={{backgroundColor: '#FFFFFF'}} size={40} label={emoji3} />
           <Avatar.Text style={{backgroundColor: '#FFFFFF'}} size={40} label={emoji4} />
           <Avatar.Text style={{backgroundColor: '#FFFFFF'}} size={40} label={emoji5} />
            </View>
        );
    }
    return (
        <View style={{height: 1000, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
             <Text style={styles.title}>RATE US</Text>
             <Text style={styles.text}>Based on your usage experience,{"\n"}Please rate us below.</Text>
             <CustomRatingBar />
             <Emoji />
             <Text style={styles.number}>{defaultRating + "/" + ratings.length}</Text>
             <Button style={styles.btn} mode="contained" icon={icon} loading={loading} color="#000" onPress={()=> {
                 setLoading(true);
                 setSend("Sending...")
                 SendRatings();
             }}>{send}</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    btn:{
        width: 200, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingBar:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    buttontext2:{
        fontFamily: 'Poppins-Light',
        color: 'black',        
    },
    image:{
        width: 40,
        height: 40,
        resizeMode: 'cover',
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
    text:{
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        bottom: 200
    },
    emojiView:{
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 120,
    },
    number:{
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        bottom: 80
    },
})

export default Ratings;
