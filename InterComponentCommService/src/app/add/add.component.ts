import { Component, OnInit } from '@angular/core';
import { DataStorerService } from '../data-storer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  // styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private storage:DataStorerService) { }

  ngOnInit() {
  }

  onClickMe(data) {
console.log(data);
this.storage.addData(data);
  }
}
