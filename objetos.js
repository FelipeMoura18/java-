const pessoa ={
    nome:"Felipe", idade:18, genero:"macho alfa", estuda: true 
};

pessoa.nome="Feipe";

pessoa.sobrenome="Moura";

console.log("nome:",pessoa.nome);
console.log("sobrenome:",pessoa.sobrenome);


/// excluir

delete pessoa.idade;

console.log("pessoa:", pessoa)

//adicionar

pessoa.hobbies =["ler", "escrever", "cantar"];
console.log("pessoa:", pessoa);

// for in

for (const chave in pessoa){
    console.log("chave:", chave);
    console.log("valores:", pessoa[chave]);
};

//metodos para objetos:

const chaves= Object.keys(pessoa);
const valores= Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log("chaves", chaves);
console.log("valores", valores);
console.log("entradas", entradas);