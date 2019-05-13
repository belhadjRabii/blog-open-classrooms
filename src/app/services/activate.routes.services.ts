import {UserService} from "./user.services";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class ActivateRoutesServices implements CanActivate {

  constructor(private userService:UserService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.userService.isLoggedIn;
  }
 }
