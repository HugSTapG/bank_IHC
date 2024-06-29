import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../interfaces/transaction.model';
import { CommonModule, CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, CommonModule, NgFor],
  providers:[TransactionService, NumbersService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private transactionService: TransactionService, private numbersService: NumbersService) { }
    transactions: Transaction[] = [];
    showOverlay = false;
    activeTab: 'debito' | 'credito' = 'debito';

    ngOnInit(): void {
      this.transactions = this.transactionService.getTransactions();
    }

    setActiveTab(tab: 'debito' | 'credito') {
      this.activeTab = tab;
    }

    get currentBalance(): number {
      return this.numbersService.getBalance();
    }

    handleButtonClick(buttonNumber: number) {
      switch (buttonNumber) {
        case 1:
          //Transferir
          this.numbersService.decreaseBalance(10);
          this.transactionService.addTransaction('Transferencia realizada', -10, 'expense');
          break;
        case 2:
          //Pagos
          this.numbersService.increaseBalance(10);
          this.transactionService.addTransaction('Pago realizado', 10, 'income');
          break;
        case 3:
          //Resumen
          break;
        case 4:
          //Otros
          break;
        case 5:
            //Perfil
          break;
        default:
          break;
      }
    }
    

}
