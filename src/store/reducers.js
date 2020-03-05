import * as types from './actions/actionTypes';

// set initial values for slices of state below
const initialCount = 0;

// slices of state reducers
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}

const initialLoggedInUser = {
  token: '',
  loggedIn: false,
};

export function authReducer(loggedInUser = initialLoggedInUser, action) {
  switch (action.type) {
    case types.EMPTY_LOGGED_IN_USER:
      return initialLoggedInUser;
    case types.SET_LOGGED_IN_USER:
      return { loggedIn: true, token: action.payload };
    default:
      return loggedInUser;
  }
}

const initalGameState = {
  rooms: [],
  playerID: '',
  playerName: '',
  currentRoomTitle: '',
  currentRoomDescription: '',
  error: '',
};

export function gameReducer(game = initalGameState, action) {
  switch (action.type) {
    case types.GET_ALL_ROOMS:
      return { ...game, rooms: action.payload };
    case types.RESET_GAME:
        return initalGameState;
    case types.INIT_GAME:
      return {
        ...game,
        playerID: action.payload.uuid,
        playerName: action.payload.name,
        currentRoomTitle: action.payload.title,
        currentRoomDescription: action.payload.description,
      };
      case types.MOVE_ROOM:
      return {
        ...game,
        currentRoomTitle: action.payload.title,
        currentRoomDescription: action.payload.description,
        error: action.payload.error_msg
      };
    default:
      return game;
  }
}
