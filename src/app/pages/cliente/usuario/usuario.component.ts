import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UsuarioService } from '../../../@core/data/usuario.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './usuario.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UsuarioComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      tipoDocumento: {
        title: 'tipo de documento',
        type: 'String',
      },
      numeroDocumento: {
        title: 'numero de documento',
        type: 'number',
      },
      primerNombre:  {
        title: 'primer nombre',
        type: 'String',
      },
      segundoNombre:  {
        title: 'segundo nombre',
        type: 'String',
      },
      primerApellido:  {
        title: 'primer apellido',
        type: 'String',
      },
      segundoApellido:  {
        title: 'segundo apellido',
        type: 'String',
      },
      teléfono:  {
        title: 'telefono',
        type: 'number',
      },
      celular:  {
        title: 'celular',
        type: 'number',
      },
      correoElectronico: {
        title: 'mail',
        type: 'String',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UsuarioService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
