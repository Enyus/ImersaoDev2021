var rafa = {
  nome: "Raffa",
  vitorias: 1,
  empates: 1,
  derrotas: 0,
  pontos: 0,
}

var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 1,
  derrotas: 1,
  pontos: 0,
}

var jogadores = [rafa, paulo]

for (i=0 ; i<jogadores.length; i++) {
  jogadores[i].pontos = calculaPontos(jogadores[i])
}

for (i=0 ; i<jogadores.length; i++) {
  arrayNomes = [jogadores[0].nome]
  arrayNomes.push(jogadores[i].nome)
}
//console.log (arrayNomes)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

exibir (jogadores)

function exibir (jogadores) {
  var html = ""
  var totalPartidas = 0
  for (var i=0 ; i<jogadores.length ; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onclick='addVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onclick='addEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onclick='addDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
  for (var i=0 ; i<jogadores.length ; i++) {
    totalPartidas += jogadores[i].vitorias + jogadores[i].empates /2
  }
  html += "<tr><td colspan='4'>Total de Partidas:</td><td colspan='4'>" + totalPartidas + "</td></tr>"
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function addVitoria (i) {
  var jogador = jogadores[i]
  var jogadorVencido = prompt("De quem " + jogadores[i].nome + " ganhou?")
  var jogadorVencidoIndex = arrayNomes.indexOf(jogadorVencido)
  //  console.log (jogadorEmpatadoIndex)
  if (jogadorVencido == jogador.nome) {
    alert ("O jogador não pode ganhar dele mesmo")
    return
  } else if( jogadorVencidoIndex < 0 || jogadorVencidoIndex > jogadores.length) {
    alert ("Este jogador não existe. Clique em Adicionar Jogador.")
    return
  } else {
    jogador.vitorias++
    jogadores[jogadorVencidoIndex].derrotas++
    jogador.pontos = calculaPontos(jogador)
    jogadores[jogadorVencidoIndex].pontos = calculaPontos(jogadores[jogadorVencidoIndex])
    exibir(jogadores)
  }
}

function addEmpate (i) {
  var jogador = jogadores[i]
  var jogadorEmpatado = prompt("Com quem " + jogadores[i].nome + " empatou?")
  var jogadorEmpatadoIndex = arrayNomes.indexOf(jogadorEmpatado)
//  console.log (jogadorEmpatadoIndex)
  if (jogadorEmpatado == jogador.nome) {
    alert ("o jogador não pode empatar com ele mesmo")
    return
  } else if( jogadorEmpatadoIndex < 0 || jogadorEmpatadoIndex > jogadores.length) {
    alert ("Este jogador não existe. Clique em Adicionar Jogador.")
    return
  } else {
    jogador.empates++
    jogadores[jogadorEmpatadoIndex].empates++
    jogador.pontos = calculaPontos(jogador)
    jogadores[jogadorEmpatadoIndex].pontos = calculaPontos(jogadores[jogadorEmpatadoIndex])
    exibir(jogadores)
  }
}

function addDerrota (i) {
 var jogador = jogadores[i]
  var jogadorVencedor = prompt("De quem " + jogadores[i].nome + " perdeu?")
  var jogadorVencedorIndex = arrayNomes.indexOf(jogadorVencedor)
  //  console.log (jogadorVencedorIndex)
  if (jogadorVencedor == jogador.nome) {
    alert ("O jogador não pode perder dele mesmo.")
    return
  } else if( jogadorVencedorIndex < 0 || jogadorVencedorIndex > jogadores.length) {
    alert ("Este jogador não existe. Clique em Adicionar Jogador.")
    return
  } else {
    jogador.derrotas++
    jogadores[jogadorVencedorIndex].vitorias++
    jogador.pontos = calculaPontos(jogador)
    jogadores[jogadorVencedorIndex].pontos = calculaPontos(jogadores[jogadorVencedorIndex])
    exibir(jogadores)
  }
}

function adicionarJogador () {
  var nomeAdicionado = prompt("Adicione o nome do jogador:")
  var jogadorAdicionado = {
    nome: nomeAdicionado,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
  jogadores.push(jogadorAdicionado)
  arrayNomes.push(nomeAdicionado)
  exibir(jogadores)
}