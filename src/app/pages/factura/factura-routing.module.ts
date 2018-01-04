import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturaComponent } from './factura.component';
import { ProductosComponent } from './productos/productos.component';
import { OrdenComponent } from './orden/orden.component';
import { OrdenProductosComponent } from './ordenproductos/ordenproductos.component';

const routes: Routes = [{
  path: '',
  component: FacturaComponent,
  children: [{
    path: 'productos',
    component: ProductosComponent,

  },
  {path: 'orden',
  component: OrdenComponent,
},{path: 'ordenproducto',
component: OrdenProductosComponent,
}],



}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturaRoutingModule { }

export const routedComponents = [
  FacturaComponent,
  ProductosComponent,
  OrdenComponent,
  OrdenProductosComponent,
];
