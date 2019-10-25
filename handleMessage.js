
const handleAttachments = require('./handleAttachments')
const defaultMessage = require('./defaultMessage')

//Funcion manejadora de mensajes
/*  */

module.exports = function handleMessage(senderId, event) {
    // Detectando si existe un texto en el event
    if(event.text) {
        defaultMessage(senderId)
    }
    //detectando un adjunto
    else if (event.attachments){
        handleAttachments(senderId, event)
    }
}