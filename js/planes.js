$("#botonMostrar").click(() => {
    $.get("js/planes.json", function(respuesta,estado){
        if (estado === "success"){
            let data = respuesta;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                $("#nuestrosPlanes").append(
                    `<div class="hidden tarjeta"><h3>Plan ${element.tipo} ${element.precio} </h3></div>`
                )
                $(".hidden").slideDown("slow");
            }
        }   
    })
})