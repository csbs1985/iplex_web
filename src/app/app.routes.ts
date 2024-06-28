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
        loadComponent: () => import('./pages/details/details.page').then(p => p.DetailsPage),
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.page').then(p => p.SettingsPage),
        canActivate: [AuthGuard]
    },
    {
        path: 'watch/:id',
        loadComponent: () => import('./pages/watch/watch.page').then(p => p.WatchPage),
        canActivate: [AuthGuard]
    },
    {
        path: 'search',
        loadComponent: () => import('./pages/search/search.page').then(p => p.SearchPage),
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' },
];
