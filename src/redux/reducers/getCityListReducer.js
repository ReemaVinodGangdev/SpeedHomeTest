/**
 * Get Contact reducer
 */
 import createReducer from '../createReducer';
 import * as types from '../types';
 
 const initialState = {
   cityList: []
 };
 
 export const getCityList = createReducer(initialState, {
   [types.GET_CITY_REQUEST](state, action) {
     return {
       ...state
     };
   },
   [types.GET_CITY_RESPONSE](state, action) {
     return {
       ...state,
       cityList: action.response
     };
   },
   [types.GET_CITY_FAILED](state, action) {
     return {
       ...state
     };
   }
 });
 