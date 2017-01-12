import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <button routerLink="/user">Go to user</button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
