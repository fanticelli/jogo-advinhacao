alert('Bem vindo ao jogo do Número Secreto!');

let numeroMaximo = 10;
//geração de número aleatório inteiro entre 1 e 10.
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let tentativas = 1;

//condição de loop.
while(escolha != numeroSecreto){
    let escolha = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == escolha){
        break;

        //condição para saber o número de tentativas.
    }else{
       if(numeroSecreto > escolha){
        alert(`O Número Secreto é maior que ${escolha}`);
       }else{
        alert(`O Número Secreto é menor que ${escolha}`);
        }

        tentativas++;
    }
}

//operador para modificar a concordancia de acordo com a quantidade.
let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o Número Secreto!! ${numeroSecreto} com ${tentativas} ${palavra}.`);

