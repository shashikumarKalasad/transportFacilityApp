import { Routes } from '@angular/router';
import { BookRide } from './pages/book-ride/book-ride';
import { AddViewRides } from './pages/add-view-rides/add-view-rides';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage,
        title: 'Login',
    },
    {
        path: 'book-ride',
        component: BookRide,
        title: 'Available rides',
    },
    {
        path: 'add-view-rides',
        component: AddViewRides,
        title: 'View Rides',
    },
];
;
