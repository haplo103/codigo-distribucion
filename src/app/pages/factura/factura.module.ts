import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { FacturaRoutingModule, routedComponents } from './factura-routing.module';
import { ProductosService } from '../../@core/data/productos.service';
import { OrdenService } from '../../@core/data/orden.service';


@NgModule({
  imports: [
    ThemeModule,
    FacturaRoutingModule,
    Ng2SmartTableModule,
  
  ],
  declarations: [
    ...routedComponents,
  ],

  providers: [
    ProductosService,
    OrdenService,
  ],
})
export class FacturaModule { }
