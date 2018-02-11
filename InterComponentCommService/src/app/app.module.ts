import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { CountComponent } from './count/count.component';
import { DataStorerService} from './data-storer.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    CountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataStorerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
