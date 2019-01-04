import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../../models/user';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public listUserDefault = [
    {username : 'hth1', password: '123456'},
    {username : 'hth2', password: '123456'},
    {username : 'hth3', password: '123456'},
    {username : 'hth4', password: '123456'},
  ];
  isShowLogout : boolean;
  constructor(private http : HttpClient,
    private route : Router) { }
    login(username : string , password : string): User {
      var user =  this.listUserDefault.find(x => x.username == username && x.password == password) as User;
      if(user != null){
        this.isShowLogout = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }
    logout() {
      //remove user logged
      localStorage.removeItem('currentUser');
      this.isShowLogout = false;
      this.route.navigate(['/login']);
    }
}
