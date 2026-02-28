document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("SUA_PUBLIC_KEY_AQUI");

  const form = document.getElementById("formContato");
  if (!form) return;

  const mensagemSucesso = document.getElementById("mensagemSucesso");
  const botao = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    botao.disabled = true;
    botao.textContent = "Enviando...";

    emailjs.sendForm(
      "contato",
      "entrada11portal",
      this
    ).then(function () {

      mensagemSucesso.style.display = "block";
      form.reset();

      botao.disabled = false;
      botao.textContent = "Enviar Mensagem";

    }, function (error) {

      alert("Erro ao enviar. Tente novamente.");
      console.log(error);

      botao.disabled = false;
      botao.textContent = "Enviar Mensagem";

    });

  });

});
