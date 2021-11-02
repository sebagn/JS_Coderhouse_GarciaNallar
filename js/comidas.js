        // NO FUNCIONA xq no tengo acceso :(
            
const Foods = "https://trackapi.nutritionix.com/v2/natural/nutrients"

$("#botonBuscador").on("click", function() {
    let comida = $("#comida").val()
    console.log(comida) 

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": Foods,
        "method": "POST",
        "headers": {
        "content-type": "application/json",
        "accept": "application/json",
        "x-app-id": "b3755188",
        "x-app-key": "6770f905c49b1d08fffb49859e9ee913",
        "x-remote-user-id": "0",
        "cache-control": "no-cache",
        "postman-token": "fa71a67a-c306-e015-1ccb-f9e7b4dd2424"
        },
        "processData": false,
        "data": `{"query":"${comida}"}`
        }

            // Crea la tarjeta de la comida
        $.ajax(settings).done(function (response) {
        let comida = response;
        console.log(comida)
        $("#comida-buscada").html(
            `<div class="tarjeta"><h3>${comida.foods[0].food_name.toUpperCase()}</h3>
            <img src="${comida.foods[0].photo.thumb}" alt="foto de la comida">
            <p>Calorias: ${comida.foods[0].nf_calories}</p></div>
            <small>Fuente: nutritionix.com</small>`
        );
    });
});

// Para que la tecla "ENTER" no actualice la pagina, y ejecute la busqueda
      $('#comida').bind('keydown',function(e){ 
        if(e.keyCode===13){ //if this is enter key  
            e.preventDefault();       
            $("#botonBuscador").trigger("click");}
    });  

