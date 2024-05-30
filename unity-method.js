// unity-method.js
function sendMessageToUnity(unityInstance) {
    unityInstance.SendMessage('Scripts', 'TestF', "Hello my little friend");
    unityInstance.SendMessage('Scripts', 'TestFInt', 100);
  }
