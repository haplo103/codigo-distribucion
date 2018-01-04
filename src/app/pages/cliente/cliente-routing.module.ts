import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [{
    path: 'usuario',
    component: UsuarioComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule { }

export const routedComponents = [
  ClienteComponent,
  UsuarioComponent,
];
