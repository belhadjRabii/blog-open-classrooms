import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/User";
import {Post} from "../models/Post";
import {UserService} from "../services/user.services";
import {PostService} from "../services/post.services";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() loveIts : number;
  @Input() dontLoveIts : number;
  @Input() id:number;
  @Input() user :User;
  @Input() post :Post;
  uuser : User = this.userService.user;
  isDisabled : Boolean ;

  constructor(private userService:UserService , private postService : PostService , private router :Router) {  }

  ngOnInit() {
    if(this.uuser != null){
      this.isDisabled=this.userService.disableButton(this.post,this.uuser)
    }
  }

  likeIt(){
    this.loveIts++;
  }

  dislikeIt(){
    this.dontLoveIts++;
  }

  getBarPercentage(){

    let val = this.loveIts/(this.loveIts + this.dontLoveIts)*100;
    return val + "%";
  }

  goToPostToEditByID(id:number){
    this.postService.getPostServiceByID(id);
    this.router.navigate(['/editPost/'+this.id]);
  }

  deletePost(id:number){
    console.log("ID : "+id);
    this.postService.deletePost(id);
    this.router.navigate(['/posts']);

  }
}
