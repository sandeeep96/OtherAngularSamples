import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'AngulAr 4';
  day=new Date(1995,4,12);

  arr=[22,5,3,1,43,12,102,111,120,124,20];
}
