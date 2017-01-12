import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SepChildComponent } from './sep-child.component';
import { SepStepChildComponent } from './sep-step-child.component';

const sepRouteRoutes: Routes = [
  { path: 'sepChild',  component: SepChildComponent },
  { path: 'sepStepChild',  component: SepStepChildComponent }
  // { path: 'sepChild/:id', component: SepChildComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(sepRouteRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SepRouteRoutingModule { }