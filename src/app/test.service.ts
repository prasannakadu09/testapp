import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

API_URL = 'assets/employee.json';

  constructor(private http: HttpClient) { }

  public getEmployee(){
    return this.http.get(`${this.API_URL}`);
  }
}
