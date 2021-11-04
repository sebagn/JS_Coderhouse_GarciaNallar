const Foods = "https://trackapi.nutritionix.com/v2/natural/nutrients"

$("#botonBuscador").on("click", function() {
    //curl API de nutritionix.com
    let comida = $("#comida").val();
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
        };

        // Crea la tarjeta de la comida
    $.ajax(settings).done(function (response,status) {
        if (status === "success"){
            const { food_name, 
                    photo,
                    nf_calories,
                    nf_cholesterol,
                    nf_potassium,
                    nf_protein,
                    nf_sodium,
                    nf_sugars,
                    nf_saturated_fat} = response.foods[0]
         
            $("#comida-buscada").html(
                `<div id="comida-buscada__card" class="tarjeta">
                    <h3>${food_name.toUpperCase()}</h3>
                    <img src="${photo.thumb}" alt="foto de la comida">
                    <p id="nutri-info">Calorias: ${nf_calories}</p>
                    <button id="ver-mas" class="btn">Mas info</button>
                </div>
                <small>Fuente: nutritionix.com</small>`
            );
            $("#ver-mas").click(function(){
                $("#comida-buscada__card").animate(
                    {"height":"400px"}
                )
                $("#nutri-info").append(
                    `<br>Colesterol: ${nf_cholesterol}
                    <br>Potasio: ${nf_potassium}
                    <br>Proteinas: ${nf_protein}
                    <br>Sodio: ${nf_sodium}
                    <br>Azucares: ${nf_sugars}
                    <br>Grasas saturadas: ${nf_saturated_fat}
                    `
                )
                $(this).hide()
            });
        } 
    })
});

// Para que la tecla "ENTER" no actualice la pagina, y ejecute la busqueda
$('#comida').bind('keydown',function(e){ 
    if (e.keyCode === 13) { //if this is enter key  
        e.preventDefault();       
        $("#botonBuscador").trigger("click");
    }   
});  

