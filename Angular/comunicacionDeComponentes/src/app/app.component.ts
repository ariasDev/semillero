import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'comunicacionDeComponentes';

  public titulo2:boolean=false;
  public titulo3:boolean=false;

  public mensajeRecivido:string;
  
  public mensajeParaElHijo:string="hoja desde el componente padre";
  public segundoMensaje:string="ho de nuevo hijo";
  public nombreDelpadre:string="mi nombre es dios";

  public funcionRecibir(estado){
    this.titulo2=estado;
  }

  public recivirEstado(estado){
    this.titulo3=estado;
  }
  
}
