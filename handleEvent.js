'use strict'

const handleMessage = require('./handleMessage')
const handlePostback = require('./handlePostback')

//Funcion manejadora de eventos
module.exports = function handleEvent(senderId, event){
    //detectando si es un texto
    if(event.message) {
        handleMessage(senderId, event.message)
    } 
    // Detectanto si es un postback
    else if (event.postback) {
        handlePostback(senderId, event.postback.payload)
    }
}
