import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgencyService } from '../agency/agency.service';
import { TokenStorageService } from '../_services/token-storage.service';

const baseUrl = 'http://localhost:8080/api/v1/bus';

@Injectable({
  providedIn: 'root'
})

export class BusService {
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

  getAllBusByAgencyId() {
    this.getToken();
    return this.http.get(`${baseUrl}/get/byuser`,this.httpOptions);
  }

  add(code:string, capacity:number, model:string) {
    this.getToken();
    return this.http.post(`${baseUrl}/add/byuser`, {
        'code' : code,
        'capacity' : capacity,
        'make' : model
      }, this.httpOptions);
  }
}
