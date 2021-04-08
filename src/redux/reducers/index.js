/*
 * combines all th existing reducers
 */
 import * as getCityListReducer from './getCityListReducer';

export default Object.assign(
    getCityListReducer
);
