import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Ride, RideTile } from '../../components/ride-tile/ride-tile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-view-rides',
  imports: [RideTile,CommonModule],
  templateUrl: './add-view-rides.html',
  styleUrl: './add-view-rides.css'
})
export class AddViewRides {
  private transportService = inject(TransportService);
  private destroyRef = inject(DestroyRef);
  rides: Ride[] = []; 

  ngOnInit(): void {
    this.transportService.getUserAddedRides()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(rides => {
        this.rides = rides;
      })
  }
}
