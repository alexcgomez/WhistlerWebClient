import { Dispatch } from 'redux';
import axios from 'axios';
import { ADD_SITE_ATTEMPT, ADD_SITE_FAILURE, ADD_SITE_SUCCESS, SiteDispatchTypes } from './AddSiteActionTypes';

export const AddSite = (siteUrl: string, userId: string, history: any) => async (dispatch: Dispatch<SiteDispatchTypes>) => {
  try {
    dispatch({
      type: ADD_SITE_ATTEMPT,
    });
    const res = await axios.post('http://localhost:8080/v1/sites/', {
      userId: userId,
      siteUrl: siteUrl,
    });
    const resSites = await axios.get('http://localhost:8080/v1/sites/', {
      params: {
        userId: userId,
      },
    });
    res.data.userSites = resSites.data;
    dispatch({
      type: ADD_SITE_SUCCESS,
      payload: res.data.userSites,
    });
    history.push('/dashboard')
  } catch (e) {
    dispatch({
      type: ADD_SITE_FAILURE,
      payload: e.message,
    });
  }
};
