import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { NgpIssuesComponent } from './ngp-issues/ngp-issues.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { ViewIssueComponent } from './view-issue/view-issue.component';
import { AddNewIssueComponent } from './add-new-issue/add-new-issue.component';
const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-component', component: CreateComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path:'ngp-issues', component: NgpIssuesComponent},
  {path: 'update-issue/:id', component: UpdateIssueComponent},
  {path: 'view-issue/:id', component: ViewIssueComponent},
  {path:'add-new-issue', component: AddNewIssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
