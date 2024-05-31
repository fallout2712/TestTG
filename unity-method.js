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
  copyToClipboard(tgLink);
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    // navigator.clipboard API доступен
    navigator.clipboard.writeText(text).then(function () {
      console.log('Ссылка скопирована в буфер обмена');
    }).catch(function (err) {
      console.error('Не удалось скопировать текст: ', err);
    });
  } else {
    // fallback для старых браузеров
    let textArea = document.createElement("textarea");
    textArea.value = text;
    // избегаем прокрутки на iOS устройствах
    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Ссылка скопирована в буфер обмена');
    } catch (err) {
      console.error('Не удалось скопировать текст: ', err);
    }
    document.body.removeChild(textArea);
  }
}