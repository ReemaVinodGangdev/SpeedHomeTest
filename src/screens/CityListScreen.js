import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, SafeAreaView, TouchableWithoutFeedback,ScrollView,StyleSheet,FlatList, Platform, TouchableHighlight } from 'react-native'
import * as getCityListActions from '../redux/actions/getCityListActions'
import * as getCurrentTempAction from '../redux/actions/getCurrentTempAction'
import Spinner from '../components/Spinner'
import Screen from '../components/Screen'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import config from '../config/AppStyles'
import Helpers from '../config/Helpers'
import commonStyles from '../config/commonStyles'
import PushNotification from 'react-native-push-notification';
import Geolocation from "@react-native-community/geolocation";
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );

    },
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});
PushNotification.createChannel(
  {
    channelId: "channel-id", // (required)
    channelName: "My channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);


export default function CityListScreen({navigation}) {
    const dispatch = useDispatch();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const {
        getCityListReducer: { isCityListLoading, cityList },
        getCurrentTempReducer: {isGetTempLoading, weatherData}
    } = useSelector(state => state);
    useEffect(() => {
          getCurrentLangLng()
         
      },[]);
    
      useEffect(()=>{
        console.log(weatherData)
       if(weatherData && weatherData.main && weatherData.main.temp){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          message: "Current Temperature: "+weatherData.main.temp+" °c", // (required)
          title:"WeatherApp",
          date: new Date(Date.now() + 20 * 1000), // in 20 secs
          allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          channelId: "channel-id"
        });
       }
       
      },[weatherData])

      const getCurrentLangLng = () => {
        if (Platform.OS == "ios") {
          Geolocation.getCurrentPosition(
            (location) => {
       
              setLatitude(location.coords.latitude);
              setLongitude(location.coords.longitude);
              dispatch(getCityListActions.requestGetCityList(2.5,location.coords.latitude,location.coords.longitude,50));
              dispatch(getCurrentTempAction.requestGetCurrentTemperature(2.5,location.coords.latitude,location.coords.longitude));
            },
            (error) => Alert.alert("Error", JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          Geolocation.getCurrentPosition(
            (location) => {
              console.log("location"+JSON.stringify(location))
              setLatitude(location.coords.latitude);
              setLongitude(location.coords.longitude);
              dispatch(getCityListActions.requestGetCityList(2.5,location.coords.latitude,location.coords.longitude,50));
              dispatch(getCurrentTempAction.requestGetCurrentTemperature(2.5,location.coords.latitude,location.coords.longitude));
            },
            (error) => Alert.alert("Error", JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000 }
          );
        
        }
      };
      
    return (
        <Screen >
        <Header title = "WeatherApp" ShowBackIcon={false}/>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
             <Spinner key={Math.random()}  visible={isCityListLoading}/>
           
            {
                cityList && cityList.length>0 &&
            
            <FlatList
                  
                    data={cityList}
                    renderItem={({ item, index, separators }) => (
                      <TouchableHighlight
                        key={item.key}
                        onPress={() =>navigation.navigate('MapScreen',{data:item})}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={styles.divRow}>
                        <View>
                          <Text style={[commonStyles.mediumText,styles.name]}>{item.name}</Text>
                          <Text style={[commonStyles.normalText,styles.status]}>{item.weather[0].description}</Text>
                        </View>
                        <Text style={[commonStyles.normalText,styles.temp]}>{item.main.temp+" °C" }</Text>
                        </View>
                      </TouchableHighlight>
                    )}
                    style={{flex:1}}
                  />
            }
        </View>
 
        </TouchableWithoutFeedback>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    divRow:{paddingVertical:Helpers.getDynamicSize(10),flex:1, backgroundColor: 'white',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:Helpers.getDynamicSize(10) },
    name:{
      fontSize:14
    },
    status:{
      fontSize:12
    },
    temp:{
      fontSize:20
    }
})
