import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Ride, RideTile } from '../../components/ride-tile/ride-tile';
import { CommonModule } from '@angular/common';
import { TransportService } from '../../services/transport-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-book-ride',
  imports: [RideTile,CommonModule,MatFormFieldModule,ReactiveFormsModule,FormsModule,MatSelectModule,MatOptionModule,MatButtonModule,MatInputModule],
  templateUrl: './book-ride.html',
  styleUrl: './book-ride.css'
})
export class BookRide implements OnInit {
onSearch() {
// throw new Error('Method not implemented.');
}
  private transportService = inject(TransportService);
  private destroyRef = inject(DestroyRef);
  private fb = inject(FormBuilder);

  vehicleTypes = ['Bike', 'Car'];
  searchRideForm: FormGroup=this.fb.group({
      vehicleType: [this.vehicleTypes, Validators.required],
      time: '',
    });

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


