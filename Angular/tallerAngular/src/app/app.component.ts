import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tallerAngular';
  objetoApi:any;

constructor() { }

public recibirObjeto($event){
  this.objetoApi=$event;
  // this.objetoApi.forEach(element=>{
  //   console.log(element)
  // })
  // console.log(`desde el padre ${$event[0]}`)
}

}
