// unity-method.js
const tg = window.Telegram.WebApp;
const tgLink = "https://t.me/SwixyKeyDrop_bot";

function sendMessageToUnity(unityInstance) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#000000");
  tg.setBackgroundColor("#000000");

  var tgId = tg.initDataUnsafe?.user?.id;
  var tgFn = tg.initDataUnsafe?.user?.first_name;
  var tgLn = tg.initDataUnsafe?.user?.last_name;

  unityInstance.SendMessage('TG_info', 'SetId', tgId);
  unityInstance.SendMessage('TG_info', 'SetFirstName', tgFn);
  unityInstance.SendMessage('TG_info', 'SetLastName', tgLn);
  unityInstance.SendMessage('TG_info', 'SetTgInit');

  shareToTelegramLink();
}

function shareToTelegramLink() {
  var link = 'https://t.me/SwixyKeyDrop_bot';
  copyTextToClipboard(link);
}

function copyTextToClipboard(text) {
  var input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

