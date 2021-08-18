//Case Sensitive => reconhece letras MAIUSCULAS e minusculas(e diferencia elas)

//document selector => ensinando a pegar elementos
//por tag: document.getElementsByTagName("h3")
//por classe: document.getElementsByClassName(".nomedaclasse")
//por nome: document.getElementsByName("email")
//por ID: document.getElementById("#idDoElemento")
//por seletor: document.querySelector(coringa ele pega por tudo)

//Variaveis => métodos para declarar
//   var nome = "Vinicius"  //jeito mais antigo
// let nome = "Vinicius"  //jeito mais atual - variavel que vai sofrer mudanças
//   const nome = "Vinicius" //jeito mais atual - variavel 'fixa' 

let digiteAlgo = document.querySelector('#digiteAlgo')

function validaCampo() {
    if(digiteAlgo.value.length < 5) {
        digiteAlgo.style.color = 'red'
        digiteAlgo.style.border = '1px solid red'
    } else {
        digiteAlgo.style.color = 'green'
        digiteAlgo.style.border = '1px solid green'
    }
}

