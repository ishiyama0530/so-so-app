import { HistoryGetAllInteractor, TYPES } from '@soso/domain'
import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'

@controller('/app')
export class AppController {
  constructor(
    @inject(TYPES.APPLICATIONS.HISTORY_GET_ALL_INTERACTOR)
    private readonly historyGetAllInteractor: HistoryGetAllInteractor
  ) {}

  @httpGet('/')
  public get(): Promise<any> {
    return this.historyGetAllInteractor.handle({})
  }
}
