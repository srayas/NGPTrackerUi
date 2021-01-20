import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee';
import { EmployeeService } from '../employee-list/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  // tslint:disable-next-line: typedef
  private getEmployees(){
    this.employeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    } );
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number){
    this.employeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }
}
