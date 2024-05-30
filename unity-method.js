// unity-method.js
function sendMessageToUnity(unityInstance) {
    unityInstance.SendMessage('Scripts', 'TestF', "777");
    unityInstance.SendMessage('Scripts', 'TestFInt', 10);
  }
