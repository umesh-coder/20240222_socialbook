import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // Variable to toggle settings menu height
  settingsMenuHeight = false;

  // Variable to toggle dark mode
  darkMode = false;

  // Function to toggle settings menu height
  settingsMenuToggle() {
    // Toggle the settings menu height variable
    this.settingsMenuHeight = !this.settingsMenuHeight;
  }

  // Function to toggle dark mode
  toggleDarkMode() {
    // Toggle the dark mode variable
    this.darkMode = !this.darkMode;
    // Add or remove 'dark-theme' class to body based on dark mode
    if (this.darkMode) {
      document.body.classList.add('dark-theme'); // Apply dark theme
    } else {
      document.body.classList.remove('dark-theme'); // Remove dark theme
    }
  }
}
