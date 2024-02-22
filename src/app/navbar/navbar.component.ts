import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  settingsMenu: HTMLElement | any;
  darkBtn: HTMLElement | any;


  constructor() { }

  ngOnInit(): void {

    this.settingsMenu = document.querySelector(".settings-menu");
    this.darkBtn = document.getElementById("dark-btn");

    this.loadTheme(); // Load theme when component initializes
    console.log("hello");


  }


  test(){

    console.log("test demo");
    
  }

  settingsMenuToggle(): void {
    if (this.settingsMenu) {
      this.settingsMenu.classList.toggle("settings-menu-height");
    }
  }

  darkBtnClick(): void {
    if (this.darkBtn) {
      this.darkBtn.classList.toggle("dark-btn-on");
      document.body.classList.toggle("dark-theme");

      if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  }

  loadTheme(): void {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.body.classList.remove("dark-theme");
      if (this.darkBtn) {
        this.darkBtn.classList.remove("dark-btn-on");
      }
    } else if (theme === "dark") {
      document.body.classList.add("dark-theme");
      if (this.darkBtn) {
        this.darkBtn.classList.add("dark-btn-on");
      }
    } else {
      localStorage.setItem("theme", "light");
    }
  }

}
