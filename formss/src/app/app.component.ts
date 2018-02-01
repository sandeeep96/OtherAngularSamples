import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forms;

ngOnInit() {

  this.forms = new FormGroup({
    firstName: new FormControl('sai'),
    lastName: new FormControl( ' ' )
      });
}

   onSubmit= function(form){
    console.log(form.firstName);
}

}
