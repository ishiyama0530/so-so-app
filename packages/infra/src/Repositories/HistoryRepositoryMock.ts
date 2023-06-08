import type { HistoryRepository } from '@soso/domain'
import { HistoryEntity } from '@soso/domain'
import { Fixed } from '@soso/shared'
import { injectable } from 'inversify'

@injectable()
export class HistoryRepositoryMock implements HistoryRepository {
  public all(): Promise<HistoryEntity[]> {
    return Promise.resolve([
      new HistoryEntity('id', 'body', 'user_id', new Date()),
      new HistoryEntity('id', 'body', 'user_id', new Date()),
      new HistoryEntity('id', 'body', 'user_id', new Date())
    ])
  }
  public createHistory(history: Fixed<HistoryEntity>): Promise<void> {
    return Promise.resolve()
  }
}
