let amigo = [];


function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;
  
  if (!nombreAmigo) {
    resultado.innerHTML = "DEBES INGRESAR UN NOMBRE";

    return;
  
    }


amigo.push(nombreAmigo);
inputAmigo.value = "";
inputAmigo.focus();
renderizarAmigos();
 resultado.innerHTML = "";
  }

function renderizarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";


  for (let i = 0; i < amigo.length; i++){
    let item = document.createElement("li");
    item.textContent = amigo [i];
    listaAmigos.appendChild (item);
  }
}
  
  function sortearAmigo() {
    if (amigo.length <= 1) {
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = "DEBES INGRESAR EL NOMBRE DE AL MENOS DOS AMIGOS";
    
      return;
     } 
        
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
  

    
    amigo = [];
}