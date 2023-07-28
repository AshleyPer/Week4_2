import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'account', loadComponent: () => 
    import('./account/account.component').then(c => c.AccountComponent)},

    {path: 'login', loadComponent: () => 
    import('./login/login.component').then(c => c.LoginComponent)},
];
