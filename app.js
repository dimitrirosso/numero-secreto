let numerosorteado = [];
let numerolimite = 10;
let numerosecreto = gerarnumerosecreto();
let tentativas = 1;

 function textos(tag, texto){

     let campo = document.querySelector(tag);
     campo.innerHTML = texto;

     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}) ;
 }

function mensagens(){
    textos('h1', 'jogo do número secreto');
    textos('p', 'selecione um numero de 1 a 10');
}
 


 function verificarChute(){
     let chute = document.querySelector('input').value;
     console.log(chute == numerosecreto);

    if(chute == numerosecreto){
        
        textos('h1', 'Boa mlk, jogou muito');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = (`você descobriu o numero secreto com ${tentativas} ${palavratentativa}`)
        textos('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if(chute > numerosecreto){
            textos('p', 'o numero secreto é menor')

        } else {
            textos('p', 'o numero secreto é maior');
        }
    }  tentativas++;
        limpar();
 }


 function gerarnumerosecreto(){

     let numeroescolhido = parseInt(Math.random() * numerolimite + 1);
     let quantidadedenumeros = numerosorteado.length;

     if(quantidadedenumeros == numerolimite){
        numerosorteado = [];
     }

     if(numerosorteado.includes(numeroescolhido)){
        return gerarnumerosecreto();
    } else{
        numerosorteado.push(numeroescolhido);
        console.log(numerosorteado);
        return numeroescolhido;
    }
 }


 function limpar(){
    chute = document.querySelector('input');
    chute.value = "";
 }

 function novojogo(){
    numerosecreto = gerarnumerosecreto();
    tentativas = 1;
    limpar();
    mensagens();
    document.getElementById('reiniciar').setAttribute('disabled', true)
 }

 mensagens();