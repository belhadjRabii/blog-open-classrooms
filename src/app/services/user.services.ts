import {User} from "../models/User";
import {Observable, Subject} from "rxjs";
import {Post} from "../models/Post";
import {Injectable} from "@angular/core";
@Injectable()
export class UserService{

  userSubject = new Subject<User[]>();

  user:User;

  isLoggedIn:boolean=false;

  private users = [
    new User(0,'Julien','DUBOIS' ,'julien@dubois.com', 'julien123',null),
    new User(1,'Marc','CHARLES' ,'marc@charkes.com', 'marc123',null)
  ];

  signOut(){
    this.isLoggedIn=false;
  }

  getAllUsers() {
    return this.users;
  }

  emitUserSubject() {
    this.userSubject.next(this.users);
  }

  getLastID(){
    return this.users.length;
  }

  addUserService(user: User) {

    let id =this.getLastID();

    user = new User(id,user.firstName,user.lastName,user.mail,user.password,user.posts);

    this.user=user;

    this.users.push(user);

    this.isLoggedIn=true;

    this.emitUserSubject();
  }

  findUser(mail:string,password:string){
   for(let user of this.users){
     if((user.mail === mail )   &&  (user.password  === password)) {
       this.user=user;
       this.isLoggedIn=true;
       return this.user;
     }
   }
 }

  disableButton(post:Post,user:User){
    return user.id === post.user.id;
  }


}
