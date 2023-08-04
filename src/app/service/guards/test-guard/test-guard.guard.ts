import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContractServiceService } from '../../contract-service.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuardGuard implements CanActivate {
  constructor(private contractService: ContractServiceService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let r = !this.contractService?.globeData?.stakeinTest;
      if(!environment.testStake) {
        return true;
      } else {
        if(r) {
          return true;
        } else {
          this.router.navigateByUrl('/stake-test');
          return false;
        }
      }
  }
  
}
