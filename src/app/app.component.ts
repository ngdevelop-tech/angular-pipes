import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today = new Date();
  a = 0.2546;

  languages = ['Java','PHP', '.Net','JQuery', 'JavaScript','Angular','AngularJS']

  data = {
    'id': 20,
    'name': {
      'firstname': 'Angular',
      'lastname': 'Pipes'
    }
  };

  emogieMap = {'happy':':-)', 'sad':':-(' ,'other':':-|'};
  

  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
