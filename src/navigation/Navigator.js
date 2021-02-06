import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

import Seguros from '../screens/Seguros';
import Optimizador from '../screens/Optimizador';
import Asesor from '../screens/Asesor';

const Tab = createMaterialTopTabNavigator();


export default function Navigator(props) {
  const { navigation } = props;
  return (

    <>

    <View>
    <Appbar.Header style={styles.color}>
    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
  
  <Appbar.Content style={styles.txt} title="Prudenza"  />
  <Appbar.Action icon="magnify" onPress={() => console.log('Pressed')} />
  
</Appbar.Header>
  </View>

      
    <Tab.Navigator>
      <Tab.Screen name="Asesor" component={Asesor} />
      <Tab.Screen name="Seguros" component={Seguros} />
      <Tab.Screen name="Optimizador" component={Optimizador} />
      </Tab.Navigator>

      </>
    
  );
}

var styles = StyleSheet.create({
  color: {
    backgroundColor: 'white',
 
  },
  txt: {
    alignContent: 'center',
    paddingHorizontal: 95,
   
  }
});
