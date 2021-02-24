import { Component, OnInit } from '@angular/core';
import { Issues } from '../employee-list/issues';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {
  id!: number;
  issues = new Issues();
  constructor(private employeeService: EmployeeService,
    private route:ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getIssueByID(this.id).subscribe(data => {
      this.issues = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.employeeService.updateissue(this.id, this.issues).subscribe(data => {
      this.goToIssueList();
    },
    error =>  console.log(error));
  }
  goToIssueList(){

    this.router.navigate(['/ngp-issues']);
  }
}
