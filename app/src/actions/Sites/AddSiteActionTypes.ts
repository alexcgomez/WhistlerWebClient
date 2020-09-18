export const ADD_SITE_ATTEMPT = 'ADD_SITE_ATTEMPT';
export const ADD_SITE_FAILURE = 'ADD_SITE_FAILURE';
export const ADD_SITE_SUCCESS = 'ADD_SITE_SUCCESS';

interface AddSiteAttempt {
  type: typeof ADD_SITE_ATTEMPT
}

interface AddSiteFail {
  type: typeof ADD_SITE_FAILURE
}

interface AddSiteSuccess {
  type: typeof ADD_SITE_SUCCESS,
  payload: string
}

export type SiteDispatchTypes = AddSiteAttempt | AddSiteFail | AddSiteSuccess;
