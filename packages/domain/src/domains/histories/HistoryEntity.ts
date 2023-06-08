export class HistoryEntity {
  constructor(
    public readonly historyId: string,
    public readonly body: string,
    public readonly userId: string,
    public readonly createdAt: Date
  ) {}
}
