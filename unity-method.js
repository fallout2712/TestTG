// unity-method.js
const tg = window.Telegram.WebApp;
function sendMessageToUnity(unityInstance) {
    var idTg = tg.initDataUnsafe?.user?.id;
    var fnTg = tg.initDataUnsafe?.user?.first_name;
    var lnTg = tg.initDataUnsafe?.user?.last_name;
    unityInstance.SendMessage('Scripts', 'TestF', "Hello my little friend");
    unityInstance.SendMessage('Scripts', 'TestF', fnTg + " " + lnTg);
    unityInstance.SendMessage('Scripts', 'TestFInt', idTg);
  }
