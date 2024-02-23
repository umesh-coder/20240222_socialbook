import { Component } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrl: './leftside.component.css'
})
export class LeftsideComponent {

  shortcuts = [
    { name: 'BJP', imageUrl: 'https://i.postimg.cc/hPVmKWD8/Bharatiya-Janata-Party-logo-svg.png' }
  ];

}
