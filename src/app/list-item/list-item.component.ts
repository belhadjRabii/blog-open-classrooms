import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../services/post.services";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../models/Post";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.services";
import {User} from "../models/User";
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit , OnDestroy{

  postSubscription : Subscription;
  posts : Post[]=[];
  userName :string;
  user:User;

  constructor(private postService : PostService , private userService :UserService,
              private activatedRoute: ActivatedRoute , private router:Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      let userFirstName = params['user'];
      if((userFirstName != null)  &&   ( this.userService.user!=null )){
        this.userName=userFirstName;
      }else{
        this.router.navigate(['/posts']);
      }
    });
  }

  ngOnInit() {

    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts.sort((a,b) => {
          return (b.date).getTime() -  (a.date).getTime();
        });
      }
    );
    this.postService.emitPostSubject();

  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
