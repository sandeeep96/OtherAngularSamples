import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-own-comp1',
  templateUrl: './my-own-comp1.component.html',
  styleUrls: ['./my-own-comp1.component.css']
})
export class MyOwnComp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  okGotIt(data){
    console.log("got the data to own1"); 


  }
}
