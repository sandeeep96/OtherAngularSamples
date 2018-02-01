import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-own-comp',
  templateUrl: './my-own-comp.component.html',
  styleUrls: ['./my-own-comp.component.css']
})
export class MyOwnCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('n') nn:String;
  @Input('i') ii:String;

  @Output() gotIt:EventEmitter <any>=new EventEmitter();

  sendThisData(){
    console.log("inside my own comp")
    let obj={
      nnn:this.nn,
      iii:this.ii
    }
    this.gotIt.emit(obj);
  }

}
