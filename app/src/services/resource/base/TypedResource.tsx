import { AxiosPromise, AxiosResponse } from 'axios';
import Resource, { Params } from './Resource';
import { EntityFactoryFactory } from '../../../entity-factory/EntityFactory.factory';
import { ClassOf, Entity, FactoryInterface } from '../../../entity-factory/FactoryInterface';
import Page from '../../../../../entities/Page';

export class TypedResource<T extends Entity> extends Resource {
  protected entityFactory: FactoryInterface<T>;

  constructor(route: string, type: ClassOf<T>) {
    super(route);

    const entityFactoryFactory = new EntityFactoryFactory();
    this.entityFactory = entityFactoryFactory.getFactory(type);
  }

  public get(id: string, params?: Params): AxiosPromise<T> {
    return super.get(id, params).then((response: AxiosResponse<{}>): AxiosResponse<T> => {
      try {
        response.data = this.entityFactory.toEntity(response.data);
        return response as AxiosResponse<T>;
      } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e);
        throw e;
      }
    });
  }

  public index(params?: Params): AxiosPromise<Page<T>> {
    return super.index(params).then((response: AxiosResponse<Page<{}>>): AxiosResponse<Page<T>> => {
      try {
        response.data.content = response.data.content.map((element) => this.entityFactory.toEntity(element));
        response.data = new Page<{}>(response.data) as Page<T>;
        return response as AxiosResponse<Page<T>>;
      } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e);
        throw e;
      }
    });
  }

  public create(entity: T, params?: Params): AxiosPromise {
    return super.create(this.entityFactory.toRequest!(entity), params);
  }

  public update(id: string, entity: T, params?: Params): AxiosPromise {
    return super.update(id, this.entityFactory.toRequest!(entity)!, params);
  }
}
