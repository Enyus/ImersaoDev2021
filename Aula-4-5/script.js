var nomeFilme = ["Dungeons & Dragons (2000)", "The Gamers (2002)","O Senhor dos Anéis: A Sociedade do Anel (2001)","Dungeons & Dragons (série) (1983-1985)","Critical Role - Campaign 1: Vox Machina (stream) (2015-2017)","Harry Potter e a Pedra Filosofal (2001)"]
var posterFilme = ["https://m.media-amazon.com/images/M/MV5BMTUxMDc3OTQyOV5BMl5BanBnXkFtZTYwMzk5OTc3._V1_UY268_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjljNTQxNDEtOGQ5OC00ZWMxLWIwOTMtYzQ3ZDViYjA0YTM3XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_UY268_CR1,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOWM0MjNkMjEtY2IyNi00ODdmLTk0ODctNjY3YTQzN2Y3N2ZiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR8,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZWZmOGE4ZjAtODQ1Zi00NGJkLTlhNjYtMmU2YzJkNTQ2NTZlXkEyXkFqcGdeQXVyNjcyODE5NzI@._V1_UY268_CR147,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg"]
var descricaoFilme = ["Este desastre foi o primeiro filme live-action baseado na famosa franquia de ttrpg Dungeons & Dragons. Com atuações forçadas e plot terrível, esse filme incrivelmente foi o que me fez conhecer o RPG (ainda bem que conheci o pior do hobby primeiro, huahauhauha)","Esta comédia fantástica conta a história de um grupo de amigos de faculdade que se juntam antes das provas finais para jogar RPG, com direito a um plot twist hilário no final","A trilogia de Peter Jackson não foi a primeira adaptação de sucesso da obra de J .R. R. Tolkien, que acabou por definir vários estereótipos da ficção de fantasia medieval. O terceiro filme rendeu 11 Oscars, CHUPA POTTERHEADS!","Esta série animada foi a primeira adaptação do cinema do ttrpg Dungeons & Dragons, com direito à aparição do lendário dragão Tiamat. Fez parte da infância de muita gente, que raramente sabem que foi baseada em um jogo.","Esse bando de dubladores nerds sentam para jogar Dungeons & Dragons 5e. Bastante responsável pelo aumento gigantesco de vendas da quinta edição do jogo nos Estados Unidos e em outras partes do mundo, assim como pela disseminação de streams de RPG. Usando de seus talentos teatrais, os atores brilham na interpretação de seus personagens e enfrentam diversos perigos, inclusive Vecna, um dos necromantes mais conhecidos de D&D.","Adaptação da obra de J. K. Rowling para as telonas. Juntamente com os livros em que se baseam, a franquia foi responsável por um boom de fãs de fantasia, que até hoje esperam uma coruja vir com sua inscrição para Hogwarts. (mas te chamam de 'trouxa' na cara dura... ou você faz magia por acaso?)"]
var trailerFilme = ["3SnA2rv4ros","jK_H-6dPKBs","V75dMMIW2B4","hHnsMKQJBDA","i-p9lWIhcLQ","VyHV0BRtdxo"]


function adicionarFilme() {
  var filmeAd = document.querySelector('#filme').value
  var posterAd = document.querySelector('#poster').value
  var descricaoAd = document.querySelector('#descricao').value
  var trailerAd = document.querySelector('#trailer').value
  
  if (posterAd.endsWith('.png') == true || posterAd.endsWith('.jpg') == true || posterAd.endsWith('.jpeg') == true) {
      if (trailerAd.startsWith('https://www.youtube.com') == true) {
      alert ("O texto enviado não permite a integração do vídeo. Use apenas as letras finais do link (após o 'termo watch?v='). Por exemplo, se o link for: https://www.youtube.com/watch?v=DvH4PskPZ4M, escreva apenas DvH4PskPZ4M")
      } else {
          var adicionarFilme = nomeFilme.push (filmeAd)
          var adicionarPoster = posterFilme.push (posterAd)
          var adicionarDescricao = descricaoFilme.push (descricaoAd)
          var adicionarTrailer = trailerFilme.push (trailerAd) 
      }
  } else {
    alert ("O link enviado não é uma imagem válida (.png, .jpg, .jpeg).")
  }
      
  document.querySelector('#filme').value = ""
  document.querySelector('#poster').value = ""
  document.querySelector('#descricao').value = ""
  document.querySelector('#trailer').value = ""
}

function mostrarLista() {
    var tabela = "<table border=1><tr>"
    var linha1 = "<td>" + nomeFilme[0] + "</td>"
    var linha2 = "<td>" + descricaoFilme[0] + "</td>"
    var linha3 = "<td><img src='" + posterFilme[0] + "'></td>"
    var linha4 = "<td><iframe width='200' height='113' src='https://www.youtube.com/embed/" + trailerFilme[0] + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></td>"
    for (i=1 ; i<nomeFilme.length ; i++) {
      linha1 = linha1 + "<td>" + nomeFilme[i] + "</td>"
      linha2 = linha2 + "<td>" + descricaoFilme[i] + "</td>"
      linha3 = linha3 + "<td><img src='" + posterFilme[i] + "'></td>"
      linha4 = linha4 + "<td><iframe width='200' height='113' src='https://www.youtube.com/embed/" + trailerFilme[i] + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></td>"
    }
    var tabela = tabela + linha1 + "</tr><tr>" + linha2 + "</tr><tr>" + linha3 + "</tr><tr>" + linha4
    document.querySelector("#resultado").innerHTML = tabela
}