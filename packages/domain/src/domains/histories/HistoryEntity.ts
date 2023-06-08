import { HttpError } from '@soso/shared'
import { z } from 'zod'

const historyScheme = z.object({
  historyId: z.string(),
  body: z.string(),
  userId: z.string(),
  createdAt: z.date()
})

type HistoryType = z.infer<typeof historyScheme>

export class HistoryEntity implements HistoryType {
  constructor(
    public readonly historyId: string,
    public readonly body: string,
    public readonly userId: string,
    public readonly createdAt: Date
  ) {
    const result = historyScheme.safeParse({ historyId, body, userId, createdAt })
    if (!result.success) {
      throw new HttpError(400, result.error.message)
    }
  }
}
