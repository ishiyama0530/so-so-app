import { Fixed } from '@soso/shared'
import { HistoryEntity } from './HistoryEntity'

export interface HistoryRepository {
  all(): Promise<HistoryEntity[]>
  createHistory(history: Fixed<HistoryEntity>): Promise<void>
}
