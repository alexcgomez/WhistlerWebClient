import { Dispatch } from 'redux';
import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  UserDispatchTypes,
} from './CreateUserActionTypes';
import axios from 'axios';

export const CreateUser = (user:any) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: CREATE_USER_ATTEMPT,
    });
    const res = await axios.post('http://localhost:8080/auth', {

      email:user.email,
      password:user.password,
      firstName: user.firstName,
      last    const user = await getRepository(User).findOne({id:req.params.id});
      res.send(user.firstName + ' ' + user.lastName);Name: user.lastName

      });
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: e.message
    });
  }
};
