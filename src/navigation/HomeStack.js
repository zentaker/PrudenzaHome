import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Asesor from '../screens/Asesor';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Asesor" component={Asesor} options={{title: "Prudenza"}} />
      
    </Stack.Navigator>
  );
}
