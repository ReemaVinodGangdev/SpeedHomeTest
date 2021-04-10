/**
 * Get Contact reducer
 */
 import createReducer from '../createReducer';
 import * as types from '../types';
 
 const initialState = {
   weatherData: {},
   isGetTempLoading:false,
 };
 
 export const getCurrentTempReducer = createReducer(initialState, {
   [types.GET_CURRENT_TEMP_REQUEST](state, action) {
     return {
       ...state,
       radius:action.radius,
       lon:action.lon,
       lat:action.lat,
     };
   },
   [types.GET_CURRENT_TEMP_RESPONSE](state, action) {
  
     return {
       ...state,
       weatherData: action.response
     };
   },
   [types.GET_CURRENT_TEMP_FAILED](state, action) {
     return {
       ...state
     };
   },
   [types.GET_CURRENT_TEMP_ENABLE_LOADER](state, action) {
    return {
      ...state,
      isGetTempLoading:true
    };
  },
  [types.GET_CURRENT_TEMP_ENABLE_LOADER](state, action) {
    return {
      ...state,
      isGetTempLoading:false
    };
  }
 });
 