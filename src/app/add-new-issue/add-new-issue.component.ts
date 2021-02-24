import { Component, OnInit } from '@angular/core';
import { Issues } from '../employee-list/issues';
import { EmployeeService } from '../employee-list/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-issue',
  templateUrl: './add-new-issue.component.html',
  styleUrls: ['./add-new-issue.component.css']
})
export class AddNewIssueComponent implements OnInit {

  issues = new Issues();
  msg='';
  constructor( private employeeService: EmployeeService, private router: Router){
  }
public listItems:Array<string>=[];
  ngOnInit(): void {
 
  }
  saveIssue(){
    this.employeeService.createIssue(this.issues).subscribe(data => {
      console.log(data);
      this.goToIssueList();
    },
    error => {console.log('error occured');
              this.msg = 'This Issue with this Mailsubject is already exist ';
});

  }
  goToIssueList(){
    this.router.navigate(['/ngp-issues']);
  }


  onSubmit(){
    console.log(this.issues);
    this.saveIssue();
  }

}
