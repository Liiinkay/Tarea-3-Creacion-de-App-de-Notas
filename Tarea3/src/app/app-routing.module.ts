import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNotasComponent } from '../app/crear-notas/crear-notas.component';
import { MostrarNotasComponent } from '../app/mostrar-notas/mostrar-notas.component';

const routes: Routes = [
  {path:'',component:CrearNotasComponent},
  {path:'mostrar-notas',component:MostrarNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
