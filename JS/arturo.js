var escolha

function inicio() {
  escolha = prompt('Escolha a ordem do treinamento (Only Numbers)\n exemplo: 1234 \n 1-Juntar ingredientes \n 2-Estudar feitiços \n 3-Treinar magias ofensivas \n 4- Treinar magias defensivas');
  if (escolha == 2143) {
    return location = ('./primeiro_chefe.html');

  } else {
    alert('Errou a ordem, tente de novo para ir preparado pra guerra!')
    inicio()
  }
}