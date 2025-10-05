import { Routes } from '@angular/router';
import { BookRide } from './pages/book-ride/book-ride';
import { AddViewRides } from './pages/add-view-rides/add-view-rides';
import { LoginPage } from './pages/login-page/login-page';
import { AuthGuard } from './services/auth-service';

export const routes: Routes = [
    {
        path: '',
        component: LoginPage,
        title: 'Login',

    },
    {
        path: 'login',
        component: LoginPage,
        title: 'Login',

    },
    {
        path: 'book-ride',
        component: BookRide,
        title: 'Available rides',
        canActivate: [AuthGuard]
        
    },
    {
        path: 'add-view-rides',
        component: AddViewRides,
        title: 'View Rides',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: LoginPage,
        title: 'Login',

    },
];
;
