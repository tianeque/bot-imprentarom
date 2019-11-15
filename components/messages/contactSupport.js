const callSendApi = require("../../callSendApi");

module.exports = function contactSupport(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Hola este es el canal de soporte, Quieres llamarnos?",
          buttons: [
            {
              type: "phone_number",
              title: "Llamar a un asesor: Sebastian Castillo",
              payload: "+56988395204"
            }
          ]
        }
      }
    }
  };
  callSendApi(messageData);
};
