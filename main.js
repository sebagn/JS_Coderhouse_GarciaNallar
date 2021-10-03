/*     // Construccion del paciente y su caracteristica
class Paciente {
    constructor(nombre, peso, altura, IMC, condicion) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.IMC = IMC;
        this.condicion = condicion;
    }
    funcionIMC() {
        this.IMC = (this.peso / (this.altura/100)**2).toFixed(2);
        if (this.IMC < 18.5) {
            this.condicion = "bajo peso";
        }
        else if (this.IMC < 25){
            this.condicion = "normal";
        }
        else if (this.IMC < 30){
            this.condicion = "sobrepeso";
        }
        else if (this.IMC < 35){
            this.condicion = "obesidad 1";
        }
        else if (this.IMC < 40){
            this.condicion = "obesidad 2";
        }
        else if (this.IMC < 45){
            this.condicion = "obesidad 3"
        }
        else {this.condicion = "obesidad 4"}
    }
}
    // Construir la lista de pacientes
let listaPacientes = [];
alert("Carga hasta 2 pacientes")
function cargarPaciente() {
    let nombre = prompt("Como te llamas?");
    let peso = parseInt(prompt("Cuanto pesas? (kg)"));
    let altura = parseInt(prompt("Cuanto mides? (cm):"));
    const paciente = new Paciente(nombre, peso, altura);
    paciente.funcionIMC();
    listaPacientes.push(paciente);
}
for (let index = 0; index < 2; index++) {
    cargarPaciente();   
}
console.log("Lista de pacientes:");
console.log(listaPacientes);
 */


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
const menu = [comida1,comida2,comida3,comida4,comida5,comida6,comida7,comida8,comida9,comida10];
const dietaVegetariana = menu.filter(e => e.tipo != "carnes");
const dietaVegana = menu.filter(e => e.tipo != "carnes" && e.tipo !="huevos" && e.tipo !="lacteos");
const dietaKeto = menu.filter(e => e.tipo != "hidratos" && e.tipo != "vegetales");

console.log("Dieta regular:");
console.log(menu);
console.log("Dieta vegetariana:");
console.log(dietaVegetariana.map(p => p.nombre));
console.log("Dieta vegana:");
console.log(dietaVegana.map(p => p.nombre));
console.log("Dieta keto:");
console.log(dietaKeto.map(p => p.nombre));

/* 
// DESAFIO DE ORDENAR ARRAYS
console.log("Menu ordenado por calorias(asc):");
console.log(menu.sort((a,b) => a["calorias"] - b["calorias"])); */

// DOM
    //Eleccion de la dieta
let dietaSeleccionada = prompt('Elegi tipo de dieta: "regular", "vegana"');
console.log(dietaSeleccionada);
    //Creacion de una seccion 
const seccionDietas = document.getElementById("seccion-dietas");

function listado(e) {
    let li = document.createElement("li");
    seccionDietas.append(li);
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>${e.nombre}</h3>
                                <p>Tipo: ${e.tipo}</p>`;
        li.append(contenedor);
};
if (dietaSeleccionada == "regular") {
    seccionDietas.innerHTML += "<h2>Ejemplo Dieta Regular</h2>";
    for (const e of menu) {
        listado(e);
    }
} else if (dietaSeleccionada == "vegana"){
    seccionDietas.innerHTML += "<h2>Ejemplo Dieta Vegana</h2>";
    for (const e of dietaVegana) {
        listado(e);
    }
} else {
    document.write("Dieta no encontrada :(")
};
