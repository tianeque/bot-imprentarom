'use strict'

const varianteProducto = require('./varianteProducto')
const mostrarProductos = require('./mostrarProductos')


//Esta funcion se encargará de ejecutar una acción de acuerdo al payload recibido
module.exports = function handlePostback(senderId, payload) {
    console.log(payload)
    switch (payload) {
        case 'GET_STARTED_PUGPIZZA':
            console.log(payload)    
        break;
        //aqui se enlaza el boton del menu pizza (capturando el payload) y se invoca la funcion mostrarProductos
        case "PEPPERONI_PAYLOAD":
            varianteProducto(senderId)
        break;
        case "PIZZAS_PAYLOAD":
            mostrarProductos(senderId)
        break;
    }
}
