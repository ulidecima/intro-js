/*var celular = {
    marca:          "Samsung",
    color:          "azul",
    precio:         19000,
    anio_creacion:  2020
};

//Mostrar (en un console log) el valor de la key precio de dicho objeto.
console.log(celular.precio);

//Insertar la key stock con el valor true.
celular.stock = true;

//Modificar el valor de la llave anio_creacion 2017.
celular['anio_creacion'] = 2017;

//Eliminar la key marca.
delete celular.marca;

//Imprimir todas las llaves del hash almacenado en la variable celular con su respectivo valor.

var keys = Object.keys(celular);
for (var i=0; i < keys.length; i++) {
    var key = keys[i];
    console.log(key + ": " + celular[key]);
}
*/

/*
//Crear un arreglo con los siguientes valores 1, 2, 3 y  4. Almacenarlo en una constante llamada arreglo.
const arreglo = [1,2,3,4];
console.log(arreglo);


//Crear una variable (LET) llamada arreglo_dos, 
//la cual necesito que tengan lo que tiene la constante arreglo más el número 5. 

let arreglo_dos = [...arreglo, 5];
console.log(arreglo_dos); //Spread Operator
//Por lo que sí hacen un print en el console log debería salir : [1, 2, 3, 4, 5] . 
//Importante :  [[1, 2, 3, 4], 5] Sí les queda así, no sería un resultado correcto.

//En una constante, llamada arreglo_tres, asignar un array generado usando map 
//con cada uno de los valores multiplicados por cinco(5) del arreglo_dos.
const arreglo_tres = arreglo_dos.map(function(num){
    return num * 5;
});

console.log(arreglo_tres);
*/

//A partir del siguiente objeto:
const person = {
    name:       'Pepe',
    age:        26,
    hobbies:    ['chess', 'running', 'basket']
};

let nombre, edad;

({name: nombre, age: edad, ...hobbies} = person);

console.log(nombre);
console.log(edad);
console.log(hobbies);

//Realizar un destructuring de dos de las tres propiedades usando un alias para cada uno. 
//Usemos nombre para name, edad para age y para hobbies no usemos.



