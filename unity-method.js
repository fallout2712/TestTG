// unity-method.js
const tg = window.Telegram.WebApp;
function sendMessageToUnity(unityInstance) {
    tg.ready();
    tg.expand();
    var idTg = tg.initDataUnsafe?.user?.id;
    var fnTg = tg.initDataUnsafe?.user?.first_name;
    var lnTg = tg.initDataUnsafe?.user?.last_name;
    unityInstance.SendMessage('Scripts', 'TestF', "Hello my little friend v 2");
    unityInstance.SendMessage('Scripts', 'TestF', fnTg + " " + lnTg);
    unityInstance.SendMessage('Scripts', 'TestFInt', idTg);
  }
