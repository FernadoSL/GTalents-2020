var data = {
    texto: "Olá meu nome é João",
    entidade: {
        nome: "João"
    },
    contextos: ["falarNome", "cadastro"]
}

// a)
var texto = data.texto;
console.log("resposta a) " + texto);

// b)
var nome = data.entidade.nome;
console.log("resposta b) " + nome);

// c)
var contextoInformado = data.contextos[1];
console.log("resposta c) " + contextoInformado);