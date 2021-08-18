var escolha

function inicio() {
    escolha = prompt('O que deseja fazer com o prêmio? \n(Only Number)\n\n 1- Repartir \n 2- Disputar')
    if (escolha == 1) {
        escolha = prompt('Pra quem será destinado o elixir de cura? \n(Only Numbers)\n\n 1-Arturo \n 2-Thoman \n 3-Tessete');
    } else {
        alert('Achou que ficaria com tudo né? Mas os outros se uniram e destruiram seus planos..')
        return location = ('../html/game_over.html')
    }
    if (escolha == 1) {
        escolha = prompt('Pra quem será destinado o tesouro precioso? \n(Only Numbers)\n\n 1-Arturo \n 2-Thoman \n 3-Tessete');
    } else {
        alert('Esqueceu que Arturo precisava dessa poção pra sua filha? Ele se revoltou e explodiu tuco com seus feitiços..')
        return location = ('../html/game_over.html')
    }
    if (escolha == 2) {
        escolha = prompt('Tessete ficará sem nada? \n(Only Numbers)\n\n 1-Sim \n 2-Não');
    } else {
        alert('Nossa, chegou até aqui e deixou Tessete se revoltar? Ele não quer nada além de verdadeiros amigos...')
        return location = ('../html/game_over.html')
    }
    if (escolha == 1) {
        return location = ('../html/final_do_jogo.html');
    } else {
        return location = ('../html/game_over.html')
    }
}