import { Injectable } from '@angular/core';
import{environment} from '../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
  public URLcolaboradores:string=environment.urlColaboradores;

  constructor(public http:HttpClient) { }

  

  public getDataColaboradores(){
    return this.http.get(`${this.URLcolaboradores}`)
  }


  public deleteColaborador(value){
    console.log(value);
    return this.http.delete(`${this.URLcolaboradores}/${value.id}`);
  }

  public ingresarData(value){
    console.log(value);
    return this.http.post(`${this.URLcolaboradores}/insertar`,value);
    
  }

  public putData(value){
    return this.http.put(`${this.URLcolaboradores}/modificar`,value);
  }

}
