import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadircontactoComponent } from './components/anadircontacto/anadircontacto.component';
import { ListacontactosComponent } from './components/listacontactos/listacontactos.component';

const routes: Routes = [
  {path:'anadircontacto', component: AnadircontactoComponent},
  {path:'listacontactos', component: ListacontactosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'anadircontacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
