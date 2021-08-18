var escolha

function inicio() {
  escolha = prompt('Escolha a ordem do treinamento (Only Numbers)\n exemplo: 1234 \n 1-Afiar o Machado \n 2-Flexões \n 3-Golpes \n 4-Esquivas');
  if (escolha == 1243) {
    return location = ('./primeiro_chefe.html');

  } else {
    alert('Errou a ordem, tente de novo para ir preparado pra guerra!')
    inicio()
  }
}