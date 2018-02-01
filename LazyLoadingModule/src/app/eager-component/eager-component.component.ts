import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager-component',
  template: '<p>This is Eager Component</p>'
  // templateUrl: './eager-component.component.html',
  // styleUrls: ['./eager-component.component.css']
})
export class EagerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
