import { Injectable } from '@angular/core';

@Injectable()
export class OrdenService {

  data = [{
    numerofactura: 1,
    fecha: '12/3/2018',
    cliente:'juan',
    totalfactura: 9500,


  }, {
    numerofactura: 2,
    fecha: '24/5/2017',
    cliente:'carlos',
    totalfactura: 9500,

  }, {
    numerofactura: 3,
    fecha: '06/6/2015',
    cliente:'daniel',
    totalfactura: 9500,
  
    }];

  getData() {
    return this.data;
  }
}
