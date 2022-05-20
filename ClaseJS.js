
//EVTNOS: diferentes interacciones
const button_submit=document.getElementById("button-submit");
const Input_Name=document.getElementById("Input-name"); 
const Input_LastName=document.getElementById("Input-LastName");
const NameViwe=document.getElementById("nombre-view");
const LastNameView=document.getElementById("apellido-view")

containercolor=getElementById("container-color")
document.getElementById("boton-morado").addEventListener("click",morado,false)

button_submit.addEventListener("click",ingresarTedxt,false);
function ingresarTedxt()
{
    const nombre= Input_Name.value;
    const apellido=Input_LastName.value;

    NameViwe.innerText=nombre;
    LastNameView.innerText=apellido;
}   

function morado(){
    containercolor.classList.add("morado")
}
function amarillo(){
    containercolor.classList.add("amarillo")
}
function rojo(){
    containercolor.classList.add("rojo")
}