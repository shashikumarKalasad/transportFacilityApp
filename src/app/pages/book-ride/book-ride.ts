import { Component, inject, OnInit } from '@angular/core';
import { Ride, RideTile } from '../../components/ride-tile/ride-tile';
import { CommonModule } from '@angular/common';
import { TransportService } from '../../services/transport-service';

@Component({
  selector: 'app-book-ride',
  imports: [RideTile,CommonModule],
  templateUrl: './book-ride.html',
  styleUrl: './book-ride.css'
})
export class BookRide implements OnInit {
  private transportService = inject(TransportService)
  ngOnInit(): void {
     this.transportService.getRides().subscribe(rides=>{
       this.rides = rides;
     })
  }
  rides:Ride[] =[]
}


