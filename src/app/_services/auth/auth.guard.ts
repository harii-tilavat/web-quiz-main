import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = JSON.parse(localStorage.getItem('admin') as string);
    console.log("Value of User: ", user);
    if (user) {
      return !!user;
    } else {
      return this.router.createUrlTree(['admin', 'login']);
    }
    // return this.authService.user.pipe(map((user)=>{
    //   console.log("IsAuth: ", !!user);
    //     if(user){
    //       return !!user;
    //     }else{
    //       return this.router.createUrlTree(['/admin','login']);
    //     }
    // }));
  }
  constructor(private authService: AuthService, private router: Router) { }
}
