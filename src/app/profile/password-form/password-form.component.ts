import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  form:any = {
    email : null,
    password : null
  }

  user?:any;
  constructor(private tokenStorage: TokenStorageService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.setUser();
  }

  setUser() : void {
    this.form.email = this.user.email;
  }

  onSubmit() : void {
    const { password } = this.form;
    
    this.profileService.updatePassword(this.user.id, password);
    // window.location.reload(); 
  }

}
