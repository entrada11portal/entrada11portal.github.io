document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("sininho");

  if (botao) {
    botao.addEventListener("click", function () {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      OneSignalDeferred.push(async function (OneSignal) {
        await OneSignal.Slidedown.promptPush();
        console.log("clicou no sininho");
      });
    });
  }
});
