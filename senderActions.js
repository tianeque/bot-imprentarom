"use strict";

const callSendApi = require("./callSendApi");

module.exports = function senderActions(senderId) {
  const messageData = {
    recipient: {
      id: senderId
    },
    sender_action: "typing on"
  };
  callSendApi(messageData);
};
