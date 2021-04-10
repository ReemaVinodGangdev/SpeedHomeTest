/**
 *  Redux saga class init
 */
 import { all } from 'redux-saga/effects';

  import getCityListSaga from './getCityListSaga';
  import getCurrentTempReducer from './getCurrentTempSaga';
 
 export default function* watch() {
   yield all([
     getCityListSaga(),
     getCurrentTempReducer()
   ]);
 }
 