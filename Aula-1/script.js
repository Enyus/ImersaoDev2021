const botao = 
         document.querySelector ('button')

botao.onclick = function converte() {
  var valorEmPc = document.getElementById('valorEmPc').value;
    
  var valorPcDec = parseFloat(valorEmPc);
    
  let valorReal = valorPcDec * 0.01; 
  document.querySelector('#valor-final-pc').innerHTML = 'O valor informado equivale a ' + valorReal.toFixed(2) + ' PO.' 
}

