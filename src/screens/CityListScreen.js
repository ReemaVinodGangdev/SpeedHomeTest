import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, SafeAreaView, TouchableWithoutFeedback,ScrollView,StyleSheet } from 'react-native'
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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: config.color.COLOR_WHITE }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
             <Spinner key={Math.random()}  visible={isCityListLoading}/>
            <Text>Hello</Text>
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
