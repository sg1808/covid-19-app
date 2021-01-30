import { Injectable } from "@angular/core"
import { AngularFireAuth } from "@angular/fire/auth"
import { Router } from "@angular/router";
import firebase from 'firebase/app'
import { User } from './user.model'
import { AngularFirestore } from '@angular/fire/firestore'
import { title } from "process";
import { News } from "./news_user.model";
import { NewsGen } from "./news_general.service";
@Injectable({
    providedIn:'root'
})

export class Auth1{

  private user: User;
  
  constructor(private afAuth : AngularFireAuth, private router: Router,
    private firestore: AngularFirestore) { }

  async signInWithGoogle(){
    const credientials = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.user = {
        uid: credientials.user.uid,
        displayName: credientials.user.displayName,
        email : credientials.user.email,
    };
    localStorage.setItem("user",JSON.stringify(this.user))
    this.updateUserData()
    this.router.navigate(["add_news"]);
    console.log(credientials)
  }
  ngOnInit(): void {
  }

  private updateUserData(){
    this.firestore.collection("user").doc(this.user.uid).set({
        uid : this.user.uid,
        diplayName : this.user.displayName,
        email : this.user.email
    },{merge : true});
  }

  getUser(){
      if(this.user == null && this.userSignedIn()) {
       this.user = JSON.parse(localStorage.getItem("user"));
      }
    return this.user;
  }

  userSignedIn() : boolean {
    return JSON.parse(localStorage.getItem("user")) !=null ;
  }

  public signOut(){
    this.afAuth.signOut();
    localStorage.removeItem("user");
    this.user = null;
    this.router.navigate(["sign_in"])
}
    //User 1 : country 1 => news
  public getNews_User_country(userid : string, country : string){
      return this.firestore.collection("user").doc(userid).
      collection("news_user", ref => ref.where('country', '==', country));
    }

    //[User1, User2,User3, ......]
    public getAllUsers(){
        return this.firestore.collection("user").valueChanges();
    }

    //All User, country, => news
    public getAllNews_country(country : string){
        let list: any[];
        for(let key in this.getAllUsers()){
            list.push(this.getNews_User_country(key["uid"],country));
        }
        return list
    }

    //All country, => news
    public getAllNews(countrylist : string[]){
        let list: any[];
        for(let key in countrylist){
            list.push(this.getAllNews_country(key));
        }
        return list
    }

    addNews(news : News){
        this.firestore.collection("user").doc(this.user.uid)
        .collection("news_user").add(news);
    }

    addNews_(news : NewsGen){
      this.firestore.collection("news").add(news);
    }
}