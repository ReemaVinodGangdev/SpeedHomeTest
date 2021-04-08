import React, {useRef} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import config from '../config/AppStyles';
import MainStackNavigator from './MainStackNavigator';


function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={config.color.COLOR_PRIMARY} />
      <MainStackNavigator /> 
    </NavigationContainer>
  );
}

export default App;
