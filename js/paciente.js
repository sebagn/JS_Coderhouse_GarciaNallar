// Construccion del paciente y su caracteristica
    // Construir la lista de pacientes
let listaPacientes = [];
class Paciente {
    constructor(nombre, apellido, dni, email, peso, altura, IMC, condicion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
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
    // Crea el paciente a partir del formulario "nuevo paciente"
function crearPaciente() {
    let formulario = document.getElementById("form-crearPaciente");
    const paciente = new Paciente ( formulario.nombre.value, 
                                    formulario.apellido.value, 
                                    formulario.dni.value, 
                                    formulario.email.value, 
                                    formulario.peso.value, 
                                    formulario.altura.value); 
    paciente.funcionIMC();
    listaPacientes.push(paciente);
}
//Almacenar en localStorage
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Boton de crear paciente 
let seccionPaciente = document.getElementById("seccionPaciente");
$("#form-crearPaciente").on("submit", function(e) {
    e.preventDefault();
    
    // Verifica si dni esta registrado o no lo completaron
    let yaUsado = false;
    let dniVacio = false;
    for(i = 0; i < localStorage.length + 1; i++){
        let localdni = localStorage.key(i);
        if ($("#dni").val() == ""){ 
            dniVacio = true;
            alert("El campo dni es obligatorio.");
            break;
        }
        else if ($("#dni").val() == localdni){
            yaUsado = true;
            alert("El dni ingresado ya se encuentra registrado.");   
            break;
        }
    };
    // Si no esta vacio ni registrado, crea el nuevo paciente
    if (!yaUsado && !dniVacio) {
        crearPaciente();     

        // Almacena la lista de pacientes en local storage (como objetos individuales)
        for (const pac of listaPacientes) {
            guardarLocal(pac.dni, JSON.stringify(pac));
        };
        $(this)[0].reset();
            
        // Muestra un mensaje "paciente creado
        $(".exito").html(`Paciente creado exitosamente`)
                    .fadeIn() ; 
    } 
});
// Cualquier cambio borra el mensaje de paciente creado.
$(document).on("click",function(){
    $(".exito").hide();
})

// Recuperar algun paciente del local storage
$("#revisar-paciente").on( "click", function(){
    let pacienteCargado = JSON.parse(localStorage.getItem($("#dni-paciente").val()));
    console.log(pacienteCargado);
    if (pacienteCargado) {
        $("#paciente-cargado").html(`<div class="hidden tarjeta row align-items-center" id="paciente__card">
        <div class="hidden col-xxxl-4" id="paciente__avatar"><img src="images/batman_90804.ico" class="img-batman" alt="Batman"></div>
        <div class="col-xxxl-8" >
            <h3> Paciente: ${pacienteCargado.nombre} ${pacienteCargado.apellido}</h3><br>
            <p> Dni: ${pacienteCargado.dni}<br>
                Peso: ${pacienteCargado.peso}<br>
                Altura: ${pacienteCargado.altura}<br>
                Condición: ${pacienteCargado.condicion}</p>
        </div></div>`
        );
    //ANIMACIONESSSSSSSSSS
        $("#paciente__card").slideDown(700)
                            .css({"background-color": "black",
                                  "color":"white"});
        $("#paciente__avatar")  .delay(700)
                                .slideDown("slow")
                                ;          
    }
    else{
        $("#paciente-cargado").html(`<h3 class='hidden'> Paciente no encontrado</h3>`);
        $(".hidden").fadeIn("slow");
    };
});



// Borra un paciente del local storage
$("#eliminar-paciente").on("click", function(){
    localStorage.removeItem($("#dni-paciente").val());
     $("#paciente-cargado").html(`<h3 class="pac-eliminado hidden"> Se ha eliminado el paciente DNI: ${$("#dni-paciente").val()}`)
     $(".hidden").slideDown("slow")
})



