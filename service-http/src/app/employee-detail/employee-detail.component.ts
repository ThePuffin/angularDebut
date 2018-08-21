import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template: `
  <div>
  <h2>Employee list</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}} => name : {{employee.name}}, age : {{employee.age}}</li>
  </ul>
  </div>
  `,
  styleUrls: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []

  constructor(private _employeeService: EmployeeService) {   }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees()
;  }

}
