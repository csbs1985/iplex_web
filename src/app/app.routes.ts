import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then(p => p.HomePage),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then(p => p.LoginPage)
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.page').then(p => p.UsersPage),
        canActivate: [AuthGuard]
    },
    {
        path: 'recharge',
        loadComponent: () => import('./pages/recharge/recharge.page').then(p => p.RechargePage),
        canActivate: [AuthGuard]
    },
    {
        path: 'catalog/:type',
        loadComponent: () => import('./pages/catalog/catalog.page').then(p => p.CatalogPage),
        canActivate: [AuthGuard]
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./pages/details/details.page').then(p => p.DetailsPage),
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'settings',
    //     loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'search',
    //     loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    // }
    { path: '**', redirectTo: '' },
];
