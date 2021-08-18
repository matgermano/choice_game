var escolha

function inicio() {
    escolha = prompt('O que deseja fazer com o prêmio? \n(Only Number)\n\n 1- Repartir \n 2- Disputar')
    if (escolha == 1) {
        escolha = prompt('Pra quem será destinado o elixir de cura? \n(Only Numbers)\n\n 1-Arturo \n 2-Thoman \n 3-Tessete');
    } else if ((escolha == 2) || (escolha == 3)) {
        alert('Achou que ficaria com tudo né? Mas os outros se uniram e destruiram seus planos..')
        return location = ('./game_over.html')
    } else {
        alert('Escolha uma opção válida, chegou até aqui e ainda errando nas escolhas? Ta quase lá..')
        inicio()
    }
    if (escolha == 1) {
        escolha = prompt('Pra quem será destinado o tesouro precioso? \n(Only Numbers)\n\n 1-Arturo \n 2-Thoman \n 3-Tessete');
    } else if ((escolha == 2) || (escolha == 3)) {
        alert('Esqueceu que Arturo precisava dessa poção pra sua filha? Ele se revoltou e explodiu tudo com seus feitiços..')
        return location = ('./game_over.html')
    } else {
        alert('Escolha uma opção válida, chegou até aqui e ainda errando nas escolhas? Ta quase lá..')
        inicio()
    }
    if (escolha == 2) {
        escolha = prompt('Tessete ficará sem nada? \n(Only Numbers)\n\n 1-Sim \n 2-Não');
    } else if ((escolha == 1) || (escolha == 3)) {
        alert('Esqueceu que Thoman é o Robin Wood de sua cidade? Ele quer $ pra salvar seu povo da pobreza. Acabou se revoltando e matou você...')
        return location = ('./game_over.html')
    } else {
        alert('Escolha uma opção válida, chegou até aqui e ainda errando nas escolhas? Ta quase lá..')
        inicio()
    }
    if (escolha == 1) {
        return location = ('./final_do_jogo.html');
    } else if (escolha == 2) {
        alert('Nossa, chegou até aqui e deixou Tessete se revoltar? Ele não se importa com tesouros ou elixires, na verdade ele não quer nada além de verdadeiros amigos...')
        return location = ('./game_over.html')
    } else {
        alert('Escolha uma opção válida, chegou até aqui e ainda errando nas escolhas? Ta quase lá..')
        inicio()
    }
}