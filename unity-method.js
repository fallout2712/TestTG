// unity-method.js
const tg = window.Telegram.WebApp;
function sendMessageToUnity(unityInstance) {
    unityInstance.SendMessage('Scripts', 'TestF', "Hello my little friend");
    var idTg = tg.initDataUnsafe?.user?.id;
    unityInstance.SendMessage('Scripts', 'TestFInt', idTg);
  }
