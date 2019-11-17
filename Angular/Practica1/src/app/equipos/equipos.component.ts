import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  public body:any;

  constructor(public serviceMain:ServiceMainService) { }

  ngOnInit() {
    this.llamadoApi();
  }

  public llamadoApi(){
    this.serviceMain.getDataEquipos().subscribe(response=>{
    this.body=response;
    console.log(response);
    });
  }

}
