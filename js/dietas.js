// DOM - selecciona una dieta y muestra las comidas que incluyen esta dieta
const seccionDietas = document.getElementById("seccion-dietas");
let botonRegular = document.getElementById("botonRegular")
let botonVegana = document.getElementById("botonVegana")
let botonVegetariana = document.getElementById("botonVegetariana")
let botonKeto = document.getElementById("botonKeto")
let dietaSeleccionada;
let losBotones = [botonRegular, botonVegetariana, botonVegana, botonKeto]

//Construye las tarjetas de comida
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

//Trae las comidas del JSON
 $.get("js/dietas.json", function(respuesta, estado){
    if (estado === "success"){

        // Array de comidas y sus filtros segun dietas
        let menu = respuesta;
        const dietaVegetariana = menu.filter(e => e.tipo != "carnes");
        const dietaVegana = menu.filter(e => e.tipo != "carnes" && e.tipo !="huevos" && e.tipo !="lacteos");
        const dietaKeto = menu.filter(e => e.tipo != "hidratos" && e.tipo != "vegetales");     
        
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

        //Colorea los botones
        $(".btn-dieta").on("click", function(){
            $(".btn-dieta").removeClass("seleccionado");
            $(this).addClass("seleccionado");
        });
    }
});