import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as getCityListActions from '../actions/getCityListActions';
import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../types';
import apiconstants from '../../config/ApiConstants';

async function getContacts() {
  const accountId = await AsyncStorage.getItem('accountId');
  const headers = {
    'Authorization': await AsyncStorage.getItem('auth'),
    'accountId': accountId
  }
  return axios.get(apiconstants.BASE_URL + 'accounts/' + accountId + '/users/getAllUsersAndContacts', {
    headers: headers
  })
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

// Our worker Saga that getContacts
function* getCityListAsync(action) {
  try {
    yield put(getCityListActions.enableLoader());

    const response = yield call(getContacts);
    
    if (response.status == 200) {

      yield put(getCityListActions.onGetContactsResponse(response.data));
      yield put(getCityListActions.disableLoader());
      return;
    } else if (response.status == 404) {

      yield put(getCityListActions.getContactsFailed(response.message));
      yield put(getCityListActions.disableLoader());
    } else {

      yield put(getCityListActions.getContactsFailed(response.error));
      yield put(getCityListActions.disableLoader());
    }

  } catch (error) {
    yield put(getCityListActions.disableLoader());
    yield put(getCityListActions.getContactsFailed(error.message));
  }
}

export default function* getCityListSaga() {
  yield takeEvery(types.GET_CITY_RESPONSE, getCityListAsync);
}
