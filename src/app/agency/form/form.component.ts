import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-agency-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: any = {
    id: null,
    name: null,
    details: null,
    code: null
  };
  user: any;
  constructor(private agencyService: AgencyService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.getAgency(this.user.id);
  }

  getAgency(id?:number): void {
    this.agencyService.getByUser(id)
      .subscribe(
        data => {
          this.form = data;
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() : void {
    const { id, name, details, code, owner } = this.form;
    this.agencyService.updateAgency(id,code,name,details,owner);
    window.location.reload();
    // console.log(id, name, details, code);  
  }

}
