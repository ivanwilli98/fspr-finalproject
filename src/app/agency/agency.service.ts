import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

const baseUrl = 'http://localhost:8080/api/v1/agency';

@Injectable({
  providedIn: 'root'
})

export class AgencyService {
  token?: any;
  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

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

  getByUser(id: any) {
    this.getToken();
    return this.http.get(`${baseUrl}/getbyuser/${id}`,this.httpOptions);
  }

  updateAgency(id: any, code:string, name:string, details:string, owner:number) {
    this.getToken();
    const body = {
      "code": code,
      "details": details,
      "name": name,
      "owner": owner
    }
    return this.http.put(`${baseUrl}/${id}`, body, this.httpOptions).subscribe({
      error:error => {
        console.error('There was an error!', error);
      }
    });
  }

  postAgency(code:string, name:string, details:string, owner:number) {
    this.getToken();
    const body = {
      "code": code,
      "details": details,
      "name": name,
      "owner": owner
    }
    return this.http.post(`${baseUrl}`, body).subscribe({
      error:error => {
        console.error('There was an error!', error);
      }
    });
  }
}
