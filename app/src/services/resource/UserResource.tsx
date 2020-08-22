import Resource, { Params } from './base/Resource';
import { ApiUserResponse, UserFactory } from '../factories/User.factory';
import User from '../../entities/User';
import { AxiosPromise, AxiosResponse } from 'axios';

export class UserResource extends Resource {
  private userFactory: UserFactory;

  constructor(route: string) {
    super(route);
    this.userFactory = new UserFactory();
  }

  public get(id: string, params?: Params): AxiosPromise<User> {
    return super.get(id, params).then((response: AxiosResponse<ApiUserResponse>): AxiosResponse<User> => {
      try {
        return {...response, data: this.userFactory.toEntity(response.data)};
      } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e);
        throw e;
      }
    });
  }

}
