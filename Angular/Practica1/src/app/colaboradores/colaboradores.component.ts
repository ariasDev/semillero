import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  public body:any;

  constructor(public serviceMain:ServiceMainService) { }

  ngOnInit() {
    this.llamadoApi()
  }

  public llamadoApi(){
    this.serviceMain.getDataColaboradores().subscribe(response=>{
    this.body=response;
    console.log(response);
    });
  }

  public Eliminar(item){
    console.log(item);

    let res={
      "id":item.id_colaboradores
    }

    this.serviceMain.deleteColaborador(res).subscribe(response=>{
      console.log(response);
    })
    

  }


}
