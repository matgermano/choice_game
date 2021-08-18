var escolha

function inicio() {
  escolha = prompt('Escolha seu personagem (Only Numbers) \n 1-Arturo \n 2-Thoman \n 3-Tessete');
  if (escolha == 1) {
    return location = ('./arturo.html')
  } else if (escolha == 2) {
    return location = ('./thoman.html')
  } else if (escolha == 3) {
    return location = ('./tessete.html')
  } else {
    alert('Escolha Inválida')
    inicio()
  }
}