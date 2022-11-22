const pizza =[ 
    {
    id: 1,
    nombre: "Pizza Napolitana",
    ingredientes:["Tomate", "Mozzarella", "Oregano", "Ajo"],
    precio: 850
    },
    {
    id: 2,
    nombre: "Pizza Fugazzeta",
    ingredientes:["Cebolla", "Mozzarella", "Aceituna", "Aceite de oliva"],
    precio: 900
    },
    {
    id: 3,
    nombre: "Pizza Caprese",
    ingredientes:["Tomate", "Mozzarella", "Albahaca", "Provenzal"],
    precio: 950
    },
    {
    id: 4,
    nombre: "Pizza Calabresa",
    ingredientes:["Calabresa","Mozzarella","Provolone","Morron"],
    precio: 1000
    },
    {
    id: 5,
    nombre:"Pizza champiñon",
    ingredientes: ["Champiniones", "Mozzarella", "Crema", "Cebolla"],
    precio:1050
    },
    {
    id: 6,
    nombre:"Pizza Hawaiana",
    ingredientes:["Anana", "Mozzarella", "Jamon", "Cebolla"],
    precio: 1100
    }
]
const form = document.getElementById("form")
const number = document.getElementById("number")
const button = document.getElementById("button")
const contenedor = document.getElementById("render")
const isEmpty = value => !value.length

const showError = (input,message) => {
    const formField = input.parentElement;
    const errorConteiner = formField.querySelector("small");
    errorConteiner.textContent = message;
};
const clearError = (input) => {
    const formField = input.parentElement;
    const errorConteiner = formField.querySelector("small");
    errorConteiner.textContent = "";
};

const validacion = () => {
    let isValid = false ;
    const numberValue = number.value;
    const pizza1 = pizza
    const igualar = pizza1.some( elemento => {return elemento.id == numberValue })
    if (isEmpty(number.value)){
        showError(number,"El contenedor esta vacio")
        return;
    } else if (igualar === false){
        showError(number,"Esta pizza no existe")
    } else{
    isValid = true;
    clearError(number)}
    return isValid
}

const render = pizza.filter(elemento =>{
    return elemento.id == number.value
});
render.forEach((render) => {
    console.log(render.id, render.nombre)
});

const getPizzaHtml = render=> {
    return `
    <h2>Nombre de la pizza: ${render.nombre}<h2>
    <h3>Precio de la pizza: $${render.precio}<h3>`
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validacion() ){
        const render = pizza.filter(elemento =>{
            return elemento.id == number.value
        });
        const renderHtml = render.map(render => getPizzaHtml(render)).join(``)
        contenedor.innerHTML = renderHtml
       form.reset();}
    else if (!validacion()){
        contenedor.innerHTML = ""
    }
 })