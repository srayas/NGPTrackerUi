import { Component, OnInit } from '@angular/core';
import { Issues } from '../employee-list/issues';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {

  id!: number;
  issue!:Issues;
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.issue = new Issues();
    this.employeService.getIssueByID(this.id).subscribe(data => {
      this.issue = data;
    });
    }
  }


