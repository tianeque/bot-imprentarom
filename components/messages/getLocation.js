const callSendApi = require("../../callSendApi");

module.exports = function getLocation(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    message: {
      text: "Ahora ¿Puedes proporcionarnos tu ubicacion?",
      quick_replies: [
        {
          content_type: "location"
        }
      ]
    }
  };
  callSendApi(messageData);
};
