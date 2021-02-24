import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NgpIssuesComponent } from './ngp-issues/ngp-issues.component';
import { AddNewIssueComponent } from './add-new-issue/add-new-issue.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { ViewIssueComponent } from './view-issue/view-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateComponentComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    NavComponent,
    NgpIssuesComponent,
    AddNewIssueComponent,
    UpdateIssueComponent,
    ViewIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
