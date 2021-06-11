import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

const baseUrl = 'http://localhost:8080/api/v1/trip';
const stopurl = 'http://localhost:8080/api/v1/stop';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  token?: any;
  httpOptions: any;
  agencyId?: number;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { 
    
  }

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
  getAllTrips() {
    this.getToken();
    return this.http.get(`${baseUrl}/get/byuser`,this.httpOptions);
  }
  // getAllTripsByAgencyId() {
  //   this.getToken();
  //   return this.http.get(`${baseUrl}get/agency/`,this.httpOptions);
  // }

  getAllStop() {
    this.getToken();
    return this.http.get(`${stopurl}/`,this.httpOptions);
  }

  add(bus_id : number, source_stop_id : number, dest_stop_id : number , journey_time : number , fare : number, agencyId : number) {
    // this.getToken();
    // this.agencyId = this.tokenStorage.getUser().id;
    return this.http.post(`${baseUrl}/`, {
        'agencyid' : agencyId,
        'busId' : bus_id,
        'destStopid' : dest_stop_id,
        'fare' : fare,
        'journeyTime' : journey_time,
        'sourceStopId' : source_stop_id
      }, this.httpOptions);
  }
}
