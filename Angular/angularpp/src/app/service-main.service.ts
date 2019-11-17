import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
  public URL:string=environment.URLapi;

  constructor(public http:HttpClient) { }

  public getData(id) {
    return this.http.get(`${this.URL}?userData=${id}`);
  }

  public putData(value){
    return this.http.put(`${this.URL}`,value);
  }

  public deleteData(value){
    console.log(value);
    return this.http.delete(`${this.URL}?id=${value.id}`);
  }

  public ingresarData(value){
    console.log(value);
    return this.http.post(`${this.URL}`,value);
    
  }
}
