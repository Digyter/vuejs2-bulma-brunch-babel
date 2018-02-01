import * as types from './constants';

export function setCars({commit},cars) {
    commit(types.CARS, cars);
};
