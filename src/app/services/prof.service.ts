import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  private username:string;
  private clinetid = '6720367aabe103c1061e';
  private clinetsecret = '7aa30f913c49546e09a26f2a7c3286865cae7f50';

  constructor(private _http:HttpHeaders) {
    console.log("Service is ready");
    this.username = 'HILLARY-oti';
   }
   getprofInfo(){
    return this._http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clinetid + "&client_secret=" + this.clinetsecret);
   }
}
