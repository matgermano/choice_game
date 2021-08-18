var escolha

function inicio() {
  escolha = prompt('Escolha seu personagem (Only Numbers) \n 1-Arturo \n 2-Thoman \n 3-Tessete');
  if (escolha == 1) {
    return location = ('../html/arturo.html')
  } else if (escolha == 2) {
    return location = ('../html/thoman.html')
  } else if (escolha == 3) {
    return location = ('../html/tessete.html')
  } else {
    alert('Escolha Inválida')
    inicio()
  }
}