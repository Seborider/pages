import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80'
    },

    {
      title: 'Mountain with nightsky',
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'Forrest from above',
      url: 'https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ycmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'Dune in the desert',
      url: 'https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },

  ]
}
