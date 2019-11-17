import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Menu1Component } from './menu1/menu1.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes:Routes=[
    
    {path:"",redirectTo:"home",pathMatch:"full"},//ruta por defecto
    {path:"home",component:HomeComponent},//ruta para el componente home
    {path:"menu1",component:Menu1Component},//ruta para el componente menu1
    {path:"**",component:NotFoundComponent}
]

export const routing=RouterModule.forRoot(routes);