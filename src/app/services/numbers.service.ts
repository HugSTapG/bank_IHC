import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  private balance: number = 100.35;

  constructor() {}

  getBalance(): number {
    return this.balance;
  }

  decreaseBalance(amount: number): void {
    this.balance -= amount;
  }

  increaseBalance(amount: number): void {
    this.balance += amount;
  }
}
