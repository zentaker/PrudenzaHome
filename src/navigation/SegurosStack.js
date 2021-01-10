import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Seguros from '../screens/Seguros';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Seguros}
        options={{title: 'Prudenza'}}
      />
    </Stack.Navigator>
  );
}
