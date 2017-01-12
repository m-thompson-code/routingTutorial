import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sep-route',
  template: `
    <p>
      sep-route Works!
    </p>
    <a routerLink="/sepChild" activeRouterLink="active">Go to sep child page</a>
    <a routerLink="/sepStepChild" activeRouterLink="active">Go to sep step child page</a>
    <input type="text" [value] #test>
    <p>{{ test.value }}</p>
    <button type="button" class="btn btn-primary" (click)=goToChildWithID()>Go To Child With ID</button>
    <p>ID: {{ id }} </p>
    <p *ngIf="!id">ID: Undefined :0</p> 
  `,
  styles: []
})
export class SepRouteComponent implements OnInit {
  public id: number;
  constructor() { }

  ngOnInit() {
  }

}
