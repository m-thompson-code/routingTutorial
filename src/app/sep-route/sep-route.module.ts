import { NgModule }       from '@angular/core';

import { SepRouteRoutingModule } from './sep-route-routing.module';

import { SepChildComponent } from './sep-child.component';
import { SepStepChildComponent } from './sep-step-child.component';

@NgModule({
  imports: [
    // CommonModule,
    SepRouteRoutingModule
  ],
  declarations: [
    SepChildComponent,
    SepStepChildComponent
  ],
  providers: []
})

export class SepRouteModule { }