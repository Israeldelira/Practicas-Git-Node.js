/*
BUFFER:Son conjuntos de datos crudos como datos binarios 
que podemos manipular en Node.js
Nos ayudan a 
    -facilitar el manejo de datos
    -Streams
    -Sockets
    -Manipulacion de ficheros/imagenes
    -Criptografia

Node.js representa los datos del buffer en sistema HEXADECIMAL
Ya esta incluida de forma global en Node.js asi que no tiene que ser requerida
como un modulo o instalarla
*/

'use stric'

//Metodo .from para crear un buffer
const buffer1= Buffer.from("Hola mundo")
console.log(buffer1) //Valor en hexadecimal
console.log(buffer1.toString()) //Valor en string
console.log(buffer1[0]) //Extraemos la posicion 0 del buffer1
//Interar sobre un buffer
for (const item of buffer1) {
    console.log("Interando sobre el buffer"+item)
  }

/*Modificar el valor de un buffer  
Creamos 2 buffer con el mismo valor */
const buffer2 = Buffer.from("cars");
const buffer3 = Buffer.from(buffer2);

// Modificamos el espacio 0 con un valor en bytes`
buffer2[0] = 0x6d; // 0x6d es igual a "m"

console.log(buffer2.toString()); // --> "cars"
console.log(buffer3.toString()); // --> "mars"


//Metodo .alloc para crear un buffer con un tamaño definido
//La función alloc() toma el tamaño del búfer como su primer y único argumento necesario
//Contiene el valor de 1 kb = 1024 bytes
const buf = new Buffer.alloc(1024)
buf[2] = 0x78; // 0x78 es letra x en bytes"

//Se cambio el valor de la posicion 2 con
console.log(buf.toString('utf-8'));

//Podemos pasar parametros a alloc como tamaño,valor y codificacion
Buffer.alloc(6, "x", "utf-8");
