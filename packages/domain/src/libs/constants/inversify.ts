export const TYPES = {
  APPLICATIONS: {
    HISTORY_GET_ALL_INTERACTOR: Symbol.for('HistoryGetAllInteractor'),
    USER_CREATE_INTERACTOR: Symbol.for('UserCreateInteractor'),
    USER_GET_ALL_INTERACTOR: Symbol.for('UserGetAllInteractor')
  },
  DOMAINS: {
    HISTORY_REPOSITORY: Symbol.for('HistoryRepository'),
    USER_REPOSITORY: Symbol.for('UserRepository')
  }
}
