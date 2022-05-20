const contenedor =document.getElementById("contenedor");

const contenido=(src) => {return `<img src="${src}  alt="dog" srcset=""> </img>`};  

const url="https://dog.ceo/api/breeds/image/random";

async function fetchDog(url){ // Funcion asincrona 

    console.log("Hola");
    const respuesta=await fetch(url);
    console.log(respuesta);


    const respuestaJson=await respuesta.json(); 
    
    return await respuestaJson

}


function renderHTML(contenido){
    contenedor.innerHTML+=contenido(src)
}


fetchDog(url);