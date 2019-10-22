'use strict'
const request = require('request')
const access_token = require('./token')

module.exports = function callSendApi(response) {
    // con request podremos enviar la info al bot
    request({
        'uri': "https://graph.facebook.com/me/messages",
        'qs': {
            "access_token": access_token
        },
        "method": "POST",
        "json": response
    },
    
    // Funcion que valida el envio del mensaje.
    function(err) {
        if(err) {
            console.log('Ha ocurrido un error')
        } else {
            console.log('Mensaje enviado')
        }
    }
)
}