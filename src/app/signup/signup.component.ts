import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AgencyService } from '../agency/agency.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    password: null,
    mobile_number: null,

    agency_code: null,
    agency_name: null,
    agency_detail: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  userId: any;

  constructor(private authService: AuthService, private route: Router, private agencyService: AgencyService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { firstname, lastname, username, email, password, mobile_number, agency_code, agency_name, agency_detail } = this.form;
    console.log(this.form);
    this.authService.register(firstname, lastname, username, email, password, mobile_number, agency_code, agency_name, agency_detail).subscribe(
      data => {
        console.log(data);
        this.userId = data.id;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
