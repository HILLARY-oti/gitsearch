import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  private username:string;
  private clinetid = '6720367aabe103c1061e';
  private clinetsecret = '7aa30f913c49546e09a26f2a7c3286865cae7f50';

  constructor(private http:HttpHeaders) {
    console.log("Service is ready");
    this.username = 'HILLARY-oti'
   }

}
