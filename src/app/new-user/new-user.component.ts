import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/user.services";
import {NgForm} from "@angular/forms";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    user:User;

  constructor(private userService :UserService , private router:Router) {}

  ngOnInit() {}

  onSubmitUser(f: NgForm){

    this.user = new User(this.userService.getLastID()+1, f.value.firstName,f.value.lastName,f.value.mail,f.value.password,null);
    this.userService.addUserService(this.user);

    let userParams : NavigationExtras = {
      queryParams: {
        'user':this.user.firstName
      }
    };

    this.router.navigate(['/posts'],userParams);
  }
}
