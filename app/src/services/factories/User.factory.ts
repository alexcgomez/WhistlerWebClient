import User from '../../entities/User';

export interface ApiUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

interface ApiCreateUserRequest {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
}

export class UserFactory {

  public toEntity(args: ApiUserResponse): User {
    return new User({
      id: args.id,
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      active: args.active,
    });
  }

  public toRequest(user: User): ApiCreateUserRequest {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  }
}
