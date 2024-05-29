function sendValuesToUnity() {
    var name = "ТестТг";
    let number = 10;
    const someText = "bal bla bla";

    var data = JSON.stringify({ name: name, number: number, someText: someText });
    UnitySendMessage("YourUnityObjectName", "SetValues", data);
}