import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency/agency.service';
import { BusService } from '../bus/bus.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { TripsService } from './trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  form: any = {
    bus_id: null,
    source_stop_id: null,
    dest_stop_id : null,
    journey_time : null,
    fare : null,
  };
  user?: any;
  trip?: any;
  errorMessage = '';
  agencyId : any;
  agency?:any;
  bus?:any;
  stop?:any;

  constructor(
    private tripsService: TripsService, 
    private tokenStorage: TokenStorageService, 
    private agencyService: AgencyService,
    private busService : BusService
    ) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    console.log(this.user);
    this.getAgency(this.user.id);
    
    this.bus = this.getAllBusByAgencyId();
    this.getAllStopAndDestination();
    
    this.getAllTrips();
  }

  getAllStopAndDestination(): void {
    this.tripsService.getAllStop()
    .subscribe(
      data => {
        this.stop = data;
      },
      error => {
        console.log(error);
      });
  }

  getAllBusByAgencyId(): void {
    this.busService.getAllBusByAgencyId()
      .subscribe(
        data => {
          this.bus = data;
          console.log(this.bus);
        },
        error => {
          console.log(error);
        });
  }

  getAgency(id?:number): void {
    this.agencyService.getByUser(id)
      .subscribe(
        data => {
          this.agency = data;
          this.agencyId = this.agency.id;
          
          // console.log(data);
          // console.log(this.agency?.id);
          
        },
        error => {
          console.log(error);
        });
  }

  getAllTrips(): void {
    this.tripsService.getAllTrips()
      .subscribe(
        data => {
          this.trip = data;
          // console.log(this.trip);
        },
        error => {
          console.log(error);
        });
  }

  // getAllTripsByAgencyId(): void {
  //   this.tripsService.getAllTripsByAgencyId()
  //     .subscribe(
  //       data => {
  //         this.trip = data;
  //         // console.log(this.trip);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  onSubmit() : void {
    const { bus_id, source_stop_id, dest_stop_id , journey_time , fare} = this.form;

    this.tripsService.add(bus_id, source_stop_id, dest_stop_id , journey_time , fare, this.agencyId).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

}
