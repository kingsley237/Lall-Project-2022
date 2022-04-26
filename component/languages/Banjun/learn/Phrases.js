import React from 'react'
import {Text, View, Dimensions, ToastAndroid} from 'react-native'
import Carousel from 'simple-carousel-react-native';
import styles from './nsoStyles';
import database, {firebase}from '@react-native-firebase/database';
import {DataTable} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Punctuation() {

  const[intro, setIntro] = React.useState("");
  const[w1, setw1] = React.useState("");
  const[w2, setw2] = React.useState("");
  const[w3, setw3] = React.useState("");
  const[w4, setw4] = React.useState("");
  const[w5, setw5] = React.useState("");
  const[w6, setw6] = React.useState("");
  const[w7, setw7] = React.useState("");
  const[w8, setw8] = React.useState("");
  const[w9, setw9] = React.useState("");
  const[w10, setw10] = React.useState("");
  const[w11, setw11] = React.useState("");
  const[w12, setw12] = React.useState("");
  const[w13, setw13] = React.useState("");
  const[w14, setw14] = React.useState("");
  const[w15, setw15] = React.useState("");
  const[w16, setw16] = React.useState("");
  const[w17, setw17] = React.useState("");
  const[w18, setw18] = React.useState("");
  const[w19, setw19] = React.useState("");
  const[w20, setw20] = React.useState("");
  const[w21, setw21] = React.useState("");
  const[w22, setw22] = React.useState("");
  const[w23, setw23] = React.useState("");
  const[w24, setw24] = React.useState("");
  const[w25, setw25] = React.useState("");
  const[w26, setw26] = React.useState("");
  const[w27, setw27] = React.useState("");
  const[w28, setw28] = React.useState("");
  const[w29, setw29] = React.useState("");
  const[w30, setw30] = React.useState("");
  const[w31, setw31] = React.useState("");
  const[w32, setw32] = React.useState("");
  const[w33, setw33] = React.useState("");
  const[w34, setw34] = React.useState("");
  const[w35, setw35] = React.useState("");
  const[w36, setw36] = React.useState("");
  const[w37, setw37] = React.useState("");
  const[w38, setw38] = React.useState("");
  const[w39, setw39] = React.useState("");
  const[w40, setw40] = React.useState("");
  const[w41, setw41] = React.useState("");
  const[w42, setw42] = React.useState("");
  const[w43, setw43] = React.useState("");

  var ref='/Languages/Banjun'; 
  var db =  database().ref(ref+'/Phrases');

     
React.useEffect(() => {
  const onChildAdd = db
  .on('child_added', snapshot => {
    ToastAndroid.show('A new Lesson has been added '+ snapshot.key?.toString().trim() + ' in pending state', 3000);
  });
  
return () => db.off('child_added', onChildAdd);
}, [])

React.useEffect(() => {
  const onChildDelete = db
  .on('child_removed', snapshot => {
    ToastAndroid.show('A lesson has been removed: '+ snapshot.key?.toString().trim(), 3000);
  });
  
return () => db.off('child_added', onChildDelete);
}, []);


  db.child('intro').on('value', snapshot => {
        setIntro(snapshot.val());
});

db.child('w24').on('value', snapshot => {
  setw24(snapshot.val());
});

db.child('w1').on('value', snapshot => {
  setw1(snapshot.val());
});

db.child('w2').on('value', snapshot => {
  setw2(snapshot.val());
});

db.child('w3').on('value', snapshot => {
  setw3(snapshot.val());
});

db.child('w4').on('value', snapshot => {
  setw4(snapshot.val());
});

db.child('w5').on('value', snapshot => {
  setw5(snapshot.val());
});

db.child('w6').on('value', snapshot => {
  setw6(snapshot.val());
});

db.child('w7').on('value', snapshot => {
  setw7(snapshot.val());
});

db.child('w8').on('value', snapshot => {
  setw8(snapshot.val());
});

db.child('w9').on('value', snapshot => {
  setw9(snapshot.val());
});

db.child('w10').on('value', snapshot => {
  setw10(snapshot.val());
});

db.child('w11').on('value', snapshot => {
  setw11(snapshot.val());
});

db.child('w12').on('value', snapshot => {
  setw12(snapshot.val());
});

db.child('w13').on('value', snapshot => {
  setw13(snapshot.val());
});

db.child('w14').on('value', snapshot => {
  setw14(snapshot.val());
});

db.child('w15').on('value', snapshot => {
  setw15(snapshot.val());
});

db.child('w16').on('value', snapshot => {
  setw16(snapshot.val());
});

db.child('w17').on('value', snapshot => {
  setw17(snapshot.val());
});

db.child('w18').on('value', snapshot => {
  setw18(snapshot.val());
});

db.child('w19').on('value', snapshot => {
  setw19(snapshot.val());
});

db.child('w20').on('value', snapshot => {
  setw20(snapshot.val());
});

db.child('w21').on('value', snapshot => {
  setw21(snapshot.val());
});

db.child('w22').on('value', snapshot => {
  setw22(snapshot.val());
});

db.child('w23').on('value', snapshot => {
  setw23(snapshot.val());
});

db.child('w25').on('value', snapshot => {
  setw25(snapshot.val());
});

db.child('w26').on('value', snapshot => {
  setw26(snapshot.val());
});

db.child('w27').on('value', snapshot => {
  setw27(snapshot.val());
});

db.child('w28').on('value', snapshot => {
  setw28(snapshot.val());
});

db.child('w29').on('value', snapshot => {
  setw29(snapshot.val());
});

db.child('w30').on('value', snapshot => {
  setw30(snapshot.val());
});

db.child('w31').on('value', snapshot => {
  setw31(snapshot.val());
});

db.child('w32').on('value', snapshot => {
  setw32(snapshot.val());
});

db.child('w33').on('value', snapshot => {
  setw33(snapshot.val());
});

db.child('w34').on('value', snapshot => {
  setw34(snapshot.val());
});

db.child('w35').on('value', snapshot => {
  setw35(snapshot.val());
});

db.child('w36').on('value', snapshot => {
  setw36(snapshot.val());
});

db.child('w37').on('value', snapshot => {
  setw37(snapshot.val());
});

db.child('w38').on('value', snapshot => {
  setw38(snapshot.val());
});

db.child('w39').on('value', snapshot => {
  setw39(snapshot.val());
});

db.child('w40').on('value', snapshot => {
  setw40(snapshot.val());
});

db.child('w41').on('value', snapshot => {
  setw41(snapshot.val());
});

db.child('w42').on('value', snapshot => {
  setw42(snapshot.val());
});

db.child('w43').on('value', snapshot => {
  setw43(snapshot.val());
});




if(intro === "" || w1 === "" || w2 === "" || w3 === "" || w4 === "" || w5 === "" || w6 === "" || w7 === ""|| w8 === "" || w9 === "" || w10 === "" || w11 === "" || w12 === "" || w13 === "" || w14 === "" || w15 === "" || w16 === "" || w17 === "" || w18 === "" || w19 === "" || w20 === "" || w21 === "" || w22 === "" || w23 === "" || w24 === "" || w25 === "" || w26 === "" || w27 === "" || w28 === "" || w29 === "" || w30 === "" || w31 === "" || w32 === "" || w33 === "" || w34 === "" || w35 === "" || w36 === "" || w37 === "" || w38 === "" || w39 === "" || w40 === "" ||w41 === "" || w42 === "" || w43 === ""){
  setIntro("Content not available");
  setw1("N/A");
  setw2("N/A");
  setw3("N/A");
  setw4("N/A");
  setw5("N/A");
  setw6("N/A");
  setw7("N/A");
  setw8("N/A");
  setw9("N/A");
  setw10("N/A");
  setw11("N/A");
  setw12("N/A");
  setw13("N/A");
  setw14("N/A");
  setw15("N/A");
  setw16("N/A");
  setw17("N/A");
  setw18("N/A");
  setw19("N/A");
  setw20("N/A");
  setw21("N/A");
  setw22("N/A");
  setw23("N/A");
  setw24("N/A");
  setw25("N/A");
  setw26("N/A");
  setw27("N/A");
  setw28("N/A");
  setw29("N/A");
  setw30("N/A");
  setw31("N/A");
  setw32("N/A");
  setw33("N/A");
  setw34("N/A");
  setw35("N/A");
  setw36("N/A");
  setw37("N/A");
  setw38("N/A");
  setw39("N/A");
  setw40("N/A");
  setw41("N/A");
  setw42("N/A");
  setw43("N/A");
}
    return (
            <Carousel
                width={Dimensions.get('window').width}
                height={715}
                showBubbles={false}>
                        <View style={styles.container}>
                                    <Text style={styles.head}>TEXTS</Text>
                                    

                            <View style={{marginTop: 120}}></View>                            
                      

                      <DataTable>

<DataTable.Header>
  <DataTable.Title>{w1}</DataTable.Title>
  <DataTable.Title numeric>{w2}</DataTable.Title>
</DataTable.Header>

<DataTable.Row>
  <DataTable.Cell>{w3}</DataTable.Cell>
  <DataTable.Cell numeric>{w4}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w5}</DataTable.Cell>
  <DataTable.Cell numeric>{w6}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w7}</DataTable.Cell>
  <DataTable.Cell numeric>{w8}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w9}</DataTable.Cell>
  <DataTable.Cell numeric>{w10}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w11}</DataTable.Cell>
  <DataTable.Cell numeric>{w12}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w13}</DataTable.Cell>
  <DataTable.Cell numeric>{w14}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w15}</DataTable.Cell>
  <DataTable.Cell numeric>{w16}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w17}</DataTable.Cell>
  <DataTable.Cell numeric>{w18}</DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
  <DataTable.Cell>{w19}</DataTable.Cell>
  <DataTable.Cell numeric>{w20}</DataTable.Cell>
</DataTable.Row>

</DataTable>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-left" color='#330000' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View>

                        <View style={styles.container}>
                                    <Text style={styles.head}>More TEXTS</Text>
                            <View style={{marginTop: 60}}></View>                            
                                                          <DataTable>

                                    <DataTable.Header>
                                      <DataTable.Title>{w21}</DataTable.Title>
                                      <DataTable.Title numeric>{w22}</DataTable.Title>
                                    </DataTable.Header>

                                    <DataTable.Row>
                                      <DataTable.Cell>{w23}</DataTable.Cell>
                                      <DataTable.Cell numeric>{w24}</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                      <DataTable.Cell>{w25}</DataTable.Cell>
                                      <DataTable.Cell numeric>{w26}</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                      <DataTable.Cell>{w27}</DataTable.Cell>
                                      <DataTable.Cell numeric>{w28}</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                      <DataTable.Cell>{w29}</DataTable.Cell>
                                      <DataTable.Cell numeric>{w30}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Pagination
                                      page={1}
                                      numberOfPages={1}
                                      onPageChange={page =>console.log(page)}
                                      label="1 of 1"
                                    />
                                    </DataTable>
                            <View style={styles.move}>
                            <MaterialCommunityIcons name="gesture-swipe-right" color='#330000' size={30} style={{marginBottom: 10, marginRight: 15,}}/> 
              </View>
                        </View>

            </Carousel>

    )
}

export default Punctuation;
