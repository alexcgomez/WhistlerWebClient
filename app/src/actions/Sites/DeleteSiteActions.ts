import { Dispatch } from 'redux';
import axios from 'axios';
import { DELETE_SITE_ATTEMPT, DELETE_SITE_FAILURE, DELETE_SITE_SUCCESS, SiteDispatchTypes } from './DeleteSiteActionTypes';

export const DeleteSite = (siteUrl: string, userId: string) => async (dispatch: Dispatch<SiteDispatchTypes>) => {
  try {
    dispatch({
      type: DELETE_SITE_ATTEMPT,
    });
    const res = await axios.delete('http://localhost:8080/v1/sites/', {
      // headers: {
      //   Authorization: "Bearer " + JSON.parse(localStorage.getItem('token') || '{}').token,
      // },
      params: {
        userId: userId,
        siteUrl: siteUrl,
      },
    });
    const resSites = await axios.get('http://localhost:8080/v1/sites/', {
      params: {
        userId: userId,
      },
    });
    res.data.userSites = resSites.data;
    dispatch({
      type: DELETE_SITE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: DELETE_SITE_FAILURE,
      payload: e.message,
    });
  }
};
