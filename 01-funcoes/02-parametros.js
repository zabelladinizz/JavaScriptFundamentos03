function apresentar(nome){
    console.log("Ola, " + nome);
}
apresentar("Isabella.")

function sistema(nome = "Visitante") //se nenhum valor for indicaod, o programa entende como "Visitante".
{
    console.log("Ola, "+ nome);
}
sistema();
sistema("Vitor");

function somar(numero1, numero2){
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
}

somar(8,10);