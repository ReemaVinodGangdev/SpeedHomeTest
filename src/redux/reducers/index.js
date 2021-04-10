/*
 * combines all th existing reducers
 */
 import * as getCityListReducer from './getCityListReducer';
 import * as getCurrentTempReducer from './getCurrentTempReducer';

export default Object.assign(
    getCityListReducer,
    getCurrentTempReducer
);
