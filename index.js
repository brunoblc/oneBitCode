let nomeDaNave = prompt('nome da nave')

let velocidadeDaNave = 0

let escolhaUmaOpcao

function menu() {
    let opcoes 
    
    while(opcoes != '1' && opcoes != '2' && opcoes != '3' && opcoes != '4') {

        opcoes = prompt('O que deseja fazer?\n' +
        '1 - Acelerar a nave em 5km\n' +
        '2 - Desacelerar a nave em 5km\n' +
        '3 - Imprimir dados\n' +
        '4 - Sair do programa')
    }
    return opcoes
}

function acelerar(velocidade) {
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}

function desacelerar(velocidade){
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0 ){
      novaVelocidade = 1  
    }
    return novaVelocidade
}

function ImprimirDados(nome, velocidade) {
    alert('Nave ' + nome + '\nvelocidade: ' + velocidade + 'km')
}

do {
    escolhaUmaOpcao = menu()
    switch(escolhaUmaOpcao) {
        case '1':
            velocidadeDaNave = acelerar(velocidadeDaNave)
            break
        case '2':
            velocidadeDaNave = desacelerar(velocidadeDaNave)
            break
        case '3':
            ImprimirDados(nomeDaNave, velocidadeDaNave)
            break
        default:
            alert('Encerrando programa')

    }
} while(escolhaUmaOpcao != '4')