import React, { useState } from "react";

import  '../Styles/RecipeGenerate.css';

import {getRecipe} from '../scripts/index.js';

export default function RecipeGenerate() {
  const [answer, setAnswer] = useState(""); // Para armazenar o valor final
  const [userIngredientes, setUserIngredientes] = useState(""); // Para capturar o valor do input

  // Função chamada ao clicar no botão
  const handleGenerate = async () => {
    const listUserIngredients = userIngredientes.split(';')

    try {
        const geminiAI = await getRecipe(listUserIngredients);
        //const text = await geminiAI.response.text();  // Garantir que o texto esteja correto

        console.log(geminiAI)
        setAnswer(geminiAI.title);
    } catch (error) {
        setAnswer("A API está sobrecarregada. Tente novamente mais tarde.");
        console.error("Erro ao gerar a receita:", error);
    }
  };

  return (
    <div className="generateRecipe">
      <div className="inputGenerate">
        {/* Campo de input */}
            <input className="input"
            value={userIngredientes}
            onChange={(e) => setUserIngredientes(e.target.value)} // Atualiza o estado em tempo real
            placeholder="Digite 2 ingredientes separados por ';'"
            type="text"
            />
            {userIngredientes && (<button className="button" onClick={handleGenerate}>Gerar minha receita</button>)}
            
      </div>

      <div className="notebook">
            {/* Renderiza os ingredientes armazenados */}
            <div className="recipeContent">

                <div style={{ padding: "0.25rem", margin: "0.25rem", backgroundColor: 'black',}}>
                {answer || "Nenhuma receita gerada ainda"} </div>

                <div className="generateImg">IMAGEM GERADA</div>
        </div>
      </div>
    </div>
  );
}
