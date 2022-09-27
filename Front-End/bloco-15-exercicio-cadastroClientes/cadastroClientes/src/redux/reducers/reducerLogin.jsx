import { ACTION_LOGIN  } from "../actions/actionLogin";

const INITIAL_STATE = {
  login: false,
}

const reducerLogin = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_LOGIN: 
    return {
      ...state,
      login: true,
    }

    default: 
    return state;
  }
}

export default reducerLogin;