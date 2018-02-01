import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp2',
  // templateUrl: './my-comp2.component.html',
  template:`
  
  <div style="width:450px;height:300px;background-color:yellow">
  <h1> this is simple child routing</h1>
  <ul>
  <li>
    <h2><a routerLink="member3">child1</a></h2>
  </li>
  <li>
    <h2><a routerLink="">child 2</a></h2>
  </li>
</ul>
<hr>

<router-outlet></router-outlet>
  
  `,
  styleUrls: ['./my-comp2.component.css']
})
export class MyComp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
