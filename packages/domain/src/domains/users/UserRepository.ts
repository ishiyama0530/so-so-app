import { Fixed } from '@soso/shared'
import { UserEntity } from './UserEntity'

export interface UserRepository {
  all(): Promise<UserEntity[]>
  findById(id: string): Promise<UserEntity | null>
  findByEmail(email: string): Promise<UserEntity | null>
  createUser(user: Fixed<UserEntity>): Promise<void>
}
