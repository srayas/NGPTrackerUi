import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee';
import { EmployeeService } from '../employee-list/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  employee = new Employee ();
  msg = '';
  constructor( private employeeService: EmployeeService, private router: Router){
   }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => {console.log('error occured');
              this.msg = 'This employee with this email is already exist ';
});

  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
