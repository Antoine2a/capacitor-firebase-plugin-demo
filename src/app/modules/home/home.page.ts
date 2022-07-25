import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public plugins = [
    {
      name: 'Firebase Analytics',
      url: '/firebase-analytics',
    },
    {
      name: 'Firebase App',
      url: '/firebase-app',
    },
    {
      name: 'Firebase Cloud Messaging',
      url: '/firebase-messaging',
    },
    {
      name: 'Firebase Crashlytics',
      url: '/firebase-crashlytics',
    },
    {
      name: 'Firebase Performance',
      url: '/firebase-performance',
    },
  ];

  constructor() {}
}
