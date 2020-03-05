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

export function getRooms(rooms) {
    return {
        type: types.GET_ALL_ROOMS,
        payload: rooms
    }
}

export function initGame(data) {
    return {
        type: types.INIT_GAME,
        payload: data
    }
}

export function moveRoom(data) {
    return {
        type: types.MOVE_ROOM,
        payload: data
    }
}

