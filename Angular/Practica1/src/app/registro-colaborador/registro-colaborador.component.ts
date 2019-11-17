import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceMainService } from '../service-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-colaborador',
  templateUrl: './registro-colaborador.component.html',
  styleUrls: ['./registro-colaborador.component.css']
})
export class RegistroColaboradorComponent implements OnInit {

  public formRegistro:FormGroup;
  
  constructor(public router:Router,public formBuilder:FormBuilder,public serviceMain:ServiceMainService) {
    this.formRegistro=this.formBuilder.group({

      'id_colaboradores':['',Validators.required],
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'cargo':['',Validators.required],
      'usuariored':['',Validators.required],
      'estado':['',Validators.required],
      'fecharegistro':['',Validators.required]


    });
   }

  ngOnInit() {
  }

  public ingresar(item){
    console.log(item);
    let res={
      "id":item.id,
      'id_colaboradores':item.id_colaboradores,
      'nombre':item.nombre,
      'apellido':item.apellido,
      'cargo':item.cargo,
      'usuariored':item.usuariored,
      'estado':item.estado,
      'fecharegistro':item.fecharegistro
    }

    this.serviceMain.ingresarData(res).subscribe(response=>{
      console.log(response);
    })

  }

  public registrarse(){

    if(this.formRegistro.valid){
      this.router.navigate(['Colaboradores']);
    }
    this.ingresar(this.formRegistro.value);
    console.log(this.formRegistro.value);
  }


}
