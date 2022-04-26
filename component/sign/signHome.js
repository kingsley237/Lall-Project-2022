import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import learn from './learn/learn';
import en_to_oku from './learn/en_to_oku';
import exercises from './exercises/exercises';
import contact from './contact/contact';
import profile from './profile/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function stackedTabLearn(){
  return(
  
  <NavigationContainer independent={true}>
    
  <Stack.Navigator initialRouteName="learn">
  <Stack.Screen name="learn" component={learn} options={{ headerShown: false }}/>
  <Stack.Screen name="en_to_oku" component={en_to_oku} options={{ headerShown: false }}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

function signHome() {
    return (
    <Tab.Navigator 
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
      component={exercises}
      options={{
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
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message-plus-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-box-outline" color={color} size={25} />
        ),
      }}
    />
    </Tab.Navigator>
    );
}

export default signHome;
