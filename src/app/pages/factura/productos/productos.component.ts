import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { ProductosService } from '../../../@core/data/productos.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './productos.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ProductosComponent {

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
      pluDelProducto: {
        title: 'plu del producto',
        type: 'number',
      },
      nombre: {
        title: 'nombre',
        type: 'String',
      },
      valorUnitario:  {
        title: 'valor unitario',
        type: 'number',
      },
      cantidad:  {
        title: 'cantidad',
        type: 'number',
      },
      valorTotal: {
        title: 'valor total',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: ProductosService) {
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
