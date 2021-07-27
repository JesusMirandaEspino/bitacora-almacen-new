//Clase principal del llenado de informacion de la parte de Atencion a tiendas
export class atencionTiendas {
  fecha: Date;
  nombreCliente: String;
  domicilio: String;
  Municipio: String;

  //  tienda origen sera un objeto con una lista de tiendas que seran consumidas de una base de datos, ingresadas y modificadas por un administrador
  tiendaOrigen: String;
  recibio: String;
  piezasSurtidas: Number;
  piezasrequeridas: Number;
}
