'use strict'

module.exports = function handleAttachments(senderId, event){
    let attachment_type = event.attachments[0].type
    switch (attachment_type) {
        case 'image':
            console.log(attachment_type)
        break;
        case 'video':
            console.log(attachment_type)
        break;
        case 'audio':
            console.log(attachment_type)
        break;
        case 'file':
            console.log(attachment_type)
        break;
    } 
}