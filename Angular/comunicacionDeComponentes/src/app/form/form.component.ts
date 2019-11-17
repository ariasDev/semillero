import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() mensaje;
  @Input() mensaje2;
  @Input() nombreDelpadre;
  @Output() mensajeSalida=new EventEmitter;
  @Output() estadoDelTitulo=new EventEmitter;
  @Output() segundoMensaje=new EventEmitter;
  @Output() modificarEstado=new EventEmitter;

  public cambiar:boolean;

  public estadoBoton:boolean;
  constructor() { }

  ngOnInit() {

  }

  public FuncionEmitir(){
    if(this.cambiar){
      this.cambiar=false;
    }else{this.cambiar=true}
    console.log(this.cambiar)
    this.mensajeSalida.emit(this.cambiar);
  }

  public unMensaje(){
    this.segundoMensaje.emit("este es otro mensaje desde el hijo");
  }

  public cambiarEstado(){
    if(this.estadoBoton){
      this.estadoBoton=false;
    }
    else{
      this.estadoBoton=true;
    }
    
    this.modificarEstado.emit(this.estadoBoton);
    console.log(this.estadoBoton)
  }

}
