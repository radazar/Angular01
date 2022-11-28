import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { HistotiaComponent } from './components/histotia/histotia.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Servicios',component:ServiciosComponent},
  {path:'testimonios',component:TestimoniosComponent},
  {path:'historia',component:HistotiaComponent},
  {path:'contactanos',component:ContactanosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
