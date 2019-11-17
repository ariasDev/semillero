import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  public formRegistro:FormGroup;

  constructor(public router:Router,public formBuilder:FormBuilder,public serviceMain:ServiceMainService){

    this.formRegistro=this.formBuilder.group({

      'id':['',Validators.required],
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'saldo':['',Validators.required],
      'credito':['',Validators.required]

    });

   }

  ngOnInit() {
  }

  public ingresar(item){
    console.log(item);
    let res={
      "id":item.id,
      "nombre":item.nombre,
      "apellido":item.apellido,
      "saldo":item.saldo,
      "credito":item.credito
      
    }

    this.serviceMain.ingresarData(res).subscribe(response=>{
      console.log(response);
    })

  }
  

  public registrarse(){

    if(this.formRegistro.valid){
      this.router.navigate(['/home']);
    }
    this.ingresar(this.formRegistro.value);
    console.log(this.formRegistro.value);
  }

}
