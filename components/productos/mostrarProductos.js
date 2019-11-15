const callSendApi = require("../../callSendApi");
const elements = require("./productos");
//Esta funcion va a ser el CORE de nuestra aplicacion para enviar mensajes.
module.exports = function mostrarProductos(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: elements
        }
      }
    }
  };
  callSendApi(messageData);
};
