"use strict";

const handleMessage = require("../messages/handleMessage");
const handlePostback = require("../postback/handlePostback");

//Funcion manejadora de eventos

/* De acuerdo al tipo de informacion que recibamos, ya sea un message, un attachment, un postback 
    es el comportamiento que nosotros vamos a tener.
*/

module.exports = function handleEvent(senderId, event) {
  //detectando si es un texto
  if (event.message) {
    handleMessage(senderId, event.message);
  }
  // Detectanto si es un postback
  else if (event.postback) {
    handlePostback(senderId, event.postback.payload);
  }
};
