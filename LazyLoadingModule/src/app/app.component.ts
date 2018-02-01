
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My Lazy loading example </h1>
    <nav>
      <a routerLink="eager">Eager</a>
      <a routerLink="lazy">Lazy</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {}