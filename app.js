// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

let arrayAmigos = [];

const agregarAmigo = () => {
  verificarAmigo(amigo.value.trim());
  arrayAmigos.push(amigo.value);
  listaAmigos.innerHTML = arrayAmigos
    .map((amigo) => `<li>${amigo}</li>`)
    .join("");
  amigo.value = "";
};

const sortearAmigo = () => {
  if (arrayAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);
  const amigoSorteado = arrayAmigos[indiceAleatorio];
  resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
  arrayAmigos = [];
  listaAmigos.innerHTML = "";
};

const verificarAmigo = (nombreAmigo) => {
  if (nombreAmigo === "") {
    alert("El nombre del amigo no puede estar vacío");
    return;
  } else if (arrayAmigos.includes(nombreAmigo)) {
    alert("El amigo ya está en la lista");
    return;
  } else if (nombreAmigo.length < 3) {
    alert("El nombre del amigo debe tener al menos 3 caracteres");
    return;
  }
};
