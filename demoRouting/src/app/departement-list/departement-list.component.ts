import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departement-list',
  template: `
    <p>
      departement-list works!
    </p>
  `,
  styles: []
})
export class DepartementListComponent implements OnInit {

  departements = [
    {"id":1, "name": "angular"},
    {"id":2, "name": "node"},
    {"id":3, "name": "mongodb"},
    {"id":4, "name": "ruby"},
    {"id":5, "name": "boostrap"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
