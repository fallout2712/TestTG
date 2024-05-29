function Start() {
    var tgSDKobj = GameObject.Find("tgSDKobj");
    if (tgSDKobj != null) {
        var name = "ТестТг";
        let number = 10;
        const someText = "bal bla bla";

        // Отправляем значения в Unity
        tgSDKobj.SendMessage('SetValues', JSON.stringify({ name: name, number: number, someText: someText }));
    } else {
        console.error("tgSDKobj not found");
    }
}