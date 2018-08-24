import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template: `
  <div>
  <h2>Employee list</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}} => name : {{employee.name}}, age : {{employee.age}}</li>
  </ul>
  </div>
  `,
  styleUrls: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {   }

  ngOnInit() {
    //this.employees= this._employeeService.getEmployees();
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error=> this.errorMsg = error);
  }
}
