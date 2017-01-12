import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SepRouteModule } from './sep-route/sep-route.module';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { SepRouteComponent } from './sep-route/sep-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SepRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SepRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
