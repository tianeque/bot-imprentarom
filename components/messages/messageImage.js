const callSendApi = require("../../callSendApi");

//Funcion para enviar Media templates, para responder al usuario con una imagen
module.exports = function messageImage(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    message: {
      attachment: {
        type: "image",
        payload: {
          url: "https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif"
        }
      }
    }
  };
  callSendApi(messageData);
};
