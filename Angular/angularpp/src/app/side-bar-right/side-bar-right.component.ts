import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.css']
})
export class SideBarRightComponent implements OnInit {

  @Input()mensaje;
  @Output() mensajeEvent=new EventEmitter();

  

  constructor() { }

  ngOnInit() {
    this.mensajeEvent.emit("SEMILLERO 2019");
  }

  

}
