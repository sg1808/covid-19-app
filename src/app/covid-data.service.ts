import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import firebase from 'firebase/app';
import { User } from 'src/user.model';
import { News } from 'src/news.model';
import { generalData } from 'src/data.general';
import { countryData } from 'src/data.country';
import { dailyCountryData } from 'src/data.dailyCountry';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  static updateCountriesData(c: any) {
    throw new Error('Method not implemented.');
  }
  
  // url used of API
  // Store the logged User
  urlApi : string;
  private user : User;
  // Boolean which is false if the currently logged user is authorized to create news
  // true if not
  public authorized : boolean = false;
  


  constructor(private http: HttpClient, private afAuth : AngularFireAuth, private firestore: AngularFirestore) {
    // vide vidi
    }


  // Method which permits to gather the Summary data from the API by doing a GET HTTP request
  public getSummaryData_http(): Observable<any>{
    this.urlApi = 'https://corona.lmao.ninja/v2/all';
    return this.http.get(this.urlApi);
  }

    // Method which permits to gather the World data from the API by doing a GET HTTP request
  public getWorldData_http(): Observable<any>{
    this.urlApi = 'https://api.covid19api.com/world';
    return this.http.get(this.urlApi);
  }

    // Method which permits to gather a country daily's data from the API by doing a GET HTTP request
  public getCountryDaily_http(countryName : string){
    this.urlApi = 'https://api.covid19api.com/dayone/country/' + countryName;
    return this.http.get(this.urlApi);
  }

  // Method which permits to sign in with google
  async signInWithGoogle(){
    const credential = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.user = {
      uid : credential.user.uid,
      displayName : credential.user.displayName,
      email : credential.user.email
    };
    localStorage.setItem("user", JSON.stringify(this.user));
    this.isAuthorized(); //verify if the logged user is authorized to write news
  }

  getUser(){
    if(this.user == null && this.userSignedIn()){
      this.isAuthorized();
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return this.user;
  }

  // This method verifies if an user is logged in
  userSignedIn(): boolean{
    return (JSON.parse(localStorage.getItem("user")) != null);
  }

  // This methods logs out the currently logged user
  signOut(){
    this.afAuth.signOut();
    localStorage.removeItem("user");
    this.user = null;
    this.authorized = false;
  }

  // This method add a news to the firebase collection which stores news
  addNews(news: News) {
    this.firestore.collection("news").add(news);
  }

  
  addCountryInfo(countryData: countryData) {
    this.firestore.collection("Country Data").add(countryData);
  }
  // This method returns an Observble of the firebase collection which stores news
  getNews(){
    return this.firestore.collection("news").valueChanges();
  }

  // This method returns an Observble of the firebase collection which stores news
  updateCountriesData(data : countryData[]) {
    for(let key in data){ 
      this.firestore.collection("Country Data").doc(data[key].countryName).set(Object.assign({}, data[key]));
    }
  }

  // Returns an Observable of the firebase collection which stores a given country daily data
  getCountries_db(countryName : string){
    return this.firestore.collection("Country Data").doc(countryName).valueChanges();
  }

  // Verifies if the logged user is authorized to write news or not
  isAuthorized(): void{
    this.firestore.collection("authorized_users").valueChanges().subscribe(data=>{
      for (let key in data){
        if (data[key]["email"] === this.user.email){
          this.authorized = true;
        }
      }
    });
  }
}
