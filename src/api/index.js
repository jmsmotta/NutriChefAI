const { GoogleGenerativeAI } = require("@google/generative-ai");


export async function getRecipe(ingredients) { //recebe uma lista de ingredientes
    
    // Configura a API do Google Generative AI
    const genAI = new GoogleGenerativeAI("AIzaSyAy-e2iqgTSiaiLjpYki3nSMbLt4OxSLJY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Define o prompt com base nos ingredientes
    const prompt = `crie uma receita simples que utilize: ${ingredients[0]}, ${ingredients[1]}`;

    // Aguarda a resposta da API
    const result = await model.generateContent(prompt);

    // Exibe o resultado no console
    console.log(`\nGeminiAI:\n ${result.response.text()}`);

    return result; 
}




