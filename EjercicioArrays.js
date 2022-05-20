/*
//ARRAY

const arreglo1=[1,2,3,4,5,6 , "black", true, null,NaN];
let arreglo2=["pink", "blue", "black"];


//FUNCIONES 
// arreglo1.forEach( Element => alert(Element)); //Recorre todos los elementos
//arreglo.unshift() // Añadir un elemento al principio de un Array
//arreglo.shift() //Eliminar el primer elemento de un Array
//arreglo1.pop() //Eliminar ultimo elemento de un array
//arreglo1.push(4) // Agregar un elemento de un array, a la ultima posicion 
//var variable = arreglo1.find(Element=>Element<4) //Buscar elemento de un arry
//console.log(foreach);
*/


//EJERCICIO 1

const array=[10,20,9,45,50,67,7,8,9,10];

/*
//Numero Mayor del array  
var mayor=0;
for (let index = 0; index < array.length; index++) {
  if (array[index]>mayor)
    {
            mayor=array[index];
    }
}
console.log("El numero mayor es: " + mayor);
*/

/*
//EJERCICIO 2
//Numero menor
var menor=Number.MAX_SAFE_INTEGER;
for (let index = 0; index < array.length; index++) {
    if (array[index]<menor)
    {
            menor=array[index];
    }
}
console.log ("El numero menor es: " + menor);
*/


//Media del array
var division=array.length;
let suma=0;
for (let index = 0; index < array.length; index++) {
    suma=suma+array[index];
}
console.log("La media del array es:" + suma/division);


