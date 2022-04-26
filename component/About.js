import React from 'react'
import {View, Text, ScrollView, ImageBackground, Dimensions, StyleSheet, Linking} from 'react-native'
import {Surface, Button, Avatar, Card, Badge, Paragraph} from 'react-native-paper'

function About({navigation}) {
    const LeftContent = props => <Avatar.Icon {...props} icon="information-outline" />
    const image1 = "https://www.myskinmychoice.com/image/sofa1.jpg"
    const image2 = "https://s.tmimgcdn.com/scr/1200x750/105200/student-reading-flat-illustration-vector-image_105271-original.jpg"
    const image3 = "https://img.freepik.com/free-vector/young-man-sitting-armchair-reading-book_74855-6151.jpg?size=626&ext=jpg"
    const image4 = "https://cdn.dribbble.com/users/3942177/screenshots/10076498/book-reading_4x.jpg"

    const [slide, setSlide] = React.useState(image1)
    const [img1, setImg1] = React.useState(true)
    const [img2, setImg2] = React.useState(false)
    const [img3, setImg3] = React.useState(false)
    const [img4, setImg4] = React.useState(false)
       
        const timeout = setTimeout(() => {
            if (slide === image1) {
                setSlide(image2)
                setImg1(false)
                setImg2(true)
            }else if (slide === image2){
                setSlide(image3)
                setImg2(false)
                setImg3(true)
            } else if (slide === image3){
                setSlide(image4)
                setImg3(false)
                setImg4(true)
            }else if (slide === image4){
                setSlide(image1)
                setImg1(true)
                setImg4(false)
            }
        }, 5000)


    return (
        <ScrollView contentContainerStyle={{backgroundColor: 'white', height: 3500}}>
                <ImageBackground source = {{uri: slide}} style={{width: Dimensions.get('window').width, height: 300, position: "absolute"}}>
                    <Text style={styles.head}>Why us?</Text>
                    
                <View style={styles.badge}>
                            <Badge visible={img1} style={{color: "white", backgroundColor: "black"}}></Badge>
                            <Badge visible={img2} style={{color: "white", backgroundColor: "black"}}></Badge>
                            <Badge visible={img3} style={{color: "white", backgroundColor: "black"}}></Badge>
                            <Badge visible={img4} style={{color: "white", backgroundColor: "black"}}></Badge>
                    </View>
                </ImageBackground>
                <View style={styles.bar}>
                    <Button icon="triangle" style={styles.icon} color="brown"/>
                </View>
                <View style={styles.about}>
                        <Text style={styles.descHead}>Who are we?</Text>
                        <Surface style={styles.surface}>
                            <Text style={{fontFamily: 'Poppins-Light', color: "black"}}>This platform is brought to you in order to bring you closer the languages you have long desired to learn.</Text>
                        </Surface>
                </View>
                <View style={{top: 180}}>
                        <View style={styles.bar2}>
                            <Button icon="triangle" style={styles.icon} color="green"/>
                        </View>
                        <View style={styles.about}>
                                <Text style={styles.descHead2}>Our services</Text>
                                <Surface style={styles.surface}>
                                    <Text style={{fontFamily: 'Poppins-Light', }}>The languages provided by our platform are listed below;</Text>
                                </Surface>
                        </View>
                </View>

                <View style={styles.cards}>
                <Card style={{width: 350}}>
                    <Card.Title title="Bulu" subtitle="Center Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Bulu is a Bantu language of the Bulu people of Cameroon</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://en.wikipedia.org/wiki/Bulu_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Ewondo" subtitle="Center Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Ewondo or Kolo is the language of the Ewondo people (more precisely Beti be Kolo or simply Kolo-Beti) of Cameroon.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://dbpedia.org/page/Ewondo_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Doyayo" subtitle="North Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Doyayo, which is spoken by 15,000 people, belongs to the Duru group of the Adamawa-Eastern language family in the North Cameroon and Northwest Cameroon regions.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://www.sil.org/resources/publications/entry/8514')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Lamnso" subtitle="North-West Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Nso (Lamnso, Lamnsɔ') is the Grassfields language of the Nso people of western Cameroon. A few may remain in Nigeria.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://en.wikipedia.org/wiki/Nso_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Awing" subtitle="North-West Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Awing, or Mbwe'wi, is a Grassfields Bantu language spoken in Cameroon.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://dbpedia.org/page/Awing_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Korop" subtitle="South-West Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>The Dorop language, Korop also known as Ododop or Erorop, is an Upper Cross River language of Nigeria.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://en.wikipedia.org/wiki/Dorop_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Duala" subtitle="Littoral Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Duala, which is known as Douala in French, is a Bantu language spoken in Cameroon by about 87,700 people.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://omniglot.com/writing/duala.php')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Banjun" subtitle="East Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Ghɔmálá’, or Bamileke-Banjun (Bamiléké-Bandjoun), is a major Grassfields Bantu language of Cameroon. It is spoken by an estimated 1.1 million people in two main population groups.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://dbpedia.org/page/Ghomala%27_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Gbaya" subtitle="Extreme North Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>Gbaya, also spelled Baya or Gbeya, a people of southwestern Central African Republic, east-central Cameroon, northern Congo (Brazzaville), and northwestern Congo (Kinshasa).</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://www.britannica.com/topic/Gbaya')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>

            <Card style={{width: 350, marginTop: 50}}>
                    <Card.Title title="Baka" subtitle="South Region" left={LeftContent} />
                        <Card.Content>
                        <Paragraph>aka (also called Be-bayaga, Be-bayaka, and Bibaya de L’est) is a dialect cluster of Ubangian languages spoken by the Baka Pygmies of Cameroon and Gabon.</Paragraph>
                        </Card.Content>
                        <Card.Actions>                            
                            <Button onPress={ ()=>{ Linking.openURL('https://dbpedia.org/page/Baka_language')}}>To Reference</Button>
                            <Button onPress={ ()=> navigation.navigate('Signup')}>Sign Up</Button>
                        </Card.Actions>
                    <Card.Actions>
                </Card.Actions>
            </Card>
            </View>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    head:{
        color: "white",
        textAlign: "center",
        backgroundColor: "black",
        fontSize: 25,
        width: 150,
        fontFamily: "Poppins-Medium",
        left: 209
    },
    badge:{
        width: 130,
        left: 120,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        top: 237,
    },
     surface: {
        padding: 8,
        height: 80,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        right: 9, 
        top: 20,
      },
      bar:{
          top: 300,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'brown',
          width: Dimensions.get('window').width, 
          height: 30
      },
      bar2:{
        top: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: Dimensions.get('window').width, 
        height: 30
    },
      icon:{
        top: 25,
        transform: [{ rotate: "60deg" }]
      },
      about:{
          top: 350,
          justifyContent: 'space-between',
          alignItems: 'center'
      },
     descHead:{
         fontSize: 25,
         fontFamily: 'Poppins-Light',
         right: 90,
         color: "brown"
     },
     descHead2:{
        fontSize: 25,
        fontFamily: 'Poppins-Light',
        right: 90,
        color: "green"
    },
    cards:{
        top: 600,
        alignItems: 'center',
        justifyContent: 'center'
    },
})