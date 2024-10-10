const readline = require('readline');

//criação da interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//função para fazer perguntas sequencialmente 
const fazerPerguntas = () => {
    rl.question("Qual é o seu nome? ", (nomedapessoa) => {
        rl.question("Qual é a sua idade?", (idadedapessoa) => {
            rl.question("Onde você mora?", (cidade) => {
                rl.question("O que você esta estudando?", (nomedamatéria) => {
                   rl.question("Você é casado(a)?", (resposta) => { 
                     console.log(`Seja bem-vindo, ${ nomedapessoa }! Você tem ${ idadedapessoa } anos, mora em ${ cidade }, e está estudando ${ nomedamatéria }, e Você é casado(a): ${resposta}.`);
                     rl.close();
                   });
                });
            });

        });

    });
}); 





