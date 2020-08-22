import { AxiosPromise, AxiosResponse } from 'axios';
import Page from 'src/entities/Page';
import User from 'src/entities/User';
import { EntityFactoryFactory } from '../../entity-factory/EntityFactory.factory';
import { ApiUserResponse, UserFactory } from '../../entity-factory/factories/User.factory';
import Resource, { Params } from './base/Resource';
import { history } from '../../../store';

export class UserResource extends Resource {
  private entityFactory: UserFactory;

  constructor(route: string) {
    super(route);

    const entityFactoryFactory = new EntityFactoryFactory();
    this.entityFactory = entityFactoryFactory.user;
  }

  public get(id: string, params?: Params): AxiosPromise<User> {
    return super.get(id, params).then((response: AxiosResponse<ApiUserResponse>): AxiosResponse<User> => {
      try {
        return { ...response, data: this.entityFactory.toEntity(response.data) };
      } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e);
        throw e;
      }
    });
  }

  public getLoggedUser(): AxiosPromise<User> {
    this.getHeaders();

    const url: string = this.route;

    return this.httpClient
      .get(url)
      .then((response: AxiosResponse): AxiosResponse<User> => {
        try {
          response.data = this.entityFactory.toEntity(response.data);
          return response;
        } catch (e) {
          // tslint:disable-next-line: no-console
          console.error(e);
          throw e;
        }
      })
      .catch((errorResponse) => {
        if (errorResponse.response.status === 401) {
          history.push('/login');
        }
        throw errorResponse;
      });
  }

  public index(params?: Params): AxiosPromise<Page<User>> {
    return super.index(params).then((response: AxiosResponse<Page<ApiUserResponse>>): AxiosResponse<Page<User>> => {
      try {
        return {
          ...response,
          data: {
            ...response.data,
            content: response.data.content.map((element) => this.entityFactory.toEntity(element)),
          },
        };
      } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e);
        throw e;
      }
    });
  }

  public create(entity: User): AxiosPromise {
    return super.create(this.entityFactory.toRequest!(entity));
  }

  public update(id: string, entity: User): AxiosPromise {
    return super.update(id, this.entityFactory.toRequest(entity));
  }

  public activate(userId: string): AxiosPromise {
    this.getHeaders();

    const extendedRoute = '/users/' + userId + '/activate';

    return this.httpClient
      .post(extendedRoute, {}, {
        headers: {
          ...this.httpClient.defaults.headers,
        },
      })
      .catch((errorResponse) => {
        throw errorResponse;
      });
  }

  public unactivate(userId: string): AxiosPromise {
    this.getHeaders();

    const extendedRoute = '/users/' + userId + '/unactivate';

    return this.httpClient
      .post(extendedRoute, {}, {
        headers: {
          ...this.httpClient.defaults.headers,
        },
      })
      .catch((errorResponse) => {
        throw errorResponse;
      });
  }
}
