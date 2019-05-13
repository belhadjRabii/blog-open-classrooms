import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.services";
import {FormGroup , FormBuilder} from "@angular/forms";
import {User} from "../models/User";
import {NavigationExtras, Router} from "@angular/router";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-connect-user',
  templateUrl: './connect-user.component.html',
  styleUrls: ['./connect-user.component.scss']
})
export class ConnectUserComponent implements OnInit {

  userForm : FormGroup;
  alertMessage:string;

  constructor(private formBuilder : FormBuilder ,
              private userService :UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mail:['',[Validators.required , Validators.email]],
      password:['',Validators.required]
    });
  }

  onSubmitToFoundUSer(){

    const formValue = this.userForm.value;

    let userToFound = this.userService.findUser(formValue['mail'],formValue['password']);

    if(userToFound != null) {

      let userParams: NavigationExtras = {
        queryParams: {
          'user': userToFound.firstName
        }
      };
      this.router.navigate(['/posts'], userParams);

    }else{
      this.alertMessage  = formValue['mail'];
    }
  }
}
