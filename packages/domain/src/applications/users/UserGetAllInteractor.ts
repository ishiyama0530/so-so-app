import { Fixed } from '@soso/shared'
import { inject, injectable } from 'inversify'
import { UserEntity, UserRepository } from '../../domains'
import { TYPES } from '../../libs/constants/inversify'

export type UserGetAllInput = {}
export type UserGetAllOutput = UserEntity[]

@injectable()
export class UserGetAllInteractor {
  constructor(
    @inject(TYPES.DOMAINS.USER_REPOSITORY)
    private readonly userRepository: UserRepository
  ) {}
  public handle(input: Fixed<UserGetAllInput>): Promise<UserGetAllOutput> {
    return this.userRepository.all()
  }
}
