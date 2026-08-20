const alunos = [
    {nome:"Fernanda", nota:8},/* JSON dentro do array */
    {nome:"Giovanna", nota:5},
    {nome:"Giulia", nota:7},
    {nome:"Gilherme", nota:2},



];

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log(aprovados);
console.log("============");

aprovados.forEach((aluno) =>{
    console.log(`O aluno ${aluno.nome} é bom, turou a nota ${aluno.nota}`);
});