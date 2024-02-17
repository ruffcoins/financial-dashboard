export type TransactionNotification = {
  id: number;
  narration: string;
  type: transactionType;
};

export enum transactionType {
  INCOME = "income",
  EXPENSE = "expense",
}
