import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent,MatDialogTitle],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialog {
  readonly dialogRef = inject(MatDialogRef<ConfirmDialog,'yes'| null>);
  confirmRide() {
    this.dialogRef.close('yes');
  }
  
}
