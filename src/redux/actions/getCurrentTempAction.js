/*
 * Reducer actions related with get teams
 */
import * as types from '../types';

export function requestGetCurrentTemperature(radius,lat,lon) {
  return {
    type: types.GET_CURRENT_TEMP_REQUEST,
    radius,
    lat,
    lon
  };
}

export function onGetCurrentTemperatureResponse(response) {
  console.log("response"+response)
  return {
    type: types.GET_CURRENT_TEMP_RESPONSE,
    response,
  };
}

export function onGetCurrentTempFailed(response) {
  return {
    type: types.GET_CURRENT_TEMP_FAILED,
    response
  };
}

export function enableLoader() {
  return {
    type: types.GET_CURRENT_TEMP_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.GET_CURRENT_TEMP_DISABLE_LOADER,
  };
}

