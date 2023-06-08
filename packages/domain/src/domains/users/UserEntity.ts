export class UserEntity {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly password: string
  ) {}
}
