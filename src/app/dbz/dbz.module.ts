import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AgregarPersonajeComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
