function multiplicar(a, b){
    return a * b;
}
// a funçaoanônima tem seu nome declarado antes
const multiplicarAnonima = function (a, b){
    return a * b;
}
// função em seta
const multiplicarArrow = (a, b) => {

}
console.log(multiplicar(5, 7));
console.log(multiplicarAnonima(5, 7));
console.log(multiplicarArrow(5, 7));