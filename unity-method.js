// unity-method.js
function sendMessageToUnity(unityInstance) {
    unityInstance.SendMessage('Scripts', 'TestF', "Hello");
    unityInstance.SendMessage('Scripts', 'TestFInt', 777);
  }