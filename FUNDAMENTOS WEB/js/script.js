// selecionar o elemento no html
let nome = window.document.getElementById("nome"); // select por id
let email = document.querySelector("#email"); // select por qualquer #id .classe
let assunto = document.querySelector("assunto");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if ((email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail Válido";
    txtEmail.style.color = "green";
  }
}
