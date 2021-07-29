import { SET_USERS, SET_DATA, R_DATA } from "./Action";
import * as redux from "redux";

const initialState = {
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      console.log("Data fetched :: " + action.value);
      return { ...state, data: action.value, ltable: action.ltable };
    }
    case SET_DATA: {
      return { ...state, data1: action.value1, utable: action.utable };
    }
    case R_DATA: {
      return { ...state, data1: [], utable: [] };
    }

    default:
      return initialState;
  }
};

export const rootReducer = redux.combineReducers({
  users: userReducer,
});
