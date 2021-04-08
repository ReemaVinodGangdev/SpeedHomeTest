import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, SafeAreaView, TouchableWithoutFeedback,ScrollView,StyleSheet,FlatList, Platform, TouchableHighlight } from 'react-native'
import * as getCityListActions from '../redux/actions/getCityListActions'
import Spinner from '../components/Spinner'
import { useDispatch, useSelector } from 'react-redux';
import config from '../config/AppStyles'

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
        <SafeAreaView style={{ flex: 1, backgroundColor: config.color.COLOR_WHITE }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
             <Spinner key={Math.random()}  visible={isCityListLoading}/>
           
            {
                cityList && cityList.length>0 &&
            
            <FlatList
  ItemSeparatorComponent={
    Platform.OS !== 'android' &&
    (({ highlighted }) => (
      <View
        style={[
          {borderBottomColor:'black',borderWidth:0.4},
          highlighted && { marginLeft: 0 }
        ]}
      />
    ))
  }
  data={cityList}
  renderItem={({ item, index, separators }) => (
    <TouchableHighlight
      key={item.key}
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{ backgroundColor: 'white' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  )}
  style={{flex:1}}
/>
            }
        </View>
 
        </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
