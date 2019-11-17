import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-asignar-equipo',
  templateUrl: './asignar-equipo.component.html',
  styleUrls: ['./asignar-equipo.component.css']
})
export class AsignarEquipoComponent implements OnInit {

  public formRegistro:FormGroup;

  constructor(public router:Router,public formBuilder:FormBuilder,public serviceMain:ServiceMainService) {
    this.formRegistro=this.formBuilder.group({

      'id_ea':['',Validators.required],
      'id_asignado':['',Validators.required],
      'id_equipo':['',Validators.required],
      'orden_instalacion':['',Validators.required],
      'fecha_asignacion':['',Validators.required],
      'fecha_devolucion':['',Validators.required],
      'id_entrega':['',Validators.required],
      'estado':['',Validators.required],
      'observacion':['',Validators.required],

    });
   }

  ngOnInit() {
  }

  public ingresar(item){
    console.log(item);
    let res={
      "id_ea":item.id_ea,
      "id_asignado":item.id_asignado,
      "id_equipo":item.id_equipo,
      "orden_instalacion":item.orden_instalacion,
      "fecha_asignacion":item.fecha_asignacion,
      "fecha_devolucion":item.fecha_devolucion,
      "id_entrega":item.id_entrega,
      "estado":item.estado,
      "observacion":item.observacion
      
    }

    this.serviceMain.AsignarEquipo(res).subscribe(response=>{
      console.log(response);
    })

  }

  public AsignarEquipo(){

    if(this.formRegistro.valid){
      this.router.navigate(['inicio']);
    }
    this.ingresar(this.formRegistro.value);
    console.log(this.formRegistro.value);
  }

}
