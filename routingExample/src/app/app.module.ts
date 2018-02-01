import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComp1Component } from './my-comp1/my-comp1.component';
import { MyComp2Component } from './my-comp2/my-comp2.component';
import { MyComp3Component } from './my-comp3/my-comp3.component';
import { MyComp4Component } from './my-comp4/my-comp4.component';
import { MyComp5Component } from './my-comp5.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComp1Component,
    MyComp2Component,
    MyComp3Component,
    MyComp4Component,
    MyComp5Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
    {
      path:'member1',
      component: MyComp1Component,
      children:[
        {
          path:'type/:character',
          component: MyComp5Component
        }]
    },
    {
      path:'member2',
      component: MyComp2Component,
      children:[
        {
          path:'member3',
          component: MyComp3Component
        },
        {
          path:'',
          component: MyComp4Component
        }]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
