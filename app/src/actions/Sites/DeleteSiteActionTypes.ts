export const DELETE_SITE_ATTEMPT = 'DELETE_SITE_ATTEMPT';
export const DELETE_SITE_FAILURE = 'DELETE_SITE_FAILURE';
export const DELETE_SITE_SUCCESS = 'DELETE_SITE_SUCCESS';

interface DeleteSiteAttempt {
  type: typeof DELETE_SITE_ATTEMPT
}

interface DeleteSiteFail {
  type: typeof DELETE_SITE_FAILURE
}

interface DeleteSiteSuccess {
  type: typeof DELETE_SITE_SUCCESS,
  payload: string
}

export type SiteDispatchTypes = DeleteSiteAttempt | DeleteSiteFail | DeleteSiteSuccess;
