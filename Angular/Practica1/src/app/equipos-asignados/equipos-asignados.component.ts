import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-equipos-asignados',
  templateUrl: './equipos-asignados.component.html',
  styleUrls: ['./equipos-asignados.component.css']
})
export class EquiposAsignadosComponent implements OnInit {

  public body:any;

  constructor(public serviceMain:ServiceMainService) { }

  ngOnInit() {
    this.llamadoApi()
  }

  public llamadoApi(){
    this.serviceMain.getDataEquiposAsignados().subscribe(response=>{
    this.body=response;
    console.log(response);
    });
  }


}
