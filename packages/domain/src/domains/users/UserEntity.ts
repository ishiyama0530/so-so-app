import { HttpError } from '@soso/shared'
import { z } from 'zod'

const userScheme = z.object({
  userId: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
})

type UserType = z.infer<typeof userScheme>

export class UserEntity implements UserType {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly password: string
  ) {
    const result = userScheme.safeParse({ userId, email, password })
    if (!result.success) {
      throw new HttpError(400, result.error.message)
    }
  }
}
