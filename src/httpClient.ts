import axios, { AxiosResponse } from 'axios';

interface IHTTPClient {
  get: <T>(url: string) => Promise<T>;
}
class HTTPClient implements IHTTPClient {
  get = async <T>(url: string): Promise<T> => {
    return axios.get<T>(url).then((res) => res.data);
  };
  post = async <P, R>(url: string, payload: P): Promise<R> => {
    return axios.post<P, AxiosResponse<R>>(url, payload).then((res) => res.data);
  };
  delete = async <R>(url: string): Promise<R> => {
    return axios.delete(url).then((res) => res.data);
  };
  put = async <P, R>(url: string, payload: P): Promise<R> => {
    return axios.put<P, AxiosResponse<R>>(url, payload).then((res) => res.data);
  };
}
const httpClient = new HTTPClient();
export { httpClient };
