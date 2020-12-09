var data = {
    texto: "Quero comprar armadura, poção e elmo",
    entidades: [{ nome: "poção", tipo: "item" }, { nome: "armadura", tipo: "equipamento" }, { nome: "elmo", tipo: "equipamento" }]
}

var listaItens = [];
var listaEquipamentos = [];

function organizaItensComprados(data) {

    var itensComprados = data.entidades;

    for (let indice = 0; indice < itensComprados.length; indice++) {
        
        const itemComprado = itensComprados[indice];
        
        if (itemComprado.tipo == "item") { 
            listaItens.push(itemComprado);
        }
        else if (itemComprado.tipo == "equipamento") {
            listaEquipamentos.push(itemComprado);
        }
    }
}

// printando input do usuario (data)
console.log("--- Itens Comprados ---")
console.log(data);
console.log("------\n")

// printando inventário antes da compra
console.log("--- Meu Inventário Antes da Compra ---")
console.log(listaItens);
console.log(listaEquipamentos);
console.log("------\n")

// função para organizar os itens 
organizaItensComprados(data)

// printando inventário depois da compra
console.log("--- Meu Inventário Depois da Compra ---")
console.log("--- Itens Consumíveis ---")
console.log(listaItens);
console.log("--- Equipamentos ---")
console.log(listaEquipamentos);
console.log("------")