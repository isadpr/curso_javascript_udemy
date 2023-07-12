// funçao factory para criar objetos pessoa
function criaPessoa (nome, sobrenome, idade) {
    return { //pode deixar nome, sobrenome, idade pq tem o mesmo NOME
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
console.log(pessoa1);
console.log(pessoa1.nome);

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
};

pessoa2.fala();
