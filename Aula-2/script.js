const botao = document.querySelector('button')

botao.onclick = function calcular() {
  var primeiroValor = parseFloat(document.getElementById('primeiroValor').value);
  var segundoValor = parseFloat(document.getElementById('segundoValor').value);
  var adicao = document.getElementById("adicao");
  var subtracao = document.getElementById("subtracao");
  var multiplicacao = document.getElementById("multiplicacao");
  var divisao = document.getElementById("divisao")
  
  if (adicao.checked != true && subtracao.checked != true && multiplicacao.checked != true && divisao.checked != true) {
    alert ("Você precisa escolher pelo menos uma operação")
  } else if (adicao.checked == true && subtracao.checked != true && multiplicacao.checked != true && divisao.checked != true) {
    let valorFinal = primeiroValor + segundoValor; 
  document.querySelector('#valor-final').innerHTML = 'A operação resulta em: ' + valorFinal
  } else if (subtracao.checked == true && adicao.checked != true && multiplicacao.checked != true && divisao.checked != true) {
    let valorFinal = primeiroValor - segundoValor; 
  document.querySelector('#valor-final').innerHTML = 'A operação resulta em: ' + valorFinal
  } else if (multiplicacao.checked == true && adicao.checked != true && subtracao.checked != true && divisao.checked != true) {
    let valorFinal = primeiroValor * segundoValor; 
  document.querySelector('#valor-final').innerHTML = 'A operação resulta em: ' + valorFinal
  } else if (divisao.checked == true && adicao.checked != true && multiplicacao.checked != true && subtracao.checked != true) {
    let valorFinal = primeiroValor / segundoValor; 
  document.querySelector('#valor-final').innerHTML = 'A operação resulta em: ' + valorFinal
  } else {
    document.querySelector('#valor-final').innerHTML = 'Escolha apenas uma operação.'
  }
    
  
}

//'A operação resulta em: ' + valorFinal.toFixed(2) 