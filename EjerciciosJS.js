
// EJEERICIO 1
var edad;
edad=prompt("Digita tu edad"); //Se pide la edad

if(edad >=18){ // Se valida que se igual o mayor a 18

    console.log("Puedes conducir");
}
else if (edad<0) //Si digitan un numero negativo 
{
    alert("Digito un valor no valido");
}
else  //si es menor a 18
{
    console.log ("No tienes la edad suficiente para conducir");
}

//EJERCICIO 2
var nota;
nota=prompt("Digite la nota numerica de su examén");

if (nota >= 0 && nota <=3)
{
 console.log ("Tu nota es: Muy deficiente");
}
else if (nota >= 3.1 && nota <=5)
{
    console.log ("Tu nota es: Insuficinte");
}
else if (nota >= 5.1 && nota <=6)
{
    console.log ("Tu nota es: Suficinte");
}
else if (nota >= 6.1 && nota <=7)
{
    console.log ("Tu nota es: Buena");
}
else if (nota >= 7.1 && nota <=9)
{
    console.log ("Tu nota es: Notable");
}
else if (nota >=9.1  && nota <=10)
{
    console.log ("Tu nota: Sobresaliente");
}

//EJERCICIO 3

// 123 => '132' => ['1' , '2' , '3'] => ['3', '2' , '1'] => '123'   =>

function invertirNumero(numero){
    return Number(numero.toString().split('').reverse().join(''));
}
let cifra=prompt("Digite una cifra númerica");
console.log(invertirNumero(cifra)); 

//EJERCICIO 4
const meses = ['Enero' , 'Febrero','Marzo', 'Abril' , 'Mayo', 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre', 
'Noviembre' , 'Diciembre']
for (i=0; i< meses.length; i++){ //la funcion .lenght devuelve el numero de elementos que hay en un array 
    console.log(meses[i] + "\n");
}




//EJERCICIO 5
var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
    console.log("numero2 es positivo");
}
if(numero1=!-0) {
    console.log("numero1 es negativo o distinto de cero");
}
  if(numero1+1==2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}



