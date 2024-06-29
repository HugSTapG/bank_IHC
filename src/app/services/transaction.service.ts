import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
    //Data Estatica
    private transactions: Transaction[] = [
      { title: 'Compra en Supermercado XYZ', date: '18 jun 2024 - 09:45', amount: -85.25, type: 'expense' },
      { title: 'Pago de Servicios', date: '19 jun 2024 - 17:22', amount: -120.00, type: 'expense' },
      { title: 'Transferencia a Juan Pérez', date: '20 jun 2024 - 08:00', amount: -50.00, type: 'expense' },
      { title: 'Depósito en Cuenta de Ahorros', date: '21 jun 2024 - 10:30', amount: 500.00, type: 'income' },
      { title: 'Pago de Tarjeta de Crédito', date: '22 jun 2024 - 14:15', amount: -300.00, type: 'expense' },
      { title: 'Compra en Tienda de Electrónicos', date: '23 jun 2024 - 16:40', amount: -1200.00, type: 'expense' },
      { title: 'Depósito en Agencia Bancaria', date: '24 jun 2024 - 09:00', amount: 800.00, type: 'income' },
      { title: 'Compra en Librería', date: '25 jun 2024 - 11:20', amount: -40.50, type: 'expense' },
      { title: 'Pago de Internet y Cable', date: '26 jun 2024 - 18:30', amount: -90.00, type: 'expense' }
    ];

  constructor() {}

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(title: string, amount: number, type: 'income' | 'expense'): void {
    const date = new Date().toISOString();
    const newTransaction: Transaction = {
      title: title,
      date: date,
      amount: amount,
      type: type
    };
    console.log("Transaccion exitosa - 000");
    this.transactions.push(newTransaction);
  }
}
