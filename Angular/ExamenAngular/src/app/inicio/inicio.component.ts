import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public body:any;
  public bodyEdit:any;
  public cards:boolean=true;
  public container2:boolean=false;

  public formRegistro:FormGroup;

  constructor(public router:Router,public formBuilder:FormBuilder,public serviceMain:ServiceMainService) {
    this.formRegistro=this.formBuilder.group({

      'idcolaboradores':['',Validators.required],
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'cargo':['',Validators.required],
      'usuariored':['',Validators.required],
      'estado':['',Validators.required],
      'fecharegistro':['',Validators.required]

    });
   }

  ngOnInit() {
    this.llamadoApi();
  }

  public llamadoApi(){
    this.serviceMain.getDataColaboradores().subscribe(response=>{
    this.body=response;
    console.log(response);
    });
  }

  public editar(item){
    this.bodyEdit=item;
    console.log(this.bodyEdit.nombre)
    this.cards=false;
    this.container2=true;
  }

    
  public actualizar(){
    this.cards=true;
    this.container2=false;


    let res={
      "id_colaboradores":this.formRegistro.value.idcolaboradores,
      "nombre":this.formRegistro.value.nombre,
      "apellido":this.formRegistro.value.apellido,
      "cargo":this.formRegistro.value.cargo,
      "usuariored":this.formRegistro.value.usuariored,
      "estado":this.formRegistro.value.estado,
      "fecharegistro":this.formRegistro.value.fecharegistro
    }

    this.bodyEdit=res;

    console.log(this.bodyEdit);

    this.serviceMain.putData(this.bodyEdit).subscribe(response=>{
      console.log(response);
    })
  }

  


}
