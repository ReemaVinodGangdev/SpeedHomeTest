import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions,Image } from "react-native";
import AppStyles from "../config/AppStyles";

import Helpers from "../config/Helpers";
import commonStyles from "../config/commonStyles";

const windowWidth = Dimensions.get('window').width;

function Header({ navigation, title, ShowBackIcon = true }) {
    console.log(title)
    return (
        <View style={styles.headerView}>
         
            {
                ShowBackIcon ? 
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require('../assets/assets_back.png')}
                        resizeMode='contain'
                        style={styles.back}
                    />
                </TouchableOpacity> : <View></View>
            }
            <View style={{ maxWidth: windowWidth ,flex:1,alignItems:'center',flex:1 }}>
                <Text style={[commonStyles.boldText, styles.textTitle,{textTransform:"capitalize"}]} numberOfLines={1}>
                    {title}</Text>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: Helpers.getDynamicSize(20),
        color: AppStyles.color.COLOR_WHITE,
    },
    headerView: {
        height: Helpers.getDynamicSize(55),
        backgroundColor: AppStyles.color.COLOR_APP_COLOR,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingRight: Helpers.getDynamicSize(15),
        paddingLeft: Helpers.getDynamicSize(5),
        borderBottomColor: AppStyles.color.COLOR_GRAY,
        borderBottomWidth: Helpers.getDynamicSize(1),
    },
    back:{
        height:Helpers.getDynamicSize(20),
        width:Helpers.getDynamicSize(20),
        tintColor:'white'
    }
});

export default Header;
