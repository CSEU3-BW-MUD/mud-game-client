import * as types from './actionTypes';

export function setLoggedInUser(user) {
  return {
    type: types.SET_LOGGED_IN_USER,
    payload: user,
  };
}

export function logOutUser() {
  return {
    type: types.EMPTY_LOGGED_IN_USER,
  };
}
