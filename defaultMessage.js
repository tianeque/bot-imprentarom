const senderActions = require('./senderActions')
const callSendApi = require('./callSendApi')
const defaultMessageConfig = require('./defaultMessageConfig')

module.exports = function defaultMessage(senderId) {
    const messageData = {
        "recipient": {
            "id": senderId
        },
        "message": {
            "text": defaultMessageConfig.message,
            "quick_replies": defaultMessageConfig.quick_replies
        }
    }
    senderActions(senderId)
    callSendApi(messageData);
}

