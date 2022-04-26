import React from 'react'
import {View, Text, StyleSheet, Dimensions,ScrollView} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Divider, DataTable} from 'react-native-paper'
import database from '@react-native-firebase/database';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const optionsPerPage = [2, 3, 4];

function about() { 
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

    const [langinfo, setLang] = React.useState("Loading tip...");
    const [long, setLong] = React.useState();
    const [lat, setLat] = React.useState();

    var ref='/Languages/Awing'; 
   var langInfo = database().ref(ref+'/About');   
 
   langInfo.child('info').on('value', snapshot => {  
         setLang(snapshot.val());
      });

      langInfo.child('latitute').on('value', snapshot => {  
        setLat(snapshot.val());
     });
     langInfo.child('longitute').on('value', snapshot => {  
      setLong(snapshot.val());
   });


    return (
        <ScrollView contentContainerStyle={{backgroundColor: 'white', height: 1550}}>
                <FastImage source={{uri: 'https://cameroon-report.com/wp-content/uploads/2018/06/awing_cmr.jpg'}} style={{height: 360, width: Dimensions.get("window").width, bottom: 150}}/>
                        <View style={{bottom: 60}}>
                        <Text style={styles.head}>Awing</Text>
                        <Divider/>
                        </View>

                        <Text style={styles.intro}>{langinfo}</Text>
                        <View style={{top: 100}}>
                        <Text style={styles.head}>Location</Text>
                        <Divider/>
                        </View>

                        <View style={styles.container}>
                            <MapView
                            provider={PROVIDER_GOOGLE} 
                            style={styles.map}
                            region={{
                                latitude: lat, 
                                longitude: long,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                              <Marker
                          coordinate={{
                          latitude:   lat, 
                          longitude:  long,
                      }}
                      />
                            </MapView>
                            <Text style={{textAlign: 'justify', left: 25, fontFamily: 'Poppins-Light', top: 30, width: Dimensions.get("window").width}}>Zoom out for a better viewing experience.</Text>
                        </View>

                        <View style={{top: 550}}>
                            <View style={{top: 100}}>
                        <Text style={styles.head}>Statistics</Text>
                        <Divider/>
                        </View>
                        <View style={{top: 130}}>
                        <DataTable>
      <DataTable.Header>
        <DataTable.Title>Type</DataTable.Title>
        <DataTable.Title >Information</DataTable.Title>
        <DataTable.Title numeric>Description</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Awing</DataTable.Cell>
        <DataTable.Cell >Language</DataTable.Cell>
        <DataTable.Cell numeric>See above.</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Native speakers</DataTable.Cell>
        <DataTable.Cell>19,000</DataTable.Cell>
        <DataTable.Cell numeric>As of 2001.</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={1}
        numberOfPages={1}
        onPageChange={page => console.log(page)}
        label="1 of 1"
      />
    </DataTable>
    </View>
    </View>

            </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    head:{
        fontFamily: "Poppins-Light",
        fontSize: 35,
        left: 10
    },
    intro:{
        textAlign: 'justify',
        width: 350,
        left: 3,
        fontFamily: "Poppins-Light"
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 700
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        top: 40
      },
})

export default about
