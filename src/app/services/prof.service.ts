import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  private userName: string;
  private clientid:'9747c6cefc41d4d8a667';
  private clientsecret:'62e7b398873552266a0e8d46fd03576e82041168';

  constructor(private _http:HttpClient) {
    
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
