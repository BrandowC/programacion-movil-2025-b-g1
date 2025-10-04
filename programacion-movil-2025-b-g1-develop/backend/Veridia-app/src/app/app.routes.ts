import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AccountRegistrationComponent } from './pages/account-registration/account-registration.component';
import { MyAccountsComponent } from './pages/my-accounts/my-accounts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'account-registration', component: AccountRegistrationComponent },
  { path: 'my-accounts', component: MyAccountsComponent },
  { path: '**', redirectTo: 'login' }
];