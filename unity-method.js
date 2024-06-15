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

  const initData = tg.initDataUnsafe;
  const startParam = initData.start_param;

  console.log(`v2 Параметр start_param: ${startParam}`);
  
  // Если startParam undefined, то устанавливаем его в null
  const startParamToSend = (startParam !== undefined) ? startParam.toString() : "noRef";

  unityInstance.SendMessage('TG_info', 'PassedValueUrl', startParamToSend);

  unityInstance.SendMessage('TG_info', 'SetId', tgId);
  unityInstance.SendMessage('TG_info', 'SetFirstName', tgFn);
  unityInstance.SendMessage('TG_info', 'SetLastName', tgLn);
  unityInstance.SendMessage('TG_info', 'SetTgInit');

  // Debug message
  console.log("Our app-kaaaa version is 0.9");
  console.log("Received parameter:", startParam);
}
function inviteFriend(parameter) {
  const messageText = "t.me/SwixyKeyDrop_bot/DropKey?startapp=" + parameter;
  const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(messageText)}&text=`;
  tg.openTelegramLink(telegramLink);
  console.log("inviteFriend complete");
}
