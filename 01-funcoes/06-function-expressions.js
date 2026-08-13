function multiplicar(a, b){
    return a * b;
}
// a fun~]ao anônima tem seu nome declarado antes
const multiplicarAnonima = function (a, b){
    return a * b;
}
console.log(multiplicar(5, 7));
console.log(multiplicarAnonima(5, 7))