import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSidenav() {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
}
