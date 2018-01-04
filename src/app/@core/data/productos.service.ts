import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  data = [{
    id: 1,
    pluDelProducto: 12321,
    nombre:'jabon',
    valorUnitario: 1500,
    cantidad: 3,
    valorTotal: 4500,
  }, {
    id: 2,
    pluDelProducto: 45678,
    nombre:'crema',
    valorUnitario: 1000,
    cantidad: 3,
    valorTotal: 3000,
  }, {
    id: 3,
    pluDelProducto: 98564,
    nombre:'shampo',
    valorUnitario: 2000,
    cantidad: 1,
    valorTotal: 2000,
    }];

  getData() {
    return this.data;
  }
}
