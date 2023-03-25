import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AvilandGuardGuard implements CanActivate {
  
  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.tokenService.getToken()) {
      const roles = this.tokenService.getAuthorities();
      if (roles.includes('ROLE_ADMIN')) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

} 
  
  //canActivate(
//route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //    console.log ('**CanActivate**');
  //    return true;
 // }
  
//}
