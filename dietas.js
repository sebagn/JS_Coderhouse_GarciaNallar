// Array de Objetos - comidas
    // Construccion del menu
class Comida {
    constructor (nombre, tipo, calorias, carbos, proteinas, grasas, unidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.calorias = calorias;
        this.carbos = carbos;
        this.proteinas = proteinas;
        this.grasas = grasas;
        this.unidad = unidad;
    }
}
    // Algunas comidas para el menu
const comida1 = new Comida("Vaca","carnes",117,0,32,3,"gramos")
const comida2 = new Comida("Pollo","carnes",117,0,32.5,3.3,"gramos")
const comida3 = new Comida("Pescado","carnes",127,0,20.5,4.4,"gramos")
const comida4 = new Comida("Huevo","huevos",74,0.1,6.2,5,"unidades")
const comida5 = new Comida("Leche","lacteos",74,9.2,9.2,0,"mililitros")
const comida6 = new Comida("Queso","lacteos",306.9,1,18.3,7.5,"gramos")
const comida7 = new Comida("Arroz","hidratos",340,78,6.8,3,"gramos")
const comida8 = new Comida("Soja","legumbres",480,40,40,22,"gramos")
const comida9 = new Comida("Tomate","vegetales",18,3.9,0.9,0.2,"gramos")
const comida10 = new Comida("Cebolla","vegetales",40,9.3,1.1,0.1,"gramos")

    // Array de comidas y sus filtros segun dietas
const menu = [comida1,comida2,comida3,comida4,comida5,comida6,comida7,comida8,comida9,comida10]; //es la "dieta regular"
const dietaVegetariana = menu.filter(e => e.tipo != "carnes");
const dietaVegana = menu.filter(e => e.tipo != "carnes" && e.tipo !="huevos" && e.tipo !="lacteos");
const dietaKeto = menu.filter(e => e.tipo != "hidratos" && e.tipo != "vegetales");


// DOM - selecciona una dieta y te muestra las comidas que incluyen esta dieta

const seccionDietas = document.getElementById("seccion-dietas");

let botonRegular = document.getElementById("botonRegular")
let botonVegana = document.getElementById("botonVegana")
let botonVegetariana = document.getElementById("botonVegetariana")
let botonKeto = document.getElementById("botonKeto")
let dietaSeleccionada;
let losBotones = [botonRegular, botonVegetariana, botonVegana, botonKeto]

const listado = () => {
     for (const e of dietaSeleccionada) {
        let li = document.createElement("li");
        li.className = "comida tarjeta"
        li.innerHTML = `<h3> ${e.nombre}</h3>
                        <p>Tipo: ${e.tipo}<br>
                        Calorias: ${e.calorias}</p>`;
        seccionDietas.append(li);
    }
    $(".hidden").slideDown("slow");
};

    // Comportamiento de los botones

botonRegular.onclick = () => {
    dietaSeleccionada = menu;
    seccionDietas.innerHTML = "<h2>Ejemplo Dieta Regular</h2>";
    listado();
};
botonVegetariana.onclick = () => {
    dietaSeleccionada = dietaVegetariana;
    seccionDietas.innerHTML = "<h2>Ejemplo Dieta Vegetariana</h2>";
    listado();
};
botonVegana.onclick = () => {
    dietaSeleccionada = dietaVegana;
    seccionDietas.innerHTML = "<h2>Ejemplo Dieta Vegana</h2>";
    listado();
};
botonKeto.onclick = () => {
    dietaSeleccionada = dietaKeto;
    seccionDietas.innerHTML = "<h2>Ejemplo Dieta Keto</h2>";
    listado();
};

$(".btn-dieta").on("click", function(){
    $(".btn-dieta").removeClass("seleccionado");
    $(this).addClass("seleccionado");
});