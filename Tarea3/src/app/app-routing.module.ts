import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNotasComponent } from '../app/crear-notas/crear-notas.component';
import { MostrarNotasComponent } from '../app/mostrar-notas/mostrar-notas.component';
import { ModificarNotasComponent } from '../app/modificar-notas/modificar-notas.component';

const routes: Routes = [
  {path:'',component:CrearNotasComponent},
  {path:'mostrar-notas',component:MostrarNotasComponent},
  {path:'modificar-notas',component:ModificarNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
