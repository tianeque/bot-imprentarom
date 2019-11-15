"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const handleEvent = require("./components/event/handleEvent");

const app = express();

app.set("port", 5000);

app.use(bodyParser.json());

//Crear una ruta

app.get("/", function(req, res) {
  res.send("hola mundo");
});

// Webhook es el lugar donde vivirá nuestro código y donde vamos a enviar y recibir mensajes. Los requisitos
// para su correcto funcionamiento son compatibilidad con https y un puerto para recibir las peticiones GET y POST

// Funcion encargada de crear nuestro webhook.
app.get("/webhook", function(req, res) {
  // Condicion que verifica la informacion de conexion del webhook con nuestra aplicación.
  if (req.query["hub.verify_token"] === "pugpizza_token") {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Pug PIzza: No tienes los permisos");
  }
});

//Funcion para detectar que tipo de elemento recibimos, ya sea un texto, un archivo, una imagen, etc...
// Doc: https://developers.facebook.com/docs/messenger-platform/getting-started/webhook-setup/?locale=es_LA
app.post("/webhook", function(req, res) {
  // En el primer elemento de la entrada, vamos a poder extraer los elementos
  const webhook_event = req.body.entry[0];
  if (webhook_event.messaging) {
    webhook_event.messaging.forEach(event => {
      // event corresponde al sgte objeto y puede cambiar segun el tipo de mensaje que el usuario envie,
      // a continuación se muestra el tipo de objeto con un mensaje.
      // {
      //     sender: { id: '3602091586471412' },
      //     recipient: { id: '560032424465455' },
      //     timestamp: 1571603236944,
      //     message: {
      //       mid: 'qkBaKsra__5Z2g2PSC90MhdOah7zZe-lH_umVyvM7Bk5clTQY203fncEeJlyL_1iXnjzaXrlRQNWblMSBuKHLg',
      //       text: 'hola'
      //     }
      //   }
      handleEvent(event.sender.id, event);
      // console.log(event)
    });
  }
  res.sendStatus(200);
});

app.listen(app.get("port"), function() {
  console.log(
    "Nuestro servidor está funcionando en el puerto",
    app.get("port")
  );
});
