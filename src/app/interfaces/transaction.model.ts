export interface Transaction {
  title: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
}
