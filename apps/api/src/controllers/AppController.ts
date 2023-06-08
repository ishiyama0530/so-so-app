import { TYPES, UserGetAllInteractor } from '@soso/domain'
import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'

@controller('/app')
export class AppController {
  constructor(
    @inject(TYPES.APPLICATIONS.USER_GET_ALL_INTERACTOR)
    private readonly userGetAllInteractor: UserGetAllInteractor
  ) {}

  @httpGet('/')
  public get(): Promise<any> {
    return this.userGetAllInteractor.handle({})
  }
}
