var escolha 
function inicio(){
    escolha = prompt('Escolha a ordem do treinamento (Only Numbers)\n exemplo: 1234 \n 1-Atacar os olhos \n 2-Atacar as pernas\n 3-Esquivar das pedras \n 4-Escalar as costas');
    if (escolha==3241){
    alert('Você é excepcional! Prepare-se que agora é sua última batalha, está a um passo do prêmio, aperte ok para sua última guerra!')
    return location = ('../html/ultimo_chefe.html');
    
  }else{
      alert('Você tem que saber como matar um ciclope, um erro pequeno ocasionou sua morte, tente novamente.')
      return location = ('../html/game_over.html')
  }
}