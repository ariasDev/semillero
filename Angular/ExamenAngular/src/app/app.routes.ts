import { Routes, RouterModule } from '@angular/router';
import {ColaboradoresComponent} from '../app/colaboradores/colaboradores.component'
import {RegistroColaboradorComponent} from '../app/registro-colaborador/registro-colaborador.component'
import {InicioComponent} from '../app/inicio/inicio.component'
import {Menu1Component} from '../app/menu1/menu1.component'

export const routes:Routes=[

     {path:"",redirectTo:"inicio",pathMatch:"full"},
     {path:"inicio",component:InicioComponent},
     {path:"menu1",component:Menu1Component}
    // {path:"Colaboradores",component:ColaboradoresComponent},
    // {path:"equiposAsignados",component:EquiposAsignadosComponent},
    // {path:"PostColaborador",component:RegistroColaboradorComponent},
    // {path:"asignarEquipo",component:AsignarEquipoComponent}
    
    
]

export const routing=RouterModule.forRoot(routes);