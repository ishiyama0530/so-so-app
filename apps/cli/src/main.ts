import { TYPES, UserGetAllInteractor } from '@soso/domain'

import { container } from './inversify.config'

export const main = async () => {
  const interactor = container.get<UserGetAllInteractor>(
    TYPES.APPLICATIONS.HISTORY_GET_ALL_INTERACTOR
  )
  const users = await interactor.handle({})
  console.log(JSON.stringify(users, null, 2))
}

main()
