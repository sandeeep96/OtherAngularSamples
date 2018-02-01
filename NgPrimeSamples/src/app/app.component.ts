import { Component } from '@angular/core';
import {MenuItem} from './menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  checked1: boolean = false;
  
  checked2: boolean = true;

  piedata: any;

  data: any;
  
  items: MenuItem[];
  
  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Stats', icon: 'fa-bar-chart'},
          {label: 'Calendar', icon: 'fa-calendar'},
          {label: 'Documentation', icon: 'fa-book'},
          {label: 'Support', icon: 'fa-support'},
          {label: 'Social', icon: 'fa-twitter'}
      ];
      
      this.activeItem = this.items[4];

      this.piedata = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };

        this.data = {
          labels: ['A','B','C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
  }

  
}
