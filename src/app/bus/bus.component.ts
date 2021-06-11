import { Component, OnInit } from '@angular/core';
import { Agency } from '../agency/agency.model';
import { AgencyService } from '../agency/agency.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { BusService } from './bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  form: any = {
    code: null,
    capacity: null,
    model: null
  };
  user?: any;
  bus?: any;
  errorMessage = '';
  agencyId : any;
  agency?:any;

  constructor(private busService: BusService, private tokenStorage: TokenStorageService, private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.getAgency(this.user.id);
    
    this.getAllBusByAgencyId();
  }

  getAgency(id?:number): void {
    this.agencyService.getByUser(id)
      .subscribe(
        data => {
          this.agency = data;
          // console.log(data);
          // console.log(this.agency?.id);
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

  onSubmit() : void {
    const { code, capacity, model } = this.form;
    this.busService.add(code, capacity, model).subscribe(
      data => {
        // console.log(data);
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

}
