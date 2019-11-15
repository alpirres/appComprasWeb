import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  ngOnInit () {
    firebase.initializeApp({
    apiKey: 'AIzaSyDDxozTH9hH8V42oUCX-08_xMf3g6CHkMw',
    authDomain: 'https://appcompras-4fca2.firebaseio.com/'
    });
    }
}
