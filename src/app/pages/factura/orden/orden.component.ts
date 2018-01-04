import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { OrdenService } from '../../../@core/data/orden.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './orden.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class OrdenComponent {

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
      numerofactura: {
        title: 'numero factura',
        type: 'number',
      },
      fecha: {
        title: 'fecha',
        type: 'String',
      },
      cliente: {
        title: 'cliente',
        type: 'String',
      },
      totalfactura: {
        title: 'total factura',
        type: 'number',
      },
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: OrdenService, private _router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }  onSelect(event): void {
    this._router.navigate(['/pages/factura/ordenproducto']);
}}
