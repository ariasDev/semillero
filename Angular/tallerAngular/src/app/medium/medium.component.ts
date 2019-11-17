import { Component, OnInit, Output, Input } from '@angular/core';
import {ServiceService} from '../service.service'


@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {


  @Input() resultado;
  constructor(public serviceMain:ServiceService) { }
  ngOnInit() {
    console.log(`desde el medio ${this.resultado}`)
  }

}
