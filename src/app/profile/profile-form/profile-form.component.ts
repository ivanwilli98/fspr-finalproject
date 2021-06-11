import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  form: any = {
    id: null,
    firstName: null,
    lastName: null,
    mobileNumber: null,
  };

  user?:any;
  constructor(private profileService: ProfileService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.setUser();
  }

  setUser() : void {
    this.form.id = this.user.id;
    this.form.firstName = this.user.firstName;
    this.form.lastName = this.user.lastName;
    this.form.mobileNumber = this.user.mobileNumber;
  }


  onSubmit() : void {
    const { firstName, lastName, mobileNumber } = this.form;
    
    // console.log(this.user.id, firstName, lastName, mobileNumber);
    // console.log(this.profileService.updateUser(this.user.id, firstName, lastName, mobileNumber));
    
    this.profileService.updateUser(this.user.id, firstName, lastName, mobileNumber);
    // window.location.reload(); 
  }
}
