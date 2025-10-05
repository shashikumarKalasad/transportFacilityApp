import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Ride, RideTile } from '../../components/ride-tile/ride-tile';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddRideDialog } from '../../components/add-ride-dialog/add-ride-dialog';

@Component({
  selector: 'app-add-view-rides',
  imports: [RideTile,CommonModule,MatButtonModule],
  templateUrl: './add-view-rides.html',
  styleUrl: './add-view-rides.css'
})
export class AddViewRides {
  private transportService = inject(TransportService);
  private destroyRef = inject(DestroyRef);
  private dialog = inject(MatDialog);

  rides: Ride[] = []; 
  
  ngOnInit(): void {
    this.transportService.getUserAddedRides()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(rides => {
      this.rides = rides;
    })
  }
  openAddRideDialog() {
    const dialogRef = this.dialog.open(AddRideDialog, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Ride to be added:', result);
      }
    });  }
}
