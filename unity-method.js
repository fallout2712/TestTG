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

  // Debug message
  console.log("Our app-kaaaa version is 0.7");
}
function myFunctionOne() {
  console.log("myFunction complete");
  const feedback = 'This is a test message from web app';
  const data = JSON.stringify({ feedback });
  tg.sendData(data);
  console.log("Data sent: ", data); // Логирование отправляемых данных
}
function myFunctionTwo() {
  const query = 'Test'; // Ваш запрос
  const choose_chat_types = ['users', 'groups', 'channels']; // Корректные типы чатов
  tg.switchInlineQuery(query, choose_chat_types);
  console.log("myFunctionTwo complete");
}
function myFunctionThree(parameter) {
  console.log("myFunctionThree complete" + parameter);
  const messageText = "https://t.me/SwixyKeyDrop_bot";
  const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(messageText)}&text=`;
  tg.openTelegramLink(telegramLink);
}
