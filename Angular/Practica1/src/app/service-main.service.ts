import { Injectable } from '@angular/core';
import{environment} from '../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
  public URLequipos:string=environment.urlEquipos;
  public URLcolaboradores:string=environment.urlColaboradores;
  public URLequiposAsignados:string=environment.urlEquiposAsignados;

  constructor(public http:HttpClient) { }

  public getDataEquipos() {
    return this.http.get(`${this.URLequipos}`);
  }

  public getDataColaboradores(){
    return this.http.get(`${this.URLcolaboradores}`)
  }

  public getDataEquiposAsignados(){
    return this.http.get(`${this.URLequiposAsignados}`)

  }

  public deleteColaborador(value){
    console.log(value);
    return this.http.delete(`${this.URLcolaboradores}/${value.id}`);
  }

  public ingresarData(value){
    console.log(value);
    return this.http.post(`${this.URLcolaboradores}/insertar`,value);
    
  }

  public AsignarEquipo(value){
    console.log(value);
    return this.http.post(`${this.URLequiposAsignados}/insertar`,value);
    
  }

  
}
