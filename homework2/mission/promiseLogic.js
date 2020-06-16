let isMomHappy = true
var phone = {
    brand: 'Samsung',
    color: 'black'
};

var willIGetNewPhone = (param) => {
    return new Promise((resolve, rejecte) => {
        if (isMomHappy) {
            resolve(console.log(phone))
        } else {
            rejecte(Error("mom is not happy"))
        }
    });
};


willIGetNewPhone(true).then(function (text) {
    console.log(text);
}, function (error) {
    console.error(error);
});
