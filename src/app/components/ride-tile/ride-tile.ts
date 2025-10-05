import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
export type Ride = { vehicleType: string; vehicleNo: string; vacantSeats: number; time: string; pickupPoint: string; destination: string;    rideId: number;
    bookedEmployees: string[];
    rideOwner: string;
    remainingSeats: number;
    userNotEligibleToBook?: boolean;
  };

@Component({ 
  selector: 'app-ride-tile',
  imports: [CommonModule,MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './ride-tile.html',
  styleUrl: './ride-tile.css'
})
export class RideTile {
  readonly dialog = inject(MatDialog);
  @Input({required: true}) ride!: Ride;
  @Output() bookARide: EventEmitter<void> = new EventEmitter();
  
  get vehicleImage(): string {
    return this.ride.vehicleType === 'Car'
    ? 'car.svg'
    : 'bike.svg';
  }

}
