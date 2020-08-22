class ApiClientSingleton {
  private static _instance: ApiClientSingleton;

  public readonly user: UserResource;

  private constructor() {
    this.user = new UserResource('/v1/users/');
  }

  public static get instance(): ApiClientSingleton {
    return this._instance || (this._instance = new this());
  }
}

const ApiClient: ApiClientSingleton = ApiClientSingleton.instance;

export default ApiClient;
