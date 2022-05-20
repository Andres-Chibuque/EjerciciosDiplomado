/*
var carro= new Object()
    
    carro.modelo= "Mustang";
    carro.year="2000";
    carro.marca = "ford";

    var carro2=
    {
        modelo:"Mustang",
        year:"2000",
        marca: "ford"

    }

    console.log(carro2.kilometraje)
*/



//EJERCICIO
let programación = {
    lenguajes : [ " JavaScript " , " Python " , " Ruby " ],
    desafiante : true ,
    gratificante : true ,
    dificultad : 8 ,
    chistes : " http://stackoverflow.com/questions/234075/what-is -su-mejor-programador-broma "
};

//EJERCICIO 1
programación.lenguajes.push("Go");
console.log(programación.lenguajes);

//EJERCICIO 2
programación.dificultad=7;
console.log(programación.dificultad);

//EJERCICIO 3
delete programación.chistes;
console.log(programación.chistes);

//EJERCICIO 4
programación.isFun= true;
console.log(programación.isFun);


//EJERCICIO 5 
for (let index = 0; index < programación.lenguajes.length; index++) {
    console.log(programación.lenguajes[index] + "\n")
}

//EJERCICIO 6
let i=0;
while (i<programación)
{
    console.log
}