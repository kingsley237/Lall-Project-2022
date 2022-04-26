import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import learn from './learn/learn';
import ToNso from './learn/ToDoyayo';
import Punctuation from './learn/Negation';
import PunctuationEx from './exercises/Punctuation';
import Nouns from './learn/Suffixes';
import NounsExercise from './exercises/Nouns';
import Verbs from './learn/Verbs';
import VerbsEx from './exercises/Verbs';
import exercises from './exercises/exercises';
import Alphabet from './exercises/Alphabet';
import Salutation from './learn/Tenses';
import SalutationEx from './exercises/Salutation';
import contact from './contact/contact';
import profile from './profile/profile';
import loading from '../../loading'
import loading2 from '../../loading2'
import about from './about/about'
import database, {firebase}from '@react-native-firebase/database';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ratings from './Rate/Ratings'
import chat from './chat/chat'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function stackedTabLearn(){
  return(
  
  <NavigationContainer independent={true}>
    
  <Stack.Navigator initialRouteName="learn">
  <Stack.Screen name="learn" component={learn} options={{ headerShown: false }}/>
  <Stack.Screen name="ToNso" component={ToNso} options={{ headerShown: false }}/>
  <Stack.Screen name="punctuation" component={Punctuation} options={{ headerShown: false }}/>
  <Stack.Screen name="nouns" component={Nouns} options={{ headerShown: false }}/>
  <Stack.Screen name="Verbs" component={Verbs} options={{ headerShown: false }}/>
  <Stack.Screen name="Salutation" component={Salutation} options={{ headerShown: false }}/>
  <Stack.Screen name="loading" component={loading} options={{ headerShown: false }}/>
  <Stack.Screen name="loading2" component={loading2} options={{ headerShown: false }}/>
  <Stack.Screen name="about" component={about} options={{ title: '',  headerStyle: {backgroundColor: '#fff'}, headerTintColor: '#000',}}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}




function stackedTabExercise(){
  return(
  
  <NavigationContainer independent={true}>
    
  <Stack.Navigator initialRouteName="exercises">
  <Stack.Screen name="exercises" component={exercises} options={{ headerShown: false }}/>
  <Stack.Screen name="alphabet" component={Alphabet} options={{ headerShown: false }}/>
  <Stack.Screen name="nounsEx" component={NounsExercise} options={{ headerShown: false }}/>
  <Stack.Screen name="verbEx" component={VerbsEx} options={{ headerShown: false }}/>
  <Stack.Screen name="punctuationEx" component={PunctuationEx} options={{ headerShown: false }}/>
  <Stack.Screen name="salutationEx" component={SalutationEx} options={{ headerShown: false }}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

function DoyayoTab() {
  var id= firebase.auth().currentUser.uid; 
  var ref='/users/UID: '+id;         
  database()
    .ref(ref+'/Feedback')
    .child('response')
    .on('value', snapshot => {
        if(snapshot.val()){
          setNotification("1")
    } else{
      setNotification(false)
    }
  });

  database()
  .ref('/Chat/Lamnso/teacher')
  .child('status')
  .on('value', snapshot => {
    
    if(snapshot.val() === "active"){
    setActive("active")
} else{
setActive(false)
}
});

  const [notification, setNotification] = React.useState(false)  
  const [active, setActive] = React.useState(false)  
  
  

    return (
    <Tab.Navigator 
    backBehavior="initialRoute"
    initialRouteName="Learn"
    activeColor="rgb(255,255,213)"
    barStyle={{ backgroundColor: '#000', paddingBottom: 0.1 }}>
        <Tab.Screen
        name="learn"
        component={stackedTabLearn}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
      name="Exercise"
      component={stackedTabExercise}
      options={{
        tabBarColor: 'blue',
        tabBarLabel: 'Exercise',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="pencil-plus-outline" color={color} size={25} />
        ),
      }}
      
    />
    <Tab.Screen
      name="Contact"
      component={contact}
      options={{
        tabBarColor: 'green',
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message-alert-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Rate Us"
      component={Ratings}
      options={{
        tabBarColor: 'gray',
        tabBarLabel: 'Rate Us',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="star" color={color} size={25} />
        ),
      }}
    />
        
<Tab.Screen
      name="Chat"
      component={chat}
      options={{
        tabBarColor: 'purple',
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="video-outline" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={profile}
      options={{
        tabBarBadge: active,
        tabBarBadge: notification,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-box-outline" color={color} size={25} />
        ),
      }}
    />
    </Tab.Navigator>
    );
}

export default DoyayoTab;
