const pizza =[ 
    {
    id: 1,
    nombre: "Pizza Napolitana",
    ingredientes:["Tomate", "Mozzarella", "Oregano", "Ajo"],
    precio: 850,
    imagen: `<img class="pizza_imagen" src="./img/pizza_napolitana.jpg" alt="Pizza Napolitana">`,
    },
    {
    id: 2,
    nombre: "Pizza Fugazzeta",
    ingredientes:["Cebolla", "Mozzarella", "Aceituna", "Aceite de oliva"],
    precio: 900,
    imagen:`<img class="pizza_imagen" src="./img/pizza_fugazzeta.jpg" alt="Pizza Fugazzeta">`
    },
    {
    id: 3,
    nombre: "Pizza Caprese",
    ingredientes:["Tomate", "Mozzarella", "Albahaca", "Provenzal"],
    precio: 950,
    imagen:`<img class="pizza_imagen" src="./img/pizza_capresse.jpg" alt="Pizza Capresse">`
    },
    {
    id: 4,
    nombre: "Pizza Calabresa",
    ingredientes:["Calabresa","Mozzarella","Provolone","Morron"],
    precio: 1000,
    imagen:`<img class="pizza_imagen" src="./img/pizza_calabresa.jpg" alt="Pizza Calabresa">`
    },
    {
    id: 5,
    nombre:"Pizza champiñon",
    ingredientes: ["Champiniones", "Mozzarella", "Crema", "Cebolla"],
    precio:1050,
    imagen:`<img class="pizza_imagen" src="./img/pizza_champiñon.jpg" alt="Pizza Champiñon">`
    },
    {
    id: 6,
    nombre:"Pizza Hawaiana",
    ingredientes:["Anana", "Mozzarella", "Jamon", "Cebolla"],
    precio: 1100,
    imagen:` <img class="pizza_imagen" src="./img/pizza_hawaiana.jpg" alt="Pizza Hawaiana">`
    }
]
const form = document.getElementById("form")
const number = document.getElementById("number")
const button = document.getElementById("button")
const contenedor = document.getElementById("render")
const isEmpty = value => !value.length

const contenedorVacio = () => { 
    contenedor.innerHTML = `
    <div class="render_contenedor">
        <h2 class="render_nombre">El contenedor esta vacio<h2>
        <h3 class="render_ingredientes">Por favor ingrese un numero<h3>
    </div>
    `;
};

const NumeroInexistente = () => { 
    contenedor.innerHTML = `
    <div class="render_contenedor">
        <h2 class="render_nombre">Esta pizza no esta disponible<h2>
        <h3 class="render_ingredientes">Por favor ingrese otro numero<h3>
    </div>
    `;
}; 


const validacion = () => {
    let isValid = false ;
    const numberValue = number.value;
    const pizza1 = pizza
    const igualar = pizza1.some( elemento => {return elemento.id == numberValue })
     if (igualar === true) {
        isValid = true;}
    return isValid
}

const getPizzaHtml = render=> {
    return `<div class="render_contenedor">
    <h2 class="render_nombre">${render.nombre}<h2>
    ${render.imagen}
    <h3 class="render_ingredientes">Ingredientes: <span>${render.ingredientes.join(", ")}<span><h3>
    <h3 class="render_precio">Precio: <span>$${render.precio}<span><h3>
    <div>`
};



 function init () {
    const devolver = JSON.parse(localStorage.getItem("pizza")); 
    const devolverHtml = devolver.map(render => getPizzaHtml(render)).join(``)
    contenedor.innerHTML = devolverHtml;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isEmpty(number.value)){
            contenedorVacio();
            return;
        }else if (validacion() ){
            const render = pizza.filter(elemento =>{
                return elemento.id == number.value
            });
            const renderHtml = render.map(render => getPizzaHtml(render)).join(``)
            contenedor.innerHTML = renderHtml;
            localStorage.setItem("pizza",JSON.stringify(render));
            form.reset();
        } else if(!validacion()){
            contenedor.innerHTML = "";
            NumeroInexistente()
        }
     })
 }

 init()