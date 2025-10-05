import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopBar } from "../../../transport-by-the-employees-to-the-employees/transport-management/src/app/services/top-bar/top-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, FormsModule, MatButtonModule, MatListModule, TopBar],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
toggle() {
  this.opened = !this.opened;
}
  opened = true;
}
