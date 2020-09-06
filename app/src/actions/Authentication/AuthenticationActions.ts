import { Dispatch } from 'redux';
import { AUTHENTICATION_ATTEMPT, AuthenticationDispatchTypes } from './AuthenticationActionTypes';
import axios from 'axios';


export const Authenticate = (email: string, password: string) => async (dispatch: Dispatch<AuthenticationDispatchTypes>) => {
  try{
    dispatch({
      type: AUTHENTICATION_ATTEMPT,
    });

    const res = await axios.post(process.env.BASE_API_ROUTE + 'v1/login',{email:email,password:password})

  } catch (e) {

  }
}
