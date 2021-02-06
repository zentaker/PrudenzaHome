import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View, Text, SafeAreaView,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

import Navigator from './src/navigation/Navigator';


const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <>
    
  

    <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Navigator} />
        
      </Drawer.Navigator>
      </NavigationContainer>
      
      </>
  );
}

