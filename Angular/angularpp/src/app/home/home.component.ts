import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public body:any;

  constructor(public serviceMain:ServiceMainService) { }

  ngOnInit() {
    this.llamadoApi();
    
  }

  public llamadoApi(){
    let id="";
    this.serviceMain.getData(id).subscribe(response=>{
    this.body=response;
    console.log(response);
    });
  }

  // esquema para poder hacer el put
  public pagar(item){
    console.log(item);
    let res={
      "id":item.id,
      "ammount2pay":item.credito
    }

    this.serviceMain.putData(res).subscribe(response=>{
      console.log(response);
    })

  }

  public Eliminar(item){
    console.log(item);
    let res={
      "id":item.id
    }

    this.serviceMain.deleteData(res).subscribe(response=>{
      console.log(response);
    })
    

  }

 

}
