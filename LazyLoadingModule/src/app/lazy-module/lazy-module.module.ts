import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponent } from './lazy-component/lazy-component.component';
//import { routing } from './lazy.routing';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LazyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }

// import { NgModule } from '@angular/core';

// import { LazyComponent }   from './lazy.component';
// import { routing } from './lazy.routing';

// @NgModule({
//   imports: [routing],
//   declarations: [LazyComponent]
// })
// export class LazyModule {}