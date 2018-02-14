import { Component, OnInit } from '@angular/core';

import { DataStorerService} from '../data-storer.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataStorage: DataStorerService) { }

  myArray: Array<string>=[];

  ngOnInit() {
    this.dataStorage.getAllNames().then(resultArray => {
      this.myArray = resultArray;
      // this.count =this.myArray.length;
    })
  }

}
