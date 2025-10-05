import { Routes } from '@angular/router';
import { BookRide } from './pages/book-ride/book-ride';
import { AddViewRides } from './pages/add-view-rides/add-view-rides';

export const routes: Routes = [
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
