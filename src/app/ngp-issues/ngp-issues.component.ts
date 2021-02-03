import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-list/employee.service';
import { Router } from '@angular/router';
import { Issues } from '../employee-list/issues'
import { filter } from 'minimatch';

@Component({
  selector: 'app-ngp-issues',
  templateUrl:'./ngp-issues.component.html',
  styleUrls: ['./ngp-issues.component.css']
})
export class NgpIssuesComponent implements OnInit {

  issues!:Issues[];
  constructor(private employeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
  
    this.getIssueList();
  }
  // tslint:disable-next-line: typedef
  private getIssueList(){
    this.employeService.getIssueList().subscribe(data => {
      this.issues = data;
    } );
  }
  updateIssue(id: number){
    this.router.navigate(['employee-details', id]);
  }
  issuesDetails(id: number){
    this.router.navigate(['update-employee', id]);
  }
  
}
export  class NgMultiSelectDropDownModule {}
