import {Post} from "./Post";

export class User{

    private _id : number ;
    private _firstName : string ;
    private _lastName : string ;
    private _mail : string;
    private _password : string;
    private _posts : Post[];
    private static user_singleton :User =null;

    constructor(id:number,firstName:string,lastName:string,mail:string,password:string,posts:Post[]){
      this.id=id;
      this.firstName=firstName;
      this.lastName=lastName;
      this.mail=mail;
      this.password=password;
      this.posts=posts;
    }

  get posts(): Post[] {
    return this._posts;
  }

  set posts(value: Post[]) {
    this._posts = value;
  }

  get password():string {
        return this._password;
    }

    set password(value:string) {
        this._password = value;
    }

    public set id(value:number) {
        this._id = value;
    }

    public set firstName(value:string) {
        this._firstName = value;
    }

    public set lastName(value:string) {
        this._lastName = value;
    }

    public set mail(value:string) {
        this._mail = value;
    }

    public get id():number {
        return this._id;
    }

    public get firstName():string {
        return this._firstName;
    }

    public get lastName():string {
        return this._lastName;
    }

    public get mail():string {
        return this._mail;
    }
}
