import { DELETE_SITE_ATTEMPT, DELETE_SITE_FAILURE, DELETE_SITE_SUCCESS } from '../../actions/Sites/DeleteSiteActionTypes';

export interface DeleteSiteState {
  loading: boolean,
  error: boolean,
  site?: string
}

const defaultState: DeleteSiteState = {
  loading: false,
  error: false,
};

const deleteSiteReducer = (state: DeleteSiteState = defaultState, action: any): DeleteSiteState => {
  switch (action.type) {
    case DELETE_SITE_ATTEMPT:
      return { ...state, loading: true, error: false };
    case DELETE_SITE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_SITE_SUCCESS:
      return { ...state, loading: false, error: false, site: action.payload };
    default:
      return state;
  }

};

export default deleteSiteReducer;
