import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp1',
  // templateUrl: './my-comp1.component.html',
  template:`
  
  <div style="width:550px;height:350px;background-color:#00ff00">
  <h1> this is routing with parameters</h1>
  
  <ul>
  <li>
    <h2><a [routerLink]="['type','good']">Good</a></h2>
  </li>
  <li>
    <h2><a [routerLink]="['type','bad']">Bad</a></h2>
  </li>
</ul>
<hr>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./my-comp1.component.css']
})
export class MyComp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
