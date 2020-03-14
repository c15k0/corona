import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@corona/api-interfaces';

@Component({
  selector: 'corona-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  urlBase = 'https://api.covid19api.com/';
  constructor(private http: HttpClient) {}

}
