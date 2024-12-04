const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");

// Configura o readline para ler entradas do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler do teclado e retornar a entrada como uma Promise
async function lerDoTeclado(readLine) {
    return new Promise((resolve) => {
        readLine.question("Fale com GeminiAI: ", (input) => {

            resolve(input); // Retorna o input digitado
            readLine.close(); // Fecha a interface
        });
    });
}

async function main() {
    // Aguarda a entrada do teclado
    const userInput = await lerDoTeclado(rl);

    // Configura a API do Google Generative AI
    const genAI = new GoogleGenerativeAI("AIzaSyAy-e2iqgTSiaiLjpYki3nSMbLt4OxSLJY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Define o prompt com base na entrada do usuário
    const prompt = userInput;

    // Aguarda a resposta da API
    const result = await model.generateContent(prompt);

    // Exibe o resultado no console
    console.log(`\nGeminiAI:\n ${result.response.text()}`);
}

// Chama a função principal
main();



