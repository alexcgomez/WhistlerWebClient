import { Dispatch } from 'redux';
import axios from 'axios';
import { ADD_SITE_ATTEMPT, ADD_SITE_FAILURE, ADD_SITE_SUCCESS, SiteDispatchTypes } from './AddSiteActionTypes';


export const AddSite = (siteUrl: string,userId: string) => async (dispatch: Dispatch<SiteDispatchTypes>) => {
  try {
    dispatch({
      type: ADD_SITE_ATTEMPT,
    });
    const res = await axios.post('http://localhost:8080/v1/sites', {
      userId: userId,
      siteUrl: siteUrl,
    });
    dispatch({
      type: ADD_SITE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADD_SITE_FAILURE,
      payload: e.message,
    });
  }
};
