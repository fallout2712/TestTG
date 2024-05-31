// unity-method.js
const tg = window.Telegram.WebApp;
const botApi = "7203291206:AAEKqgqzVlLtMLtKr4sTA-rcp3vEoBAb-N0";
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
  const inviteMessage = "Привет! Я хочу пригласить тебя в наше классное приложение. Присоединяйся по ссылке: [https://www.google.com/]";

  // Используем user.id вместо chat.id
  const chatId = tg.initDataUnsafe?.user?.id;

  fetch(`https://api.telegram.org/bot${botApi}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: inviteMessage
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
