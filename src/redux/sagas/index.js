/**
 *  Redux saga class init
 */
 import { all } from 'redux-saga/effects';

  import getCityListSaga from './getCityListSaga';
 
 export default function* watch() {
   yield all([
     getCityListSaga()
   ]);
 }
 