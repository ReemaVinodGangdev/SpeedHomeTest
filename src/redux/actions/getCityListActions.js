/*
 * Reducer actions related with get teams
 */
import * as types from '../types';

export function requestGetCityList(radius,lat,lon,cnt) {
  return {
    type: types.GET_CITY_REQUEST,
    radius,
    lat,
    lon,
    cnt
  };
}

export function onGetCityListResponse(response) {
  return {
    type: types.GET_CITY_RESPONSE,
    response,
  };
}

export function getCityListFailed(response) {
  return {
    type: types.GET_CITY_FAILED,
    response
  };
}

export function enableLoader() {
  return {
    type: types.GET_CITY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.GET_CITY_DISABLE_LOADER,
  };
}

