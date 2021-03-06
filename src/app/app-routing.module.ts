import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';

import { LoginComponent }             from './pages/login/login.component';
//import { TransferComponent }          from './transfer.component';
//import { TransactionsComponent }      from './transactions.component';
//import { IssueComponent }             from './issue.component';
//import { TransactionDetailComponent } from './transaction-detail.component';

const routes: Routes = [
  { path: '',             redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',        component: LoginComponent },
 /** { path: 'transfer',     component: TransferComponent },
  { path: 'detail/:id',   component: TransactionDetailComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'issue',        component: IssueComponent }, */

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}