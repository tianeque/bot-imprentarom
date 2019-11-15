const callSendApi = require("../../callSendApi");

module.exports = function showLocations(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Sucursal Mexico",
              image_url:
                "https://imprentarom.cl/assets/images/boleta-cuarto-carta-ancha-10-507x362.png",
              subtitle: "Eleuterio Ramirez 644, Santiago centro",
              buttons: [
                {
                  title: "Ver en el mapa",
                  type: "web_url",
                  url: "https://goo.gl/maps/jF3jXEW7cs25w2TG7",
                  webview_height_ratio: "full"
                }
              ]
            },
            {
              title: "Sucursal Colombia",
              image_url:
                "https://imprentarom.cl/assets/images/boleta-cuarto-carta-ancha-10-507x362.png",
              subtitle: "Eleuterio Ramirez 644, Santiago centro",
              buttons: [
                {
                  title: "Ver en el mapa",
                  type: "web_url",
                  url: "https://goo.gl/maps/jF3jXEW7cs25w2TG7",
                  webview_height_ratio: "tall"
                }
              ]
            },
            {
              title: "Precios 1/4 carta",
              image_url:
                "https://imprentarom.cl/assets/images/boleta-cuarto-carta-ancha-10-507x362.png",
              subtitle: "Eleuterio Ramirez 644, Santiago centro",
              buttons: [
                {
                  title: "Ver en el mapa",
                  type: "web_url",
                  url:
                    "https://imprentarom.cl/boletas-1-4-y-1-2-carta.html#extTable1-4c",
                  webview_height_ratio: "tall"
                }
              ]
            },
            {
              title: "Precios 1/2 carta",
              image_url:
                "https://imprentarom.cl/assets/images/boleta-media-carta-3-1033x728.png",
              subtitle: "Eleuterio Ramirez 644, Santiago centro",
              buttons: [
                {
                  title: "Ver en el mapa",
                  type: "web_url",
                  url:
                    "https://imprentarom.cl/boletas-1-4-y-1-2-carta.html#extTable1-53",
                  webview_height_ratio: "tall"
                }
              ]
            }
          ]
        }
      }
    }
  };
  callSendApi(messageData);
};
