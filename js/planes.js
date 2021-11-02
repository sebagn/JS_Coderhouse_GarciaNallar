$("#botonMostrar").click(() => {
    $("#nuestrosPlanes").html("")
    $.get("js/planes.json", function(respuesta,estado){
        if (estado === "success"){
            let data = respuesta;
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                $("#nuestrosPlanes").append(
                    `<div class="hidden tarjeta plan">
                    <h3>Plan ${element.tipo}</h3>
                    <p>El plan ${element.tipo} tiene un costo de $${element.precio}</p>
                    </div>`
                )
                $(".hidden").slideDown("slow");
            }
        }   
    })
})