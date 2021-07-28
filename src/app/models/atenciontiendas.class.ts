//Clase principal del llenado de informacion de la parte de Atencion a tiendas
export class atencionTiendas {
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
}

class Domicilio {
  colonia: String;
  municipio: String;
}

class EstadoPedido {
  entregado: String;
  pendiente: String;
  porEntregar: String;
  Surtido: String;
}

class TipoPedido {
  domicilio: String;
  paqueteria: String;
  almacen: String;
  recogeTienda: String;
}
