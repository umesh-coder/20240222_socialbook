import { Component } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {

  members = [
    { name: 'Narendra', image: 'https://i.postimg.cc/dQpzWMsw/modi.png', profile_img: 'https://i.postimg.cc/dQpzWMsw/modi.png' },
    { name: 'Amit', image: 'https://i.postimg.cc/C1SvXSSr/story.jpg', profile_img: 'https://i.postimg.cc/Njf9Fnb9/amit.png' },
    { name: 'Yogi', image: 'https://i.postimg.cc/5ycckjsc/yogi.jpg', profile_img: 'https://i.postimg.cc/5ycckjsc/yogi.jpg' },
    { name: 'Rahul', image: 'https://i.postimg.cc/q7tV4WDx/rahul.jpg', profile_img: 'https://i.postimg.cc/q7tV4WDx/rahul.jpg' }
  ];


  posts = [
    {
      userName: 'Narendra Modi',
      timestamp: 'June 24 2021, 13:40 pm',
      profilePic: 'https://i.postimg.cc/dQpzWMsw/modi.png',
      postText: 'Prime Minister Narendra Modi on Tuesday expressed that his relationship with Jammu and Kashmir spans over 40 years during a Viksit Bharat programme. He emphasised that a developed Jammu & Kashmir is essential for achieving a developed India, and the central governments numerous developmental projects in Jammu and Kashmir are dedicated to transforming that vision into a reality.Stay tuned for a detailed analysis of how PM Modis development plan is being put into action in the region.',
      imageSrc: 'https://i.postimg.cc/tCRxxFf1/post1.webp',
      like: 100,
      Comments: 200,
      shares: 50
    },
    {
      userName: 'Narendra Modi',
      timestamp: 'June 24 2021, 13:40 pm',
      profilePic: 'https://i.postimg.cc/dQpzWMsw/modi.png',
      postText: 'Special Session Parliament Update: नई संसद में सांसदों ने बेहद गर्मजोशी से आगमन किया है. प्रधानमंत्री नरेंद्र मोदी ने जैसे ही नए संसद भवन में एंट्री ली, तो सभी सांसदों ने मेज थप-थपाकर उनका स्वागत किया. तो वहीं कुछ सांसदों ने भारत माता की जय के नारे लगाए. ',
      imageSrc: 'https://i.postimg.cc/C1LRqgP3/post2.jpg',
      like: 300,
      Comments: 200,
      shares: 50
    },
    {
      userName: 'Narendra Modi',
      timestamp: 'June 24 2021, 13:40 pm',
      profilePic: 'https://i.postimg.cc/dQpzWMsw/modi.png',
      postText: 'Like and share this video with friends, tag Vkive Tutorials facebook page on your post. Ask your dobuts in the comments. #VkiveTutorials #YoutubeChannel',
      imageSrc: 'https://i.postimg.cc/C1LRqgP3/post2.jpg',
      like: 300,
      Comments: 200,
      shares: 50
    },
    {
      userName: 'Narendra Modi',
      timestamp: 'June 24 2021, 13:40 pm',
      profilePic: 'https://i.postimg.cc/dQpzWMsw/modi.png',
      postText: 'Like and share this video with friends, tag Vkive Tutorials facebook page on your post. Ask your dobuts in the comments. #VkiveTutorials #YoutubeChannel',
      imageSrc: 'https://i.postimg.cc/C1LRqgP3/post2.jpg',
      like: 300,
      Comments: 200,
      shares: 50
    },


    // Add more posts as needed
  ]

  userProfilePic = 'https://i.postimg.cc/dQpzWMsw/modi.png';
  userName = 'Narendra Modi';
  postContent: string = '';

  getFirstName(fullName: string): string {
    const names = fullName.split(' ');
    return names[0];
  }

}
