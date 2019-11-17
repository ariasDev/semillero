import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.css']
})
export class SideBarLeftComponent implements OnInit {

  public menu:Array<String>=["inicio","menu1","menu2"]

  @Output() bontonPulsado=new EventEmitter();
  public newBool:boolean=true;

  constructor(public router:Router) { }

  ngOnInit() {
   // this.bontonPulsado.emit("true")
  }

  public evento(){
    if(this.newBool)
    {
      this.newBool=false;
      this.bontonPulsado.emit(this.newBool);
    }
    else
    {
      this.newBool=true;
      this.bontonPulsado.emit(this.newBool);
    }
    
  }

  public navegar(item){
    console.log(item);
    switch (item) {
      case 'inicio':
        this.router.navigate(['home'])
        break;

      case 'menu1':
        this.router.navigate(['menu1'])
        break;
    
      default:
          this.router.navigate(['home'])
        break;
    }
  }

}
