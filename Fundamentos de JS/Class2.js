var nombre = 'Camilo';
var apellido = 'Perez';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length;

var nombreCompleto = nombre + ' ' + apellido;
var nombreCompletoInterpolacion = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.charAt(1) + nombre.charAt(2);
var str2 = nombre.substr(1, 2);