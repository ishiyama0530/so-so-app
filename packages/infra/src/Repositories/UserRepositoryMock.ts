import type { UserRepository } from '@soso/domain'
import { UserEntity } from '@soso/domain'
import { Fixed } from '@soso/shared'
import { injectable } from 'inversify'

@injectable()
export class UserRepositoryMock implements UserRepository {
  public all(): Promise<UserEntity[]> {
    return Promise.resolve([
      new UserEntity('id', 'xxx@xxx.xx', 'password'),
      new UserEntity('id', 'xxx@xxx.xx', 'password'),
      new UserEntity('id', 'xxx@xxx.xx', 'password')
    ])
  }
  findById(id: string): Promise<UserEntity | null> {
    return Promise.resolve(new UserEntity(id, 'xxx@xxx.xx', 'password'))
  }
  public findByEmail(email: string): Promise<UserEntity | null> {
    return Promise.resolve(new UserEntity('id', email, 'password'))
  }
  public createUser(user: Fixed<UserEntity>): Promise<void> {
    return Promise.resolve()
  }
}
