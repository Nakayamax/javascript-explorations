const readline = require ('readline');

//criação da interface readline
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

// Pergunta ao usúario
rl.question("Qual é o seu nome? ", (nomedapessoa) => {
    console.log("Olá, " +nomedapessoa + "!");


// Perguntar a idade do usúario
     rl.question("Qual é a sua idade?", (idadedapessoa) => {
        console.log("Seja bem vindo, " + nomedapessoa + "! Você tem " + idadedapessoa + " anos.");
       
        //Perguntar onde você mora
        rl.question("Onde você mora? ", (cidade) => {
            console.log("Seja bem vindo, " + nomedapessoa + "! Você tem " + idadedapessoa +  " anos e mora em " + cidade + ".");
           

            //Perguntar o que você esta estudando no momento
            rl.question("Oque você esta estudando? ", (nomedamatéria) => {
                console.log("Seja bem vindo, " + nomedapessoa + "! Voce tem " + idadedapessoa + " anos e mora em " + cidade + " você estudando atualmente " + nomedamatéria + ".");
                rl.close();
            });
        });
    });
});