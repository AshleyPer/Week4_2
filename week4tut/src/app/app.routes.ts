import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'account', loadComponent: () => 
    import('./account/account.component').then(c => c.AccountComponent)},

    {path: 'login', loadComponent: () => 
    import('./login/login.component').then(c => c.LoginComponent)},

    {path: 'profile', loadComponent: () => 
    import('./profile/profile.component').then(c => c.ProfileComponent)},

    {path: 'signup', loadComponent: () => 
    import('./signup/signup.component').then(c => c.SignupComponent)},
];
