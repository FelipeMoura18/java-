const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual é seu nome? ", (nome) => {
    console.log("Olá, " + nome);
    console.log("Seja bem-vindo!");

    leitor.question("Qual a sua idade? ", (idade) => {
        idade = Number(idade); // convertendo para número

        if (idade >= 18) {
            console.log("Você é maior de idade");
        } else {
            console.log("Você é menor de idade");
        }

        leitor.close();
    });
});
