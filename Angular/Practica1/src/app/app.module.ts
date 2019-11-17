import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './side-bar-right/side-bar-right.component';
import { routing } from '../app/app.routes';
//import para trabajar con las rutas http
import {HttpClientModule} from '@angular/common/http';
import { EquiposComponent } from './equipos/equipos.component';
import { HomeComponent } from './home/home.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { EquiposAsignadosComponent } from './equipos-asignados/equipos-asignados.component';
import { RegistroColaboradorComponent } from './registro-colaborador/registro-colaborador.component';
import { AsignarEquipoComponent } from './asignar-equipo/asignar-equipo.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarLeftComponent,
    SideBarRightComponent,
    EquiposComponent,
    HomeComponent,
    ColaboradoresComponent,
    EquiposAsignadosComponent,
    RegistroColaboradorComponent,
    AsignarEquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
