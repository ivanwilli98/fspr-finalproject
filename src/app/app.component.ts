import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ui-final-project';

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private location: Location) {
    
  }

  ngOnInit() {
    // console.log(!!this.tokenStorageService.getToken());
    // console.log(location.pathname);

    if(!!this.tokenStorageService.getToken() == false) {
      if(location.pathname !== '/signup') {
        this.router.navigate(['/login']);
      }
    }
    else if (!!this.tokenStorageService.getToken() == true && (location.pathname == '/signup' || location.pathname == '/login')) {
      this.router.navigate(['/dashboard']);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
