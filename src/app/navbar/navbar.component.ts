import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  name = "Narendra Modi"
  profilepic = "https://i.postimg.cc/dQpzWMsw/modi.png"

  // Variable to toggle settings menu height
  settingsMenuHeight = false;

  // Variable to toggle dark mode
  darkMode = false;

  //variable for offline
  offline = false;

  // Function to toggle settings menu height
  settingsMenuToggle() {
    // Toggle the settings menu height variable
    this.settingsMenuHeight = !this.settingsMenuHeight;
  }

  //function to toggle online to offline & Vice Versa
  on_off_mode() {

    //testing Double Click
    // console.log("double click");

    this.offline = !this.offline;

    if (this.offline) {

      //by dbl Click Adding Properties of CSS
      document.body.classList.add('offline');
      //generate Alert that user in Offline Mode
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Offline",
        showConfirmButton: false,
        timer: 1500
      });
    } else {

      //by dbl Click Removing Properties of CSS
      document.body.classList.remove('offline');

      //generate Alert that user in Online Mode
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Online",
        showConfirmButton: false,
        timer: 1500
      });
    }

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
