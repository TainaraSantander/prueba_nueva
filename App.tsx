import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Componente01 from './Componente02';
import Props02 from './Props03';
import Axios03 from './Axios03';
import AsyncStorage04 from './AsyncStorage05';
import Componente02 from './Componente02';
import Props03 from './Props03';
import AsyncStorage05 from './AsyncStorage05';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Componente02">
        <Stack.Screen name="Componente02" component={Componente02} />
        <Stack.Screen name="Props03" component={Props03} />
        <Stack.Screen name="Axios03" component={Axios03} />
        <Stack.Screen name="AsyncStorage05" component={AsyncStorage05} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;