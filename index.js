const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

let buscador = document.querySelector("#buscador")
let btn = document.querySelector("#boton")
let pizzaCont = document.querySelector(".pizza-cont")



function renderPizza() {
  let numero = buscador.value
  pizzas.forEach(pizza => {
    if (pizza.id == numero) {
      pizzaCont.innerHTML=
      // Render en HTML//
      `<img src="${pizza.imagen}" alt="" class="pizza-img">
      <div class="detail-cont">
          <p>${pizza.nombre}</p>
          <p>Ingredientes:</p>
          ${pizza.ingredientes}
          <p>$${pizza.precio}</p>`
          // GUARDADO EN EL LOCAL STORAGE//
        return localStorage.setItem("pizza", JSON.stringify(pizzaCont.innerHTML))
        //--------------------//
    } else if (numero == ""){
      pizzaCont.innerHTML=
      // HTML//
      `<h3>☝️Introduzca un ID.</h3>`
      // REMOVER EL LOCAL STORAGE PARA QUE NO APAREZCA NADA AL INICIAR//
      return localStorage.removeItem("pizza")
      //---------------//
    } else  if (numero < 1 || numero > pizzas.length){
      // HTML//
      pizzaCont.innerHTML=
      `<h3>☝️Por favor, introduzca un ID válido.</h3>`
      // REMOVER EL LOCAL STORAGE PARA QUE NO APAREZCA NADA AL INICIAR//
      return localStorage.removeItem("pizza")
    }
  })}

  function renderLocal () {
    pizzaCont.innerHTML =JSON.parse(localStorage.getItem("pizza"))
  }

  



const init = () => {
  renderLocal() 
  btn.addEventListener("click", renderPizza)
  }

init ()
