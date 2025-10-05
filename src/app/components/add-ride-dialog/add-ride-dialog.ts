
// add-ride-dialog.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Ride } from '../ride-tile/ride-tile';

@Component({
  selector: 'app-add-ride-dialog',
  imports: [MatDialogModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,MatOptionModule,MatButtonModule,CommonModule,MatSelectModule,MatInputModule],
  templateUrl: './add-ride-dialog.html',
  styleUrl: './add-ride-dialog.css'
})
export class AddRideDialog {
  rideForm: FormGroup;
  vehicleTypes = ['Bike', 'Car'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRideDialog>,
  ) {
    this.rideForm = this.fb.group({
      vehicleType: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      vacantSeats: [
        '',
        [Validators.required, Validators.min(1), Validators.max(6)]
      ],
      time: ['', Validators.required],
      pickupPoint: ['', Validators.required],
      destination: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.rideForm.valid) {
      const hrMins = this.rideForm.value.time.split(":");
      const today = new Date();
      today.setHours(hrMins[0],hrMins[1]);
      const ride  = {...this.rideForm.value, time: today.toISOString()}
      this.dialogRef.close(ride as Ride);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
