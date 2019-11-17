import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../environments/environment'




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //inyeccion de la api en servicios
  public URL:string=environment.URLAPI;


  constructor(public http:HttpClient) { }

  public getData(id) {
    console.log(id)
    return this.http.get(`${this.URL}?results=${id}`);
  }

  public putData(value){
    return this.http.put(`${this.URL}`,value);
  }
}
