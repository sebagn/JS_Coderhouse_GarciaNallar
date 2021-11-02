
 const planes = [ {"id":1, "tipo":"personalizado", "precio":1500, "unit":"ARS"},
 {"id":2, "tipo":"basico", "precio":500, "unit":"ARS"} ]





$("#botonComprar").on("click", function(){  
   




        /* // Seleccion del plan
    let planElegido = [
        (planes[parseInt(($('input[name=tipo]:checked', '#tipo-plan').val()))])
    ];
        ;
        console.log(planElegido);

        // Conversion al tipo MP 
    const planToMP = planElegido.map(element => {
        let nuevoElemento = {
            title: element.tipo,
            description: element.tipo,
            picture_url: "imagen",
            category_id: "planes",
            quantity: 1,
            currency_id: "ARS",
            unit_price: element.precio
        }
        return nuevoElemento;
    })
    console.log(planToMP);

    $.ajax({
        method: "POST",
        url: 'https://api.mercadopago.com/checkout/preferences/', 
        id: "2841301356588287",
        headers:{
            Authorization: "Bearer TEST-2a3701c5-7d22-4dbc-b071-075055f91a02"
            // Authorization: "Bearer TEST-2841301356588287-102823-fae41906c18a26d445898bd4a8473ae0-78045733"
        },
        data:  JSON.stringify({
            items:(planElegido)
        }),
        success: function(respuesta , estado) {
            const data = respuesta;
            console.log(data);
            // window.open(data.init_point, "_blank")
        }
    }) */

})
