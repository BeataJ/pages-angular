import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Surfing',
      url:
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter and Snow',
      url:
        'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Freeway, Highway',
      url:
        'https://images.unsplash.com/photo-1541807360746-039080941306?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Surfing',
      url:
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter and Snow',
      url:
        'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Freeway, Highway',
      url:
        'https://images.unsplash.com/photo-1541807360746-039080941306?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Surfing',
      url:
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter and Snow',
      url:
        'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Freeway, Highway',
      url:
        'https://images.unsplash.com/photo-1541807360746-039080941306?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Surfing',
      url:
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter and Snow',
      url:
        'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Freeway, Highway',
      url:
        'https://images.unsplash.com/photo-1541807360746-039080941306?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Surfing',
      url:
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Winter and Snow',
      url:
        'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Freeway, Highway',
      url:
        'https://images.unsplash.com/photo-1541807360746-039080941306?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  checkWindowIndex(index: number): any {
    return Math.abs(this.currentPage - index) < 5;
  }
}
