import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
} from '../../actions/User/CreateUserActionTypes';

export interface CreateUserState {
  loading: boolean,
  newUserId?: string,
  error: boolean
}

const defaultState: CreateUserState = {
  loading: false,
  error: false,
};

const createUserReducer = (state: CreateUserState = defaultState, action: any): CreateUserState => {
  switch (action.type) {
    case CREATE_USER_ATTEMPT:
      return { ...state, loading: true, error: false };
    case CREATE_USER_FAILURE:
      return { ...state, loading: false, error: true };
    case CREATE_USER_SUCCESS:
      return { ...state, loading: false, error: false, newUserId: action.payload };
    default:
      return state;
  }

};

export default createUserReducer;
