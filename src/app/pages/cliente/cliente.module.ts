import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';
import { UsuarioService } from '../../@core/data/usuario.service';

@NgModule({
  imports: [
    ThemeModule,
    ClienteRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UsuarioService,
  ],
})
export class ClienteModule { }
