import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, SafeAreaView, TouchableWithoutFeedback,ScrollView,StyleSheet,FlatList, Platform, TouchableHighlight } from 'react-native'
import * as getCityListActions from '../redux/actions/getCityListActions'
import Spinner from '../components/Spinner'
import Screen from '../components/Screen'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import config from '../config/AppStyles'
import Helpers from '../config/Helpers'
import commonStyles from '../config/commonStyles'


export default function CityListScreen({navigation}) {
    const dispatch = useDispatch();
    const {
        getCityListReducer: { isCityListLoading, cityList },
    } = useSelector(state => state);
    useEffect(() => {
          dispatch(getCityListActions.requestGetCityList(2.5,23.68,90.35,50));
      },[]);
      useEffect(()=>{
        console.log(cityList)
      },[cityList])
      
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
