import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from "../services/post.services";
import {Router} from "@angular/router";
import {User} from "../models/User";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

user :User;

  constructor(private postService: PostService ,private userService :UserService, private router :Router) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
      this.user=this.userService.user; // je recupere l'instance
      this.postService.addPost(f.value.title, f.value.content , this.user);
      this.postService.emitPostSubject();
      this.router.navigate(['/posts']);
   }
}
