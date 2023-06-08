import { TYPES, UserGetAllInteractor, UserRepository } from '@soso/domain'
import { UserRepositoryMock } from '@soso/infra'
import { Container } from 'inversify'
import { interfaces } from 'inversify-express-utils'
import { AppController } from './controllers/AppController'

export const container = new Container()

container.bind<interfaces.Controller>('AppController').to(AppController)

container.bind<UserRepository>(TYPES.DOMAINS.USER_REPOSITORY).to(UserRepositoryMock)
container.bind(TYPES.APPLICATIONS.USER_GET_ALL_INTERACTOR).to(UserGetAllInteractor)
