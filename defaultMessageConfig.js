//Este modulo se encarga de configurar el flujo a seguir para que un cliente pueda escoger.

const message = "Hola Soy el bot de ImprentaROM y te ayudaré a mostrar nuestros productos. "

const boton1 = {
    "content_type": "text",
    "title": "¿Quieres una Pizza?.",
    "payload": "PIZZAS_PAYLOAD"
}

const boton2= {
    "content_type": "text",
    "title": "Acerca de",
    "payload": "ABOUT_PAYLOAD"
}

const boton3= {
    "content_type": "text",
    "title": "1/4 Carta",
    "payload": "1-4-CARTA_PAYLOAD"
}

const boton4= {
    "content_type": "text",
    "title": "1/2 Carta",
    "payload": "1-2-CARTA_PAYLOAD"
}

let quick_replies = []

botones = [boton1, boton2, boton3, boton4]

botones.forEach(function(boton) {
    quick_replies.push(boton)
})

module.exports.quick_replies = quick_replies
module.exports.message = message