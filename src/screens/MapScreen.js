import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet,Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker, Callout } from "react-native-maps";
import Screen from '../components/Screen'
import Header from '../components/Header'
import Helpers from '../config/Helpers';
import commonStyles from '../config/commonStyles';
export default function MapScreen({navigation,route}) {
    const [isGetLocation, setIsGetLocation] = useState(false);
    const [region, setRegionChange] = useState(false);
    const [value, setPlacesValue] = useState("");
    const [latitude, setLatitude] = useState(23.022218);
    const [longitude, setLongitude] = useState(72.550626);
    const item = route.params.data
    useEffect(()=>{
       
        let latitude = item.coord.lat
        let longitude= item.coord.lon
        console.log(latitude)
        let region = {          
            latitude: latitude,          
            longitude: longitude,          
            
            latitudeDelta: 0.0922,          
            longitudeDelta: 0.0421        }
            setRegionChange(region)
    },[item])
   
    return (
        <Screen>
        <Header title ="WeatherApp" ShowBackIcon navigation={navigation}/>
        {region ? (
            <>
          <MapView
          provider={PROVIDER_GOOGLE}
            style={{ height: "100%", width: "100%",flex:1 }}
            initialRegion={region}
            region={region}
            showsUserLocation
          >
           <Marker
                        coordinate={{
                          latitude: region.latitude,
                          longitude: region.longitude,
                        }}
                      >

                      </Marker>
                      
          </MapView>
          <View style={styles.buttonCallout}>
          <View style={{flex:1}}>
                <Text style={[commonStyles.boldText,styles.city]}>{item.name}</Text>
                <Text style={[commonStyles.normalText,styles.text]}>{item.weather[0].description}</Text>
                <Text style={[commonStyles.normalText,styles.text]}>{"Humidity: "+item.main.humidity}</Text>
                <Text style={[commonStyles.normalText,styles.text]}>{"Wind Speed: "+item.wind.speed}</Text>    
                <Text style={[commonStyles.normalText,styles.text]}>{"Max. Temp.: "+item.main.temp_max+" °c"}</Text>  
                <Text style={[commonStyles.normalText,styles.text]}>{"Min. Temp.: "+item.main.temp_min+" °c"}</Text> 
            </View> 
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Text style={[commonStyles.normalText,styles.temp]}>{item.main.temp+" °c"}</Text> 
            <Image 
                source={require('../assets/assets_cloud.png')}
                style={styles.cloud}
                resizeMode="contain"
            />
            </View>
          </View>
          </>
        ) : (
          <ActivityIndicator />
        )}
        </Screen>
    )
}
const styles = StyleSheet.create({
    buttonCallout: {
        flex:1,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        width:'100%',
        padding:Helpers.getDynamicSize(10),
      },
      city:{
          fontSize:Helpers.getDynamicSize(16),
          fontWeight:'bold',
          marginVertical:Helpers.getDynamicSize(5)
      },
      text:{
        marginVertical:Helpers.getDynamicSize(5)
      },
      temp:{
        fontSize:Helpers.getDynamicSize(20),
        fontWeight:'bold',
        marginVertical:Helpers.getDynamicSize(5)
      },
      cloud:{
          height:Helpers.getDynamicSize(50),
          width:Helpers.getDynamicSize(50),
      }
})
