import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EagerComponentComponent } from './eager-component/eager-component.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponentComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
