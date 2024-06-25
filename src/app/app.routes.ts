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

    // {
    //     path: 'watch',
    //     loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'settings',
    //     loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'search',
    //     loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    // },
    // {
    //     path: 'feed',
    //     loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule),
    //     canActivate: [AuthGuard]
    // }
    { path: '**', redirectTo: '' },
];
