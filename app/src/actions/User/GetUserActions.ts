import { Dispatch } from 'redux';
import { GET_USER_ATTEMPT, GET_USER_FAILURE, GET_USER_SUCCESS, UserDispatchTypes } from './GetUserActionTypes';
import axios from 'axios';
import User from '../../entities/User';

export const GetUser = (userId: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: GET_USER_ATTEMPT,
    });
    const res = await axios.get(process.env.BASE_API_ROUTE+'/v1/users/' + userId);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: new User(res.data),
    });
  } catch (e) {
    dispatch({
      type: GET_USER_FAILURE,
    });
  }
};
