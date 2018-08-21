import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template:`
  <div>
  <h2>Employee list</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  </div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    //this.employees= this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => this.employees=data);
  }

}
