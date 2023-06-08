import { TYPES, UserGetAllInteractor, UserRepository } from '@soso/domain'
import { UserRepositoryMock } from '@soso/infra'
import { Container } from 'inversify'

export const container = new Container()

container.bind<UserRepository>(TYPES.DOMAINS.USER_REPOSITORY).to(UserRepositoryMock)
container.bind(TYPES.APPLICATIONS.HISTORY_GET_ALL_INTERACTOR).to(UserGetAllInteractor)
