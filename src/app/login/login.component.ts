import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee';
import { EmployeeService } from '../employee-list/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title ="NGP Team";
  employee = new Employee ();
  msg = '';
  constructor(private employeeService: EmployeeService, private router: Router){
}
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
    this.employeeService.getEmployeeByEmailID(this.employee).subscribe( data => {console.log('response received');
                                                                                 this.router.navigate(['/employees']);
  },
    error => {console.log('error occured');
              this.msg = 'Bad Credentials please enter valid emailid ';
});
}
}
