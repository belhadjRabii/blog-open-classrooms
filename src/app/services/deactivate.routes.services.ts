import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserService} from "./user.services";
import {Injectable} from "@angular/core";

@Injectable()
export class DeactivateRoutesServices implements CanActivate{

  constructor(private userService:UserService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.userService.isLoggedIn;
  }

}
