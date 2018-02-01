import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import {TabMenuModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', 
    redirectTo: 'ngPrime',
   pathMatch: 'full' },
  { path:'ngPrime', 
  component:AppComponent},
 
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    TabMenuModule,
    InputSwitchModule,
    TabViewModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
