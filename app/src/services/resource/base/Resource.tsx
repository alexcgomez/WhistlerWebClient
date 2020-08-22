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

}

export default Resource;
