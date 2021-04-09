import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from "react-native-maps";
import Screen from '../components/Screen'
import Header from '../components/Header'
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
          <MapView
          provider={PROVIDER_GOOGLE}
            style={{ height: "100%", width: "100%" }}
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
        ) : (
          <ActivityIndicator />
        )}
        </Screen>
    )
}
