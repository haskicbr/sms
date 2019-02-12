const CalculateMessage = (message) => {

    let messageMaxLength = 160;
    let messageDelimiter = 7;
    let messageParts = 1;

    if (message.match(/[А-я]/g) !== null) {
        messageMaxLength = 70;
        messageDelimiter = 3;
    }

    let messageLength = message.length;

    if (messageLength > messageMaxLength) {
        messageMaxLength -= messageDelimiter;
        messageParts += parseInt(messageLength / messageMaxLength);
        messageLength = messageLength % messageMaxLength;
    }

    return {
        messageParts,
        messageLength,
        messageMaxLength,
    }
};

export default CalculateMessage;