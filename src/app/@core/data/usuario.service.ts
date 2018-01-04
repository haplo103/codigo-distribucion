import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  data = [{
    id: 1,
    tipoDocumento:'cedula',
    numeroDocumento:65421345231,
    primerNombre: 'Mark',
    segundoNombre: 'k',
    primerApellido: 'Otto',
    segundoApellido: 'j',
    teléfono: 5466861,
    celular: 348456856,
    correoElectronico:'mdo@gmail.com',
  }, {
    id: 2,
    tipoDocumento:'cedula',
    numeroDocumento:65421345231,
    primerNombre: 'Mark',
    segundoNombre: 'k',
    primerApellido: 'Otto',
    segundoApellido: 'j',
    teléfono: 5466861,
    celular: 348456856,
    correoElectronico:'mdo@gmail.com',
  }, {
    id: 3,
    tipoDocumento:'cedula',
    numeroDocumento:65421345231,
    primerNombre: 'Mark',
    segundoNombre: 'k',
    primerApellido: 'Otto',
    segundoApellido: 'j',
    teléfono: 5466861,
    celular: 348456856,
    correoElectronico:'mdo@gmail.com',
    }];

  getData() {
    return this.data;
  }
}
