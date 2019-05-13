///<reference path="../services/post.services.ts"/>
import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.services";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Post} from "../models/Post";
import {isUndefined} from "util";
import {tryCatch} from "rxjs/internal/util/tryCatch";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  postContent : string;
  postTitle : string;
  postID : number;

  constructor(private postService :PostService , private activatedRoute : ActivatedRoute,
              private router :Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.postContent =  this.postService.getPostServiceByID(+id).contenu;
    this.postTitle =  this.postService.getPostServiceByID(+id).titre;
    this.postID =  this.postService.getPostServiceByID(+id).id;  // i'll customize
  }

  onSubmitToEdit(f: NgForm){

    let postToEdit = this.postService.getPostServiceByID(+f.value.id);

    this.postService.editPostService(f.value.title,f.value.content,postToEdit);

    this.router.navigate(['/posts']);
  }
}
