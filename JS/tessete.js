var escolha

function inicio() {
  escolha = prompt('Escolha a ordem do treinamento (Only Numbers)\n exemplo: 1234 \n 1-Cuspe ácido \n 2-Tentáculos extensivos \n 3-Movimento de ventosas \n 4-Esquivas');
  if (escolha == 4321) {
    return location = ('../html/primeiro_chefe.html');

  } else {
    alert('Errou a ordem, tente de novo para ir preparado pra guerra!')
    inicio()
  }
}