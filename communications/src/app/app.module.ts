import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyOwnCompComponent } from './my-own-comp/my-own-comp.component';
import { MyOwnComp1Component } from './my-own-comp1/my-own-comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyOwnCompComponent,
    MyOwnComp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
