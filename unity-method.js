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
  var container = document.createElement('div');
  container.style.padding = '10px';

  var promptText = document.createElement('div');
  promptText.textContent = 'Твоя реферальная ссылка:';
  container.appendChild(promptText);

  var linkInput = document.createElement('input');
  linkInput.setAttribute('value', tgLink);
  linkInput.setAttribute('readonly', true);
  linkInput.style.width = '100%';
  container.appendChild(linkInput);

  var copyButton = document.createElement('button');
  copyButton.textContent = 'Скопировать';
  copyButton.addEventListener('click', function () {
    linkInput.select();
    document.execCommand('copy');
    alert('Ссылка скопирована!');
  });
  container.appendChild(copyButton);

  document.body.appendChild(container);
}
