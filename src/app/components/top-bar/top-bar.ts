import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-top-bar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css'
})
export class TopBar {
  @Output() toggle = new EventEmitter();
  @Input() showHamburger: boolean = false;
  toggleNavBar() {
    this.toggle.emit();
  }

}
