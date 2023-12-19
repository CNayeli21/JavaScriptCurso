// Se pueden crear variables y mandarlas a imprimir en pantalla

const hola = 'Hola Mundo desde la consola';
console.log(hola);

// arreglos
console.log([1,2,3,4]);

// objetos 
let objeto = {
    nombre: "Cynthia",
    apellido: "Cristalinas"
};

console.log(objeto);

// Tambien puedes imprimir resultados en forma de tabla

console.table([ 1, 2 , 3 ,4 ]);
// errrores 
console.error('Error al cargar pagina ')

//limpiar consola

console.clear();

// enviar adveertencias 
console.warn('Esto es una advertencia')

// Puedes monitorear el timepo en que el una funcion o un metodo tarda en ejecutarse 
console.time('Hola') ; console.warn('Esto no esta bien ')