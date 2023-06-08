import { Fixed } from '@soso/shared'
import { inject, injectable } from 'inversify'
import { HistoryEntity, HistoryRepository } from '../../domains'
import { TYPES } from '../../libs/constants/inversify'

export type HistoryGetAllInput = {}
export type HistoryGetAllOutput = HistoryEntity[]

@injectable()
export class HistoryGetAllInteractor {
  constructor(
    @inject(TYPES.DOMAINS.HISTORY_REPOSITORY)
    private readonly historyRepository: HistoryRepository
  ) {}
  public handle(input: Fixed<HistoryGetAllOutput>): Promise<HistoryGetAllOutput> {
    return this.historyRepository.all()
  }
}
