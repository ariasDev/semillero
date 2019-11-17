import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpp';
  
  public Mfecha:boolean=false;
  public mostrar:boolean=true;
  public miArray:Array<String>=["java","c++","angular"]
  public switch: number=3333;
  //padre hijo
  public  mensajePadreHijo: string ="Hola manda a decir el padre";
  public  mensajeDesdeHijo:string;
  public  mensajeDesdeBoton:string;

  constructor(){

  }

  public funcionRecivir($event){
    this.mensajeDesdeHijo=$event;

  }

  public funcionBoton($event){
    this.mensajeDesdeBoton=$event;

  }
}
