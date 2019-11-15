let elements = []

const producto1 = {
    "title": "Boletas 1/4 Carta",
    "subtitle": "Tamaño 10 x 14 cm.",
    "image_url": "https://imprentarom.cl/assets/images/boleta-cuarto-carta-ancha-10-507x362.png",
    "buttons": [
        {
            "type": "postback",
            "title": "Elegir",
            "payload": "PEPPERONI_PAYLOAD"
        }
    ]
}

const producto2 = {
    "title": "Boletas 1/2 Carta",
    "subtitle": "Tamaño 20 x 14 cm.",
    "image_url": "https://imprentarom.cl/assets/images/boleta-media-carta-3-1033x728.png",
    "buttons": [
        {
            "type": "postback",
            "title": "Elegir",
            "payload": "BARBECUE_PAYLOAD"
        }
    ]
}

const producto3 = {
    "title": "Boletas 5x1",
    "subtitle": "Boletas con calco",
    "image_url": "https://imprentarom.cl/assets/images/boleta5x1-corriente-1-551x753.png",
    "buttons": [
        {
            "type": "postback",
            "title": "Elegir",
            "payload": "BARBECUE_PAYLOAD"
        }
    ]
}

const productos = [producto1, producto2, producto3]
function incorporarProductos(productos) {
    productos.forEach(function(producto){
        elements.push(producto)
    })
}

incorporarProductos(productos)

module.exports = elements

