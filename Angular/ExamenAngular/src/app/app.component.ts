import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';
  public menu:Array<String>=['Inicio',  'Menu 1', "Menu 2"];

  constructor(public router:Router) { }

  public navegar(item){
    console.log(item);
    switch (item) {
      case 'Inicio':
        this.router.navigate(['inicio'])
        break;

      case 'Menu 1':
        this.router.navigate(['menu1'])
         break;
    
      default:
          this.router.navigate(['Inicio'])
        break;
    }
  }

}
