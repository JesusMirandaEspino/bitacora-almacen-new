// Se importar las clase facturacion para integarse a la clase de pedido
// Se exportan las clases de Facturacion y Ruta para ser integrado a la clase de pedido

import { Facturacion } from './facturacion.class';
import { Ruta } from './jefeAlmacen';

//Clase principal del llenado de informacion de la parte de Atencion a tiendas
export class pedido {
  fecha: Date;
  fechaEntraga: Date;
  nombreCliente: String;
  domicilio: String;
  Municipio: String;
  estado: EstadoPedido;
  tipo: TipoPedido;
  domiclio: Domicilio;

  //  tienda origen sera un objeto con una lista de tiendas que seran consumidas de una base de datos, ingresadas y modificadas por un administrador
  tiendaOrigen: String;
  recibio: String;
  piezasSurtidas: Number;
  piezasrequeridas: Number;
  telefono: String;
  notas: String;

  // clases intregadas de los modelos Facturacion y Ruta
  facturacion: Facturacion;
  ruta: Ruta;
}

// Clase espcifica del domicilio del cliente
class Domicilio {
  colonia: String;
  municipio: String;
}

// Clase para el estatus del pedido
class EstadoPedido {
  entregado: String;
  pendiente: String;
  porEntregar: String;
  Surtido: String;
}

// Clase para el tipo de pedido dependiendo del rumbo de la ruta que tomara
class TipoPedido {
  domicilio: String;
  paqueteria: String;
  almacen: String;
  recogeTienda: String;
}
