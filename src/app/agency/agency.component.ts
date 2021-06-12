import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Agency } from './agency.model';
import { AgencyService } from './agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  // agency?:Agency;
  user?: any;
  agency?:any;

  constructor(private agencyService: AgencyService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.getAgency(this.user.id);
  }

  getAgency(id?:number): void {
    this.agencyService.getByUser(id)
      .subscribe(
        data => {
          this.agency = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
