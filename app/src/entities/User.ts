export default class User{
  id: string
  firstName: string
  lastName: string
  email: string
  active: boolean

  constructor(entity:User) {
    this.id = entity.id;
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
    this.email = entity.email;
    this.active = entity.active;
  }
}
