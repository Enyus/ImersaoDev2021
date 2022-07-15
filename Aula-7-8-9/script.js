var cartaOrc ={
  nome: "Orc",
  imagem: "https://i.pinimg.com/originals/c8/fc/d3/c8fcd3c1fa3da0638199f226519155b0.png",
  atributos: {
    dano: 5,
    resistencia: 5,
    magia: 1,
  }
}

var cartaLich ={
  nome: "Lich",
  imagem: "http://pm1.narvii.com/6804/76b06cf61c27bd68de24b5f11cb2b2ceddb4701dv2_00.jpg",
  atributos: {
    dano: 4,
    resistencia: 6,
    magia: 10,
  }
}

var cartaMestre ={
  nome: "O Mestre",
  imagem: "https://img.quizur.com/f/img5df3bfd7f28368.64749951.jpg?lastEdited=1576255453",
  atributos: {
    dano: 10,
    resistencia: 10,
    magia: 10,
  }
}

var cartaJogador ={
  nome: "Jogador",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcY_yWBSmn2psFJv3HO2egsYyU8_GiRrb7w&usqp=CAU",
  atributos: {
    dano: parseInt(Math.random() * (10 - 1) + 1),
    resistencia: parseInt(Math.random() * (10 - 1) + 1),
    magia: parseInt(Math.random() * (10 - 1) + 1),
  }
}

var cartaKobold ={
  nome: "Kobold",
  imagem: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/1000/1000/636252780450300625.jpeg",
  atributos: {
    dano: 3,
    resistencia: 1,
    magia: 1,
  }
}

var cartaBeholder ={
  nome: "Beholder, o Observador",
  imagem: "https://static.wikia.nocookie.net/forgottenrealms/images/6/66/Beholder_-_Scott_M._Fischer.jpg/revision/latest?cb=20200226103050",
  atributos: {
    dano: 4,
    resistencia: 4,
    magia: 8,
  }
}

var cartaDragao ={
  nome: "Dragão",
  imagem: "https://i0.wp.com/aventureirosdosreinos.com/wp-content/uploads/2019/06/Drag%C3%A3o-Vermelho_001.png?resize=249%2C250&ssl=1",
  atributos: {
    dano: 8,
    resistencia: 8,
    magia: 9,
  }
}

var cartaUrsoCoruja ={
  nome: "Urso Coruja",
  imagem: "https://i.pinimg.com/originals/47/f9/81/47f9816a31261978d484ef981f0a9084.jpg",
  atributos: {
    dano: 7,
    resistencia: 6,
    magia: 1,
  }
}

var cartaDrow ={
  nome: "Drow",
  imagem: "https://static.wikia.nocookie.net/forgottenrealms/images/1/13/Drow_3e.jpg/revision/latest?cb=20190809133546",
  atributos: {
    dano: 5,
    resistencia: 4,
    magia: 6,
  }
}

var cartaDevoradorDeMentes ={
  nome: "Devorador de Mentes",
  imagem: "http://pm1.narvii.com/6836/e1c30bb68e82caef39557cabda00ff3bedd68283v2_00.jpg",
  atributos: {
    dano: 4,
    resistencia: 3,
    magia: 8,
  }
}

var cartaNpc ={
  nome: "NPC queridinho do mestre",
  imagem: "https://static.wikia.nocookie.net/forgottenrealms/images/5/5f/Drizzt_and_guenhwyvar-5e.jpg/revision/latest/scale-to-width-down/340?cb=20200903220211",
  atributos: {
    dano: parseInt(Math.random() * (9 - 1) + 1) + 1,
    resistencia: parseInt(Math.random() * (10 - 1) + 1) + 1,
    magia: parseInt(Math.random() * (9 - 1) + 1) + 1,
  }
}

var cartaTarrasque ={
  nome: "O Tarrasque",
  imagem: "https://www.mundoepic.com.br/wp-content/uploads/2018/10/tarrasque-DD.jpg",
  atributos: {
    dano: 10,
    resistencia: 10,
    magia: 1,
  }
}

var cartas = [cartaOrc, cartaLich, cartaMestre, cartaJogador, cartaKobold, cartaBeholder, cartaDragao, cartaUrsoCoruja, cartaDrow, cartaDevoradorDeMentes, cartaNpc, cartaTarrasque]
var cartaSelecionada = ""
//console.log(cartaSelecionada)
var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar()
atualizaDeck()

function atualizaPlacar () {
  document.querySelector("#placar").innerHTML = "<p>Placar</p><p>Jogador: " + pontosJogador + "/" + pontosMaquina + " Máquina"
}

function atualizaDeck () {
  document.querySelector("#quantidade-cartas").innerHTML = "<p>Quantidade de cartas no Deck:</p><p>" + cartas.length + "/12</p>"
}

function sortearCarta() {
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    var cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    var cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
    cartaSelecionada = cartaJogador
    cartaInimiga = cartaMaquina
    document.querySelector("#btnSortear").disabled = true
    document.querySelector("#btnJogar").disabled = false
    mostrarCarta()
    atualizaDeck()
}

function mostrarCarta() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaSelecionada.imagem})`
    var nome = `<p class="carta-subtitle">${cartaSelecionada.nome}</p>`
    var opcoesTexto = ""
//console.log (cartaSelecionada.atributos)
    for (var atributo in cartaSelecionada.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaSelecionada.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  document.querySelector("#escolha").innerHTML = "Escolha o seu atributo"
  document.querySelector("#carta-maquina").innerHTML = ""
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaSelecionada.atributos[atributoSelecionado] == undefined) {
    alert("Escolha uma opção de Atributo")
    return      
    } else if (cartaSelecionada.atributos[atributoSelecionado] > cartaInimiga.atributos[atributoSelecionado]) {
        document.querySelector("#resultado").innerHTML = "Você Venceu esta rodada. Acerto Crítico!"
        pontosJogador++
    } else if (cartaSelecionada.atributos[atributoSelecionado] < cartaInimiga.atributos[atributoSelecionado]) {
        document.querySelector("#resultado").innerHTML = "Você teve um Erro Crítico, tente novamente na próxima rodada."
        pontosMaquina++
    } else {
        document.querySelector("#resultado").innerHTML = "Empatou. Nhé"
    }

  document.querySelector("#btnJogar").disabled = true
  document.querySelector("#btnProximaRodada").disabled = false
  mostrarCartaMaquina ()
  atualizaPlacar ()
}

function mostrarCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaInimiga.imagem})`
    var nome = `<p class="carta-subtitle">${cartaInimiga.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaInimiga.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaInimiga.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  if (cartas.length > 0) {
    document.querySelector("#btnSortear").disabled = false  
    document.querySelector("#btnProximaRodada").disabled = true
    document.querySelector("#resultado").innerHTML = ""
    document.querySelector("#escolha").innerHTML = ""
    document.querySelector("#carta-jogador").innerHTML = ""
    document.querySelector("#carta-maquina").innerHTML = ""
    document.getElementById("carta-maquina").style.backgroundImage = ""
    document.getElementById("carta-jogador").style.backgroundImage = ""  
  } else if (pontosJogador > pontosMaquina) {
    document.querySelector("#btnSortear").disabled = false  
    document.querySelector("#btnProximaRodada").disabled = true
    document.querySelector("#resultado").innerHTML = ""
    document.querySelector("#escolha").innerHTML = ""
    document.querySelector("#carta-jogador").innerHTML = ""
    document.querySelector("#carta-maquina").innerHTML = ""
    document.getElementById("carta-maquina").style.backgroundImage = ""
    document.getElementById("carta-jogador").style.backgroundImage = ""
    document.querySelector("#resultado").innerHTML = "Você venceu esse combate! Passe de Nível!"
  } else if (pontosJogador < pontosMaquina) {
    document.querySelector("#btnSortear").disabled = false  
    document.querySelector("#btnProximaRodada").disabled = true
    document.querySelector("#resultado").innerHTML = ""
    document.querySelector("#escolha").innerHTML = ""
    document.querySelector("#carta-jogador").innerHTML = ""
    document.querySelector("#carta-maquina").innerHTML = ""
    document.getElementById("carta-maquina").style.backgroundImage = ""
    document.getElementById("carta-jogador").style.backgroundImage = ""
    document.querySelector("#resultado").innerHTML = "Você perdeu! TPK!!!"
  } else {
    document.querySelector("#btnSortear").disabled = false  
    document.querySelector("#btnProximaRodada").disabled = true
    document.querySelector("#resultado").innerHTML = ""
    document.querySelector("#escolha").innerHTML = ""
    document.querySelector("#carta-jogador").innerHTML = ""
    document.querySelector("#carta-maquina").innerHTML = ""
    document.getElementById("carta-maquina").style.backgroundImage = ""
    document.getElementById("carta-jogador").style.backgroundImage = ""
    document.querySelector("#resultado").innerHTML = "Você empatou... Railroad do caraio..."
  }
}