import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  public userName: string;
  public clientid:'8afdde5929e04dba8c26';
  public clientsecret:'723f13a32f01b16ff529610b89800fd9bb16f5ed';

  constructor(public _http:HttpClient) {
    console.log("service is a go");
    this.userName ='HILLARY-oti';
    
   }
   getprofInfo(){
    return this._http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientid+ "&client_secret=" + this.clientsecret);
   }
   getprofRepos(){
    return this._http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }
   updateProf(userName:string){
  	this.userName = userName;
  }
}
