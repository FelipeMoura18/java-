const frutas = ["banana", "maça", "Uva", "laranja", "limao"];
 //0,1,2,3,4

 //exibindo o array:
 console.log(frutas);

 console.log("a primeira fruta:", frutas[0]);
 console.log("a primeira fruta:", frutas[4]);
 console.log("totas as futas são:", frutas.length);

 frutas.push("pessego");
 console.log(frutas);

 //removendp um elemento do meu array

 frutas.splice(2,1);
 console.log(frutas);

 //percorrendo o array com o laço for:
 
 for (let i=0; i<=frutas.length; i++){
    console.log("indice:", i);
    console.log(frutas[1]);
 };


 //percorrendo o arra com oo metodo forEache

 frutas. forEach((valor, indice) => {
console.log("Indice:", indice, "Fruta:", valor);

});

// Percorrendo com o for of
for(const fruta of frutas) {
console.log("Fruta da vez:", fruta);

};

const numeros =[1,2,3,4,5,6,7,8,9,10];

// usando o metodo filter para localiza apenas os números pares

const numerosPares= numeros.filter((numero)=> {
   return numero %2 === 0 ///condição verdadeira

});
const numerosImpares= numeros.filter((numero)=> {
   return numero %2 !== 0 ///condição verdadeira

});

console.log("todos os numeros", numeros);
console.log("Numeros pares", numerosPares);
console.log("numeros impares", numerosImpares)

//método map para manipulaçõa  dos valores.
//tratamos dessa forma como valores diferente

const quadrados = numeros.map((numero)=>{
return numero*numero;
});

console.log("valores quadrado:", quadrados);
