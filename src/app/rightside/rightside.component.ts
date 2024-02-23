import { Component } from '@angular/core';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrl: './rightside.component.css'
})
export class RightsideComponent {

  events = [
    { date: '18', month: 'March', title: 'Adressing Nation', location: 'Hyderabad', link: '#' },
    { date: '22', month: 'June', title: 'Man ke Baat', location: 'Youtube', link: '#' }
  ];

  members = [
    { name: 'Narendra Modi', imageSrc: 'https://i.postimg.cc/dQpzWMsw/modi.png' },
    { name: 'Amit Shah', imageSrc: 'https://i.postimg.cc/Njf9Fnb9/amit.png' },
    { name: 'Yogi Adityanath', imageSrc: 'https://i.postimg.cc/5ycckjsc/yogi.jpg' },
    { name: 'Rahul Gandhi', imageSrc: 'https://i.postimg.cc/q7tV4WDx/rahul.jpg' }
  ];


  ads_img = "https://i.postimg.cc/RV404Qrb/bjpads.jpg"

}
