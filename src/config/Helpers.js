
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions, Image, ToastAndroid, Platform } from 'react-native';

const fontScale = Dimensions.get('window').fontScale;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Helpers = {

    saveInPref: async function (key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log("Error storing " + key, error);
        }

    },

    removeFromPref: async function (key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log("Error removing " + key, error);
        }
  
    },

    getFromPref: async function (key, defaultValue) {
        var value = defaultValue;
        try {
            value = await AsyncStorage.getItem(key);
        } catch (error) {
            value = defaultValue;
            console.log("Error getting " + key, error);
        }
        //Logger.log("GetValue " + key + " " + value);
        return value;
    },

    isLandScapeModeSize(size) {
        if (fontScale > 1) {
            return ((windowWidth * size) / 375) / 1;
        } else {
            return ((windowWidth * size) / 375) / fontScale;
        }

    },
    getDynamicSize(size) {
        if (windowHeight > windowWidth) {

            if (fontScale > 1) {
                return ((windowWidth * size) / 375) / 1;
            } else {
                return ((windowWidth * size) / 375) / fontScale;
            }

        } else {
            return ((windowHeight * size) / 667) / fontScale;   // For Returning in px
        }
    },
  

}
export default Helpers;