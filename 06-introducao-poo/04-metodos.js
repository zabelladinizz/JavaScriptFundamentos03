class Pessoa{

    constructor(nome, nota){
        this.nome = nome;
        this.nota= nota;
    };

    apresentar(){
        console.log(`${this.nome} - Nota ${this.nota}`);
    }

}

const aluno1 = new Pessoa("Ana", 17);
const aluno2 = new Pessoa("Joao", 16);

console.log(aluno1);
console.log(aluno2);
console.log(aluno1.apresentar());
console.log(aluno2.apresentar());
