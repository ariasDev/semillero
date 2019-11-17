import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-right',
  templateUrl: './bar-right.component.html',
  styleUrls: ['./bar-right.component.css']
})
export class BarRightComponent implements OnInit {

  public bloqueEdit:boolean=false;

  @Input() body:any;

  constructor() { }

  public menu=['Inicio','Mneu 1', 'Menu 2']

  ngOnInit() {
  }

  public editar(item){
    if(this.bloqueEdit){
      this.bloqueEdit=false;
    }
    else{
      this.bloqueEdit=true;
    }

  }


}
