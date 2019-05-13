import {Subject, Subscription} from "rxjs";
import {Post} from "../models/Post";
import {User} from "../models/User";
import {Injectable, OnInit} from "@angular/core";
import {UserService} from "./user.services";
import {forEach} from "@angular/router/src/utils/collection";
import index from "@angular/cli/lib/cli";
@Injectable()
export class PostService {

  postSubject = new Subject<Post[]>(); // Encapsulation

  users:User[] = this.userService.getAllUsers();

  content:string='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page . ' +
             '\ Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page .';

  private posts =[
    new Post(1,"Mon premier post",this.content, new Date('December 17, 2015 03:24:00' ),1,2,this.users[0]),  // post de Julien
    new Post(2,"Mon deuxieme post",this.content, new Date('December 18, 2015 03:17:00'),4,2,this.users[0]),  // post de Julien
    new Post(3,"Mon troisieme post",this.content,new Date('December 15, 2015 03:15:00'),1,0,this.users[1])  // post de Marc
  ];

  getMaxID(entries:Post[]):number{
    let max=1;
    entries.forEach((entry)=>{
      if(entry.id > max){
        max = entry.id;
      }
    });
    return max;
  }

  constructor(private userService :UserService){}

  getPostServiceByID(id:number){
    return this.posts.find(
        (postToFind) => {
          return postToFind.id === id;
        }
      );
  }

  emitPostSubject(){
    this.postSubject.next(this.posts);
  }

  addPost = (title:string , content :string ,user:User) => {

    let id = this.getMaxID(this.posts)  + 1;

    this.posts.push(new Post(id,title,content,new Date(),0,0,user));

    this.posts.sort((a,b) => {
      return (b.date).getTime() -  (a.date).getTime();
    });

    this.emitPostSubject();
  };

  editPostService = (title:string , content:string , postToUpdate : Post) => {
      postToUpdate.titre = title;
      postToUpdate.contenu = content;
      postToUpdate.date = new Date();
    };

  deletePost = (id:number) => {

    let index = this.posts.findIndex((entry)=>{
     return entry.id === id;
   });
    this.posts.splice(index ,1);
    this.emitPostSubject();
  };
}


