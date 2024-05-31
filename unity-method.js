// unity-method.js
const tg = window.Telegram.WebApp;
const botApi = "7203291206:AAEKqgqzVlLtMLtKr4sTA-rcp3vEoBAb-N0";
const sourceChatId = "604531364"; // Замените на идентификатор группы, полученный выше
const messageId = "4"; // Замените на идентификатор сообщения, который нужно переслать

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

  inviteFriend();
}

function inviteFriend() {
  const chatId = tg.initDataUnsafe?.user?.id;

  fetch(`https://api.telegram.org/bot${botApi}/forwardMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      from_chat_id: sourceChatId,
      message_id: messageId
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert('Приглашение отправлено!');
    } else {
      alert('Ошибка при отправке приглашения: ' + data.description);
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
    alert('Ошибка при отправке приглашения');
  });
}
