import { Fixed, HttpError } from '@soso/shared'
import { inject, injectable } from 'inversify'
import { HistoryEntity, HistoryRepository, UserEntity, UserRepository } from '../../domains'
import { TYPES } from '../../libs/constants/inversify'

export type UserCreateInput = Omit<UserEntity, 'userId'>
export type UserCreateOutput = UserEntity

@injectable()
export class UserCreateInteractor {
  constructor(
    @inject(TYPES.DOMAINS.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @inject(TYPES.DOMAINS.HISTORY_REPOSITORY)
    private readonly historyRepository: HistoryRepository
  ) {}
  public async handle(input: Fixed<UserCreateInput>): Promise<UserCreateOutput> {
    const user = await this.userRepository.findByEmail(input.email)
    if (user) {
      throw new HttpError(409, 'User already exists')
    }

    const newUserId = Math.random().toString(32).substring(2)
    const newUser = new UserEntity(newUserId, input.email, input.password)
    await this.userRepository.createUser(newUser)

    const history = new HistoryEntity('id', 'created user.', 'user_id', new Date())
    await this.historyRepository.createHistory(history)

    const createdUser = await this.userRepository.findById(newUserId)
    if (!createdUser) {
      throw new HttpError(500, 'Failed to process')
    }

    return newUser
  }
}
