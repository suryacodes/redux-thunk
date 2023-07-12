import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Action

//function that creates an action object (source of information for the store)

export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_ERROR = 'SAVE_ERROR';

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const SaveData = (users) => {
  return {
    type: SAVE_DATA,
    payload: {
      users,
    },
  };
};

export const SaveError = (err) => {
  return {
    type: SAVE_ERROR,
    payload: {
      message: err?.message,
    },
  };
};

export const AsyncfetchData = () => {
  return (dispatch) => {
    dispatch(fetchData());
    setTimeout(() => {
      dispatch(
        SaveData([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          },
        ])
      );
    }, 3000);
  };
};

let initialState = {
  users: [],
  isLoading: false,
  error: false,
  errorMessage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_DATA:
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
      };
    case FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: userReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
