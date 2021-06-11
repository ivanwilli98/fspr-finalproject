import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  // httpOptions:any;
  // getTokenNew() {
  //   var tokenKey = localStorage.getItem('appToken');
  //   if(tokenKey!=null) {
  //     var tkn = JSON.parse(tokenKey);
  //     this.httpOptions= {
  //       headers : new HttpHeaders({
  //         'Content-Type' : 'application/json',
  //         'Authorization' : 'Bearer '+tkn.token
  //       })
  //     }
  //   }
  // }
}
