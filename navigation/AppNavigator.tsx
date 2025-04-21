import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import PlayerDetails from '../screens/PlayerDetails';
import MediaPlayer from '../screens/MediaPlayer';
import { RootStackParamList } from '../types/types'; // Importa el tipo de rutas

// Crear el tipo de Stack Navigator con los parámetros de la ruta
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
      <Stack.Screen name="MediaPlayer" component={MediaPlayer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
