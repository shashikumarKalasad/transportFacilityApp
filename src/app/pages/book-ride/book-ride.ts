import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Ride, RideTile } from '../../components/ride-tile/ride-tile';
import { CommonModule } from '@angular/common';
import { TransportService } from '../../services/transport-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-ride',
  imports: [RideTile,CommonModule],
  templateUrl: './book-ride.html',
  styleUrl: './book-ride.css'
})
export class BookRide implements OnInit {
  private transportService = inject(TransportService);
  private destroyRef = inject(DestroyRef);
  rides:Ride[] =[];
  bookedrides:Ride[] =[];
  ngOnInit(): void {
     this.transportService.getOpenRides()
     .pipe(takeUntilDestroyed(this.destroyRef))
     .subscribe(rides=>{
       this.rides = rides;
     })

     this.transportService.getBookedRides()
     .pipe(takeUntilDestroyed(this.destroyRef))
     .subscribe(rides=>{
       this.bookedrides = rides;
     })
  }
  bookARide(ride:Ride){
     this.transportService.bookRide(ride);
  }
}


