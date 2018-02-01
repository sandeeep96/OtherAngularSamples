import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppComponent1 } from './app.component.1';
import { AppComponent2 } from './app.component.2';
import { AppComponent3 } from './app.component.3';
import { AppComponent4 } from './app.component.4';


 const routes: Routes = [
 // { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: AppComponent1 },
  { path: 'component-two', component: AppComponent2 },
  { path: 'component-three', component: AppComponent3 , outlet: 'sidebar1' },
  { path: 'component-four', component: AppComponent4 , outlet: 'sidebar2' },
  { path: 'component-four', component: AppComponent4 , outlet: 'sidebar1' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    AppComponent1,
    AppComponent2,
    AppComponent3,
    AppComponent4,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
