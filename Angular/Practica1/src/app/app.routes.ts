import { Routes, RouterModule } from '@angular/router';
import {EquiposComponent} from '../app/equipos/equipos.component'
import {HomeComponent} from '../app/home/home.component'
import {ColaboradoresComponent} from '../app/colaboradores/colaboradores.component'
import {EquiposAsignadosComponent} from '../app/equipos-asignados/equipos-asignados.component'
import {RegistroColaboradorComponent} from '../app/registro-colaborador/registro-colaborador.component'
import {AsignarEquipoComponent} from '../app/asignar-equipo/asignar-equipo.component'

export const routes:Routes=[

    {path:"",redirectTo:"inicio",pathMatch:"full"},
    {path:"inicio",component:HomeComponent},
    {path:"Equipos",component:EquiposComponent},
    {path:"Colaboradores",component:ColaboradoresComponent},
    {path:"equiposAsignados",component:EquiposAsignadosComponent},
    {path:"PostColaborador",component:RegistroColaboradorComponent},
    {path:"asignarEquipo",component:AsignarEquipoComponent}
    
    
]

export const routing=RouterModule.forRoot(routes);