import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export type Headers = { [key: string]: string };

interface ApplicationHeaders extends Headers {
  'Content-Type': string;
}

const headers: ApplicationHeaders = {
  'Content-Type': 'application/json',
};

let config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_API_ROUTE,
  headers: headers
};

const HttpClient: AxiosInstance = Axios.create(config);

export default HttpClient;