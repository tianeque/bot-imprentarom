const handleAttachments = require("./handleAttachments");
const defaultMessage = require("./defaultMessage");
const messageImage = require("./messageImage");
const contactSupport = require("./contactSupport");
const showLocations = require("./showLocations");
const receipt = require("./receipt");
const getLocation = require("./getLocation");

//Funcion manejadora de mensajes
/*  */

module.exports = function handleMessage(senderId, event) {
  // Detectando si existe un texto en el event
  if (event.text === "Hola") {
    defaultMessage(senderId);
  }
  //Enviando una imagen como mensaje
  else if (event.text === "Imagen") {
    messageImage(senderId);
  }
  // Contactar a soporte
  else if (event.text === "Soporte") {
    contactSupport(senderId);
  }
  // Enviando una Web View en este caso un mapa a través de URL
  else if (event.text === "Webview") {
    showLocations(senderId);
  }
  // Enviando un recibo
  else if (event.text === "Recibo") {
    receipt(senderId);
  }
  // Obteniendo la ubicacion: DEPRECADO
  else if (event.text === "Location") {
    //getLocation(senderId)
  }
  //detectando un adjunto
  else if (event.attachments) {
    handleAttachments(senderId, event);
  }
};
