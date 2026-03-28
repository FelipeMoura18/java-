//para declarar uma função, será necessário a palavra function+nome da function
// 

function saudacao(nome){
console.log("olá", nome);
};

saudacao("Fernanda");
saudacao("Felipe");

//função com retorno
function calcDobro(numero){
    return numero*2;
};

const numeroDobro= calcDobro(50);
console.log("o dobro de 50 é:", numeroDobro);

//arrow function

const saud= (nome) => {
 console.log("olá", nome);                      
 
};

saud("Rafa");

const calculoDobro = (numero1) =>{
    return numero1*2;
};

console.log(calculoDobro(25));

//função simplificada

const  saudacao2 = nome => console.log("olá", nome);
saudacao2("chico");

const dobro = numero => numero*2;
console.log(dobro(10));