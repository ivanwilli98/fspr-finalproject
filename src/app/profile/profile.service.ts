import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

const baseUrl = 'http://localhost:8080/api/v1/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token?: any;
  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private route: Router) { }

  getToken() {
    this.token = this.tokenStorage.getToken();
    
    if(this.token != null) {
      this.httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer '+this.token
        })
      }
    }
  }

  updateUser(id: any, firstName:any, lastName:any, mobileNumber:any) {
    this.getToken();
    console.log(id, firstName, lastName, mobileNumber);
    
    const body = {
      "firstName": firstName,
      "lastName": lastName,
      "mobileNumber": mobileNumber
    }
    
    return this.http.put(`${baseUrl}/${id}`, body, this.httpOptions).subscribe({
      next:data => {
        this.tokenStorage.saveUser(data);
        window.location.reload(); 

        // this.route.navigate(['profile']);
      },
      error:error => {
        console.error('There was an error!', error);
      }
    });
  }

  updatePassword(id:any, password:any) {
    this.getToken();
    console.log(id, password);
    const body = {
      "password" : password
    }
    return this.http.put(`${baseUrl}/password/${id}`, body, this.httpOptions).subscribe({
      next:data => {
        window.location.reload(); 
      },
      error:error => {
        console.error('There was an error!', error);
      }
    });
    
  }
}