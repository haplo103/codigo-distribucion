import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },

  {
    title: 'Cliente',
    icon: 'nb-tables',
    children: [
      {
        title: 'Usuario',
        link: '/pages/cliente/usuario',
      },
    ],
  },
  {
    title: 'Factura',
    icon: 'nb-tables',
    children: [
      {
        title: 'Productos',
        link: '/pages/factura/productos',
      },
      {
        title: 'Orden',
        link: '/pages/factura/orden',
      },
    ],
  },

];
