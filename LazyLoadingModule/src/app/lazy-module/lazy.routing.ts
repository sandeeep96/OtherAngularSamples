import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy-component/lazy-component.component';

const routes: Routes = [
  { path: '', component: LazyComponent }
];

// expdort const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const routing: ModuleWithProviders = RouterModule.forChild(routes);