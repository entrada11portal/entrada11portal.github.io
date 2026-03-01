/*document.getElementById("sininho").addEventListener("click", function() {
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.showSlidedownPrompt();
  });
});*/


document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("sininho");

  if (botao) {
    botao.addEventListener("click", function () {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      OneSignalDeferred.push(async function (OneSignal) {
        await OneSignal.Slidedown.promptPush();
      });
    });
  }
});
