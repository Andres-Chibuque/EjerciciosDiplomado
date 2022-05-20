/*

//WHILE
//Imprimir los numeros del 1 al 100
let i=0;
while (i <= 100) 
{
 console.log(i);
 i++;    
}
*/

//For
//Imprima la suma de todos los números impares entre 1 y 100

let suma=0;
for (let index = 1; index <= 100; index++) {
    if (index%2 && index!=0)
    {
        suma=suma+index;
    }
    
}
console.log ("La suma de todos los npumero impares entre 1 y 100 es igual a : " + suma); 




