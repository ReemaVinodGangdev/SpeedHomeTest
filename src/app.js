import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, StatusBar,View,Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import AppStyles from './config/AppStyles';
import commonStyles from './config/commonStyles';
import Helpers from './config/Helpers';

import Navigator from './navigators';
import configureStore from './redux/store';


const { persistor, store } = configureStore();

export default function Entrypoint() {
  const [splashVisible, setIsSplashVisible] = useState(true);
  useEffect(() => {
    if(Platform.OS=="android" && splashVisible==true)
   {
    setTimeout(function(){  
      setIsSplashVisible(false) 
    }, 7000); 
   }
},[splashVisible]);
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      {
        (Platform.OS=="android" && splashVisible )?
        <View style={styles.container}>
          <StatusBar backgroundColor={AppStyles.color.COLOR_APP_COLOR}/>
          <Text style={[commonStyles.boldText,styles.text]}>WeatherApp</Text>
        </View>
      :
        <Navigator />
      }
      </PersistGate>
    </Provider>
  );
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:AppStyles.color.COLOR_APP_COLOR,
    fontSize:Helpers.getDynamicSize(25),
    textAlign:'center'
  }
})