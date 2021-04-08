import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as getCityListActions from '../actions/getCityListActions';
import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../types';
import apiconstants from '../../config/ApiConstants';

async function getCityList(radius,lat,lon,cnt) {
  

  return axios.get(apiconstants.BASE_URL + 'data/'+radius+'/find?lat='+lat+'&lon='+lon+'&cnt='+cnt+'&appid='+apiconstants.API_KEY,{ validateStatus: false })
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
function* getCityListAsync(action) {
  try {
    yield put(getCityListActions.enableLoader());

    const response = yield call(getCityList,action.radius,action.lat,action.lon,action.cnt);
console.log(response)
    if (response.status == 200) {

      yield put(getCityListActions.onGetCityListResponse(response.data.list));
      yield put(getCityListActions.disableLoader());
      return;
    } else if (response.status == 404) {

      yield put(getCityListActions.getCityListFailed(response.message));
      yield put(getCityListActions.disableLoader());
    } else {

      yield put(getCityListActions.getCityListFailed(response.error));
      yield put(getCityListActions.disableLoader());
    }

  } catch (error) {
    yield put(getCityListActions.disableLoader());
    yield put(getCityListActions.getCityListFailed(error.message));
  }
}

export default function* getCityListSaga() {
  yield takeEvery(types.GET_CITY_REQUEST, getCityListAsync);
}
