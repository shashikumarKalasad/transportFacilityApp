import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';
import { TopBar } from './components/top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, FormsModule, MatButtonModule, MatListModule, TopBar],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  showHamburger = true;
  private authService = inject(AuthService);
  empId: string = "";
  ngOnInit(): void {
    this.authService.getIsLoggedIn().subscribe(
      loggedin => {
        this.showHamburger = !!loggedin;
        this.opened = !!loggedin;
        this.empId = loggedin;
      }
    )
  }
  toggle() {
    this.opened = !this.opened;
  }
  logout() {
     this.authService.logout();
  }
  opened = true;
}
