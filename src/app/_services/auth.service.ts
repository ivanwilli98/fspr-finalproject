import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const REGISTER_API = 'http://localhost:8080/api/v1/user/';
const AUTH_API = 'http://localhost:8080/api/auth/';
// const AGENCY_API = 'http://localhost:8080/api/v1/agency/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      'username' : username,
      'password' : password
    }, httpOptions);
  }

  register(firstname: string, lastname: string, username: string, email: string, password: string, mobile_number: string, agency_code: string, agency_detail: string, agency_name: string): Observable<any> {
    return this.http.post(REGISTER_API + 'signup', {
      'email' : email,
      'firstName' : firstname,
      'lastName' : lastname,
      'mobileNumber' : mobile_number,
      'password' : password,
      'username' : username,
      'role' : ['admin','user'],
      'code' : agency_code,
      'details' : agency_detail,
      'name' : agency_name
    }, httpOptions);
  }


  // agency(code: string, details: string, name: string, id: number) {
  //   return this.http.post(AGENCY_API, {
  //     'code' : code,
  //     'details' : details,
  //     'name' : name,
  //     'id' : id
  //   }, httpOptions);
  // }
}
