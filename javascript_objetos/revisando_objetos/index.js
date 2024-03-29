const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}



// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);



// Constructor functions
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
    // return THIS
}
// {} <- this
const p2 = new Pessoa('Luiz', 'Miranda');
const p3 = new Pessoa('Maria', 'Miranda');
console.log(p1);