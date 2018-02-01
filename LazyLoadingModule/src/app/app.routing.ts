// import { NgModule }             from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

//////////////////////////////////// you will import AppRoutingModule in root module /////////////////////////////

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponentComponent } from './eager-component/eager-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponentComponent },
  { path: 'lazy', loadChildren: './lazy-module/lazy-module.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);