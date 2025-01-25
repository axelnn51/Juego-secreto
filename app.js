let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML=texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento(`p`,`El número secreto es menor`);
        }else{
            asignarTextoElemento(`p`,`El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
        console.log(intentos)
    }
    return;
}

function limpiarCaja(){
    document.querySelector(`#valorUsuario`).value = ``;

}

function condicionesIniciales(){
    asignarTextoElemento(`h1`,`Juego del número secreto!`);
    asignarTextoElemento(`p`,`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los número
    if(listaNumerosSorteados.length ==numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los números posibles`)
    } else {
    if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el nuevo numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}

condicionesIniciales();