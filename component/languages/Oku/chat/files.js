import React, { Component } from 'react';
import database from '@react-native-firebase/database';

export default function Files(){
const [id, setId] = React.useState('');
const [token, setToken] = React.useState('');

database()
.ref('/Chat/Lamnso/learner/appId')
.once('value')
.then(snapshot => {
     setId(snapshot.val());
     id = snapshot.val();
});


database()
.ref('/Chat/Lamnso/learner/token')
.once('value')
.then(snapshot => {
     setToken(snapshot.val());
     token = snapshot.val();
});
}
