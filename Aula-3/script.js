var vidaJogador = 13
var vidaOrc = 15
console.log ("O jogador tem " + vidaJogador + " PVs e o orc tem " + vidaOrc + " PVs." )

function atacar() {
while (vidaJogador>0 && vidaOrc>0) {
    vidaOrc = vidaOrc - parseInt(Math.random() * (12-4) + 4)
    vidaJogador = vidaJogador - parseInt(Math.random() * (16-4) + 4)
    console.log("O jogador atacou o orc, que ficou com " + vidaOrc + " PVs e o Orc contra atacou e o jogador ficou com " + vidaJogador + " PVs.")
    document.querySelector('#resultado').innerHTML = "Você acerta o orc com sua espada longa, mas não foi o suficiente para matá-lo e ele te ataca ferozmente e agora você tem " + vidaJogador + " de vida."
}

//quando um não for maior que zero:

if (vidaOrc<1) {
  document.querySelector('#resultado').innerHTML = "Você acerta o orc com sua espada longa e seu ataque foi certeiro, varando o corpo da criatura, que cai sem vida. Você sobreviveu... desta vez."
} else {
  document.querySelector('#resultado').innerHTML = "Você acerta o orc com sua espada longa, mas não foi o suficiente para matá-lo e ele te ataca ferozmente e você sucumbe perante a selvageria da criatura."
}
}