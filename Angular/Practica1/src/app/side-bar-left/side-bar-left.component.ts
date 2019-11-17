import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.css']
})
export class SideBarLeftComponent implements OnInit {

  public menu:Array<String>=['Inicio', 'Colaboradores', 'Equipos', 'Equipos Asignados', 'Ingresar Colaborador', 'Asignar Nuevo Equipo'];

  constructor(public router:Router) { }

  ngOnInit() {
  }

  public navegar(item){
    console.log(item);
    switch (item) {
      case 'inicio':
        this.router.navigate(['inicio'])
        break;

      case 'Equipos':
        this.router.navigate(['Equipos'])
        break;

      case 'Colaboradores':
         this.router.navigate(['Colaboradores'])
        break;
      
      case 'Equipos Asignados':
        this.router.navigate(['equiposAsignados'])
        break;

      case 'Ingresar Colaborador':
        this.router.navigate(['PostColaborador'])
        break;

      case 'Asignar Nuevo Equipo':
        this.router.navigate(['asignarEquipo'])
        break;
    
      default:
          this.router.navigate(['inicio'])
        break;
    }
  }

}
