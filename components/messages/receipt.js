const callSendApi = require("../..//callSendApi");

module.exports = function receipt(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "receipt",
          recipient_name: "Sebastian Castillo",
          order_number: "123123",
          currency: "CLP",
          payment_method: "Efectivo",
          order_url: "https://imprentarom.cl",
          timestamp: "123123123",
          address: {
            street_1: "Eleuterio Ramirez 644",
            street_2: "---",
            city: "Santiago",
            postal_code: "12334223",
            state: "R. Metropolitana",
            country: "Chile"
          },
          summary: {
            subtotal: 19000,
            shipping_cost: 3000,
            total_tax: 2000,
            total_cost: 24000
          },
          adjustments: [
            {
              name: "Descuento frecuente",
              amount: 1000
            }
          ],
          elements: [
            {
              title: "Boletas 1/4 carta 1",
              subtitle: "La mejor pizza de pepperoni",
              quantity: 1,
              price: 1000,
              currency: "CLP",
              image_url:
                "https://imprentarom.cl/assets/images/boleta-cuarto-carta-ancha-10-507x362.png"
            },
            {
              title: "Boletas 1/4 carta 2",
              subtitle: "La mejor pizza de pepperoni",
              quantity: 1,
              price: 1000,
              currency: "CLP",
              image_url:
                "https://imprentarom.cl/assets/images/boleta-cuarto-carta-ancha-10-507x362.png"
            }
          ]
        }
      }
    }
  };
  callSendApi(messageData);
};
