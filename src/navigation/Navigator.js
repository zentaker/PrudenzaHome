import * as React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Asesor from '../screens/Asesor';
import Seguros from '../screens/Seguros'

function HomeScreen() {
  return (
    <Tab.Navigator>
    
      <Tab.Screen name="Asesor" component={Asesor} />
      <Tab.Screen name="Seguros" component={Seguros} />
      <Tab.Screen name="Settingsss" component={SettingsScreenn} />
  </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreenn() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Prudenza" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    
    <MyStack />
  
  );
}
