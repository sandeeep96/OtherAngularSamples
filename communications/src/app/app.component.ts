import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  idid;
  namename;

  employeeRecord=[
    {
      id:'101',
      name:'naga'
    },
    {
      id:'102',
      name:'sai'
    },
    {
      id:'103',
      name:'sandeep'
    }
  ];

  okGotIt(data){
    console.log("got the data to appcomponent1"); 
    this.idid=data.iii;
    this.namename=data.nnn;

  }

  GotIt(data){
    console.log("got the data to appcomponent2");  
    }
}
