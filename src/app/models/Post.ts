import {User} from "./User";
export class Post {


    private _id:number;
    private _titre:string;
    private _contenu:string;
    private _date:Date;
    private _likes:number;
    private _dislikes : number;
    private _user : User;

   // constructor() {   }
constructor(id:number,titre:string,contenu:string,date:Date,likes:number,dislikes:number,user:User){
  this.id=id;
  this.contenu=contenu;
  this.date=date;
  this.likes=likes;
  this.dislikes=dislikes;
  this.user=user;
  this.titre=titre;
}

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
    get id():number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    get titre():string {
        return this._titre;
    }

    set titre(value:string) {
        this._titre = value;
    }

    get contenu():string {
        return this._contenu;
    }

    set contenu(value:string) {
        this._contenu = value;
    }

    get date():Date {
        return this._date;
    }

    set date(value:Date) {
        this._date = value;
    }

    get likes():number {
        return this._likes;
    }

    set likes(value:number) {
        this._likes = value;
    }

    get dislikes():number {
        return this._dislikes;
    }

    set dislikes(value:number) {
        this._dislikes = value;
    }
}
