import { AxiosInstance, AxiosPromise } from 'axios';
import HttpClient from './HttpClient';

export type Params = {
  [key: string]: string | number | undefined | boolean;
};

class Resource {

  protected readonly route: string;
  protected readonly httpClient: AxiosInstance;

  constructor(route: string) {

    this.httpClient = HttpClient;
    this.route = route;
  }

  public get(id: string, params?: Params): AxiosPromise {

    const url: string = this.route + id;

    return this.httpClient
      .get(url)
      .catch((errorResponse) => {
        throw errorResponse;
      });
  }

/*  public create(data: Data, params?: Params): AxiosPromise {
    this.getHeaders();
    const {newUrl, newParams} = this.replaceRoute(this.route, params);

    const requestConfig: AxiosRequestConfig = {
      params: newParams,
    };

    return this.httpClient
      .post(newUrl, data, requestConfig)
      .catch((errorResponse) => {
        if (errorResponse.response.status === 401) {
          history.push('/login');
        }
        throw errorResponse;
      });
  }

  public update(id: string, data: Data, params?: Params): AxiosPromise {
    this.getHeaders();
    const url: string = this.route + id;

    const {newUrl, newParams} = this.replaceRoute(url, params);

    const requestConfig: AxiosRequestConfig = {
      params: newParams,
    };

    return this.httpClient
      .put(newUrl, data, requestConfig)
      .catch((errorResponse) => {
        if (errorResponse.response.status === 401) {
          history.push('/login');
        }
        throw errorResponse;
      });
  }*/

}

export default Resource;
