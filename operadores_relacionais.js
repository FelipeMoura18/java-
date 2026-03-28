//operadores relacioais
//>, < ==, ===, <=,>=

let idadeNalon=26;
let idadeAna=16;

//comparando valores:

const saoIguais = idadeNalon === idadeAna;
console.log("São iguais? " + saoIguais);

const comparacao = idadeNalon > idadeAna;
console.log("É maior?" + comparacao);

const comparacao2 = idadeNalon < idadeAna;
console.log("É menor" + comparacao2);

const comparacao3 = idadeNalon !== idadeAna;
console.log("são diferentes" + comparacao3);

//comparadores: e , ou e não

const idade= 26;
const maioridade=idade>=18;//true
const possuiCnh= true;

const podeDirigir= maioridade && possuiCnh;
console.log("Pode dirigir? "+ podeDirigir);

const podeViajar= maioridade || possuiCnh;
console.log("Pode viajar? "+ podeViajar);

const acompanhante = !maioridade;
console.log("precisa de acompanhante?" + acompanhante)




