import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from "@angular/material/card";
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [MatCard,FormsModule, ReactiveFormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  loginForm: FormGroup;
  private router = inject(Router);
  private fb = inject(FormBuilder);
  actions = [
    { value: 'ride', label: 'Ride' },
    { value: 'book', label: 'Book' }
  ];

  constructor() {
    this.loginForm = this.fb.group({
      employeeId: ['', Validators.required],
      action: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      if (this.loginForm.value.action === 'ride') {
        console.log('Navigate to Add Ride page');
        this.router.navigate(['/add-view-rides']);
      } else {
        console.log('Navigate to Book Ride page');
        this.router.navigate(['/book-ride']);
      }
    }
  }
}
