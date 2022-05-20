//n1= Number(n1);
/*
function suma (n1,n2) //Parametros
{
      return n1+n2
}

let numsuma= suma(4,5);
console.log(numsuma);

const suma2=function (a,b){return a+b};

const suma3=(a,b) => {return(a+b)};

const suma4= (a,b) => a+b
*/





//EJERCICIOS

//EJERCICIO 1
/*
const calculateDogAge = function (edad){return edad*7}

for (let index = 1; index <= 3; index++) {
    let perro1=prompt("Digite la edad del perro numero "+ index) //Se pide la edad del perro 
    let resultado= calculateDogAge(perro1); 
    alert ( "¡Tu perrito numero " + index + " tiene " + resultado + " años en años de perro!" ); 
}
*/





/*
//EJERCICIO 2

 const celsiusToFahrenheit = function (Celsius){return ((Celsius*1.8)+32)};
 const fahrenheitToCelsius = function (Faren){return ((Faren-32)/1.8)} ;

 let opcion=prompt ("BIENVENIDO A LA CONVERSION DE TEMPERATURAS:" + "\n" + 
 "Por favor digite la opción que desea usar" + "\n" +
 "1. Conversion de Celsius a Fahjrenhert" + "\n" +
 "2. Conversion de Fahrenheit a celsius")

 opcion=opcion(Number);

 switch (opcion){
    case 1: 
        let gradosC= prompt ("Por favor digite los grados Celsius que sea convertir:");
        let conversion1=celsiusToFahrenheit(gradosC);
        alert (gradosC +" °C Son " + conversion1 + " °F" );
        break;
        
    case 2:
        let gradosf= prompt ("Por favor digite los grados Celsius que sea convertir:");
        let conversion2=fahrenheitToCelsius(opcion);
        alert (gradosf +" °F Son " + conversion2 + " °C" );
        break;

    default:
        alert ("Digito una opcíon no valida");
}
*/





//EJERCICIO 3

function upperCase (parametro){

   var array= parametro.split(" ");
   var newarray1=[];
    for (let index=0; index < array.lenght; index++)
        {
                newarray1.push(array[index].charAt(0).toUpperCaser()+array[index].slice(1));

        }

        return newarray1.join("");

}
    var cadena=prompt("Ingres una oración")
 console.log(upperCase(cadena));

 