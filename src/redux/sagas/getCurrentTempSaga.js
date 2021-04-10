import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as getCurrentTempAction from '../actions/getCurrentTempAction';
import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../types';
import apiconstants from '../../config/ApiConstants';

async function getCurrentTemp(radius,lat,lon) {
  

  return axios.get(apiconstants.BASE_URL + 'data/'+radius+'/weather?lat='+lat+'&lon='+lon+'&appid='+apiconstants.API_KEY,{ validateStatus: false })
  .then((response) => response)
  .catch((error) => {
    if (error.response) {
      return error.response.data
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  });
}

// Our worker Saga that getCityList
function* getCurrentTempAsync(action) {
  try {
    yield put(getCurrentTempAction.enableLoader());

    const response = yield call(getCurrentTemp,action.radius,action.lat,action.lon);
console.log(response)
    if (response.status == 200) {

      yield put(getCurrentTempAction.onGetCurrentTemperatureResponse(response.data));
      yield put(getCurrentTempAction.disableLoader());
      return;
    } else if (response.status == 404) {

      yield put(getCurrentTempAction.onGetCurrentTempFailed(response.message));
      yield put(getCurrentTempAction.disableLoader());
    } else {

      yield put(getCurrentTempAction.onGetCurrentTempFailed(response.error));
      yield put(getCurrentTempAction.disableLoader());
    }

  } catch (error) {
    yield put(getCurrentTempAction.disableLoader());
    yield put(getCurrentTempAction.onGetCurrentTempFailed(error.message));
  }
}

export default function* getCurrentTempSaga() {
  yield takeEvery(types.GET_CURRENT_TEMP_REQUEST, getCurrentTempAsync);
}
