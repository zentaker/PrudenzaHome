import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Optimizador from '../screens/Optimizador';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Optimizador}
        options={{title: 'Prudenza'}}
      />
    </Stack.Navigator>
  );
}
