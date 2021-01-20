import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-list/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8081/api/v1/employees';
  constructor(private httpClient: HttpClient) { }

  getEmployeeByEmailID(employee: Employee): Observable <Employee>{
    return this.httpClient.post<Employee>(`${this.baseUrl}/login`, employee);

  }

  getEmployeesList(): Observable<any>{
    return this.httpClient.get(this.baseUrl);

  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }
  getEmployeeByID(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}
