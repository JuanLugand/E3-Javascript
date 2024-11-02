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


const input = document.getElementById("pizza-id");
const button = document.getElementById("search-btn");
const resultContainer = document.getElementById("result-container");

// Carga última pizza buscada de localStorage
document.addEventListener("DOMContentLoaded", () => {
  const lastPizza = JSON.parse(localStorage.getItem("lastPizza"));
  if (lastPizza) {
    renderPizzaCard(lastPizza);
  }
});

button.addEventListener("click", () => {
  const pizzaId = parseInt(input.value);
  resultContainer.innerHTML = ""; // Limpia el contenedor

  if (!pizzaId) {
    renderError("Por favor, ingrese un número válido.");
    return;
  }

  const pizza = pizzas.find((p) => p.id === pizzaId);
  if (pizza) {
    renderPizzaCard(pizza);
    localStorage.setItem("lastPizza", JSON.stringify(pizza));
  } else {
    renderError("No se encontró una pizza con ese ID.");
  }
});

function renderPizzaCard(pizza) {
  resultContainer.innerHTML = `
    <div class="card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
    </div>
  `;
}

function renderError(message) {
  resultContainer.innerHTML = `<p class="error">${message}</p>`;
}