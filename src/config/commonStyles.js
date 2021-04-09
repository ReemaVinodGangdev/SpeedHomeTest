import { Platform } from "react-native";

import AppStyles from "./AppStyles";
import Helpers from "./Helpers";
const colors = AppStyles.color
export default {
  colors,
  text: {
    color: colors.COLOR_BLACK,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textInput: {
    color: colors.COLOR_BLACK,
    fontSize: 14,
    width: "100%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: Platform.OS == "ios" ? Helpers.getDynamicSize(10) : Helpers.getDynamicSize(10)
  },
  errorInput: {
    color: colors.COLOR_RED,
    fontSize: 12,
    position: "absolute",
    right: 0,
  },
  inputLabel: {
   // color: colors.dominate,
   color:'rgba(0,0,0,0.5)',
    fontSize: 12,
    
  },
  normalText: {
    fontFamily: Platform.OS=="ios"?'Times New Roman':'Roboto',
    color: '#000000',
    fontSize: Helpers.getDynamicSize(14)
  },
  boldText: {
    fontFamily: Platform.OS=="ios"?'Times New Roman':'Roboto',
    color: '#000000',
    fontSize: Helpers.getDynamicSize(14),
    // fontWeight: "bold",
  },
  mediumText: {
    fontFamily: Platform.OS=="ios"?'Times New Roman':'Roboto',
  }
};
