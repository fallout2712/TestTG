setTimeout(function() {
    var name = "ТестТг";
    let number = 10;
    const someText = "bal bla bla";

    SendMessage("tgSDKobj", JSON.stringify({ name: name, number: number, someText: someText }));
}, 5000); // 5000 миллисекунд = 5 секунд