import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-bar-left',
  templateUrl: './bar-left.component.html',
  styleUrls: ['./bar-left.component.css']
})
export class BarLeftComponent implements OnInit {

  @Output() EnviarRespuesta = new EventEmitter();

  public menu:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  public body: any;
  public respArray: any;
  constructor(public serviceMain:ServiceService ) { }

  ngOnInit() {
  }
  public llamadoApi(id){
    this.serviceMain.getData(id).subscribe(response=>{
    this.body=response;
    this.body=this.body.results;
    this.respArray = this.body;
    console.log(this.respArray);
    this.EnviarRespuesta.emit(this.respArray);
    });
  }
}
