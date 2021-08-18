var escolha

function inicio() {
  escolha = prompt('Deseja unir-se? \n(Only Number)\n\n 1- Vamos Juntos \n 2- Consigo Sozinho')
  if ((escolha == 1) || (escolha == 2)) {
    escolha = prompt('Para derrotar o Prince você precisa entrar na mente dele! \n Qual é o número de 1 a 9 que ele tá pensando? \n Exemplo: 2');
  } else {
    alert('Escolha a opção correta')
    inicio()
  }
  if (escolha == 7 || escolha == 4) {
    alert('Você é imbatível! Venceu Prince e descobriu todos seus segredos! Venha, chegou o momento de escolher seu prêmio junto de seus amigos!')
    return location = ('../html/premio.html');

  } else {
    alert('Você errou, Prince não perdoa erros, e te derrotou com seus poderes misteriosos.')
    return location = ('../html/game_over.html')
  }
}