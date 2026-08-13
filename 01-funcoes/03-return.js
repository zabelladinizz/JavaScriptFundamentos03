function somar(a, b){
    return a + b;
}
const resultado = somar(15, 30);
console.log(resultado);
console.log(somar(7,9));

// function ligaDesligar(valor){
//     if(ligado === false){
//         ligado = true;
//         return "Ligado"
//     }
//     else {
//         ligado = true;
//         return "Desligado"
//     }
// }
function ligaDesligar(){
    ligado = !ligado
    return ligado ? "Ligado" : "Desligado" // refatoração do código acima
}
console.log(LigaDesligar());
console.log(LigaDesligar());
