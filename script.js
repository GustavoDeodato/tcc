document.addEventListener("DOMContentLoaded", function() {
  var btnLogin = document.getElementById("btnLogin");
  var btnCadastrar = document.getElementById("btnCadastrar");

  btnLogin.addEventListener("click", function() {
    window.location.href = "login.html";
  });

  btnCadastrar.addEventListener("click", function() {
    window.location.href = "cadastrar.html";
  });
});
