/**
 * Get Contact reducer
 */
 import createReducer from '../createReducer';
 import * as types from '../types';
 
 const initialState = {
   cityList: [],
   isCityListLoading:false,
   radius:'',
   lat:"",
   lon:'',
   cnt:''
 };
 
 export const getCityListReducer = createReducer(initialState, {
   [types.GET_CITY_REQUEST](state, action) {
     return {
       ...state,
       radius:action.radius,
       lon:action.lon,
       lat:action.lat,
       cnt:action.cnt
     };
   },
   [types.GET_CITY_RESPONSE](state, action) {
     console.log("action"+action.response)
     return {
       ...state,
       cityList: action.response
     };
   },
   [types.GET_CITY_FAILED](state, action) {
     return {
       ...state
     };
   },
   [types.GET_CITY_ENABLE_LOADER](state, action) {
    return {
      ...state,
      isCityListLoading:true
    };
  },
  [types.GET_CITY_DISABLE_LOADER](state, action) {
    return {
      ...state,
      isCityListLoading:false
    };
  }
 });
 