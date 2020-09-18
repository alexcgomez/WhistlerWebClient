import { ADD_SITE_ATTEMPT, ADD_SITE_FAILURE, ADD_SITE_SUCCESS } from '../../actions/Sites/AddSiteActionTypes';

export interface AddSiteState {
  loading: boolean,
  error: boolean,
  site?: string
}

const defaultState: AddSiteState = {
  loading: false,
  error: false,
};

const addSiteReducer = (state: AddSiteState = defaultState, action: any): AddSiteState => {
  switch (action.type) {
    case ADD_SITE_ATTEMPT:
      return { ...state, loading: true, error: false };
    case ADD_SITE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_SITE_SUCCESS:
      return { ...state, loading: false, error: false, site: action.payload };
    default:
      return state;
  }

};

export default addSiteReducer;
