export default class Token {
  value: string;

  constructor(entity: Token) {
    this.value = entity.value;
  }
}
