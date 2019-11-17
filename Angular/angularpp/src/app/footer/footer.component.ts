import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public nombre:string ="Juan arias";
  public fecha:string= "2019";
  constructor() { }

  ngOnInit() {
  }


}
