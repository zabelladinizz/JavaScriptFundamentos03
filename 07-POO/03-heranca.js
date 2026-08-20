class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}
class Aluno extends Pessoa{   //extends herda o valor da outra classe
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }
}

const aluno = new Amuno("Jefferson", "Desenvolvimento de sistemas");
console.log(aluno);