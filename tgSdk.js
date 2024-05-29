function callUnityMethod() {
    // Get the instance of the Unity object
    var unityInstance = unityInstance || UnityLoader.instantiate("unityContainer", "Build/Build.json", {onProgress: UnityProgress});
    
    // Call the Unity method
    unityInstance.SendMessage('test', 'CallHello');
}