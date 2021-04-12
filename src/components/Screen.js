import React from "react";
import { StyleSheet, SafeAreaView, View,StatusBar } from "react-native";
import AppStyles from "../config/AppStyles";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor={AppStyles.color.COLOR_APP_COLOR}/>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    backgroundColor:AppStyles.color.COLOR_APP_COLOR,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;