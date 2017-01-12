import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sep-child',
  template: `
    <p>
      sep-child Works!
      {{ id }}
    </p>
  `,
  styles: []
})
export class SepChildComponent implements OnInit {
  public id: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
