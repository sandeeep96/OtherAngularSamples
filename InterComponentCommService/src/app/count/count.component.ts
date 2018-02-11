import { Component, OnInit } from '@angular/core';
import { DataStorerService } from '../data-storer.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(private dataStorage: DataStorerService) { }

  myArray: Array<string>=[];

  count:number=0;
  ngOnInit() {
    this.myArray=this.dataStorage.getAllNames();
    this.count=this.myArray.length;
  }

}
