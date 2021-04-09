import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CityListScreen from '../screens/CityListScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="CityList" component={CityListScreen} options={{headerShown: false}}/>  
    <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}}/>    
  </Stack.Navigator>
);

export default MainStackNavigator;
