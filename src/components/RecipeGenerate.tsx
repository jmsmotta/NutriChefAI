import React, { useState } from "react";

import  '../Styles/RecipeGenerate.css';

import {getRecipe} from '../scripts/index.js';
import Recipe from "./Recipe";


export default function RecipeGenerate() {
  const [geminiAI, setGeminiAI] = useState<any | null>(null);
  const [userIngredientes, setUserIngredientes] = useState(""); // Para capturar o valor do input

  // Função chamada ao clicar no botão
  const handleGenerate = async () => {
    const listUserIngredients = userIngredientes.split(';')

    try {
        const response = await getRecipe(listUserIngredients);
        setGeminiAI(response);

    } catch (error) {
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
            placeholder="Digite os ingredientes separados por ';'"
            type="text"
            />
            {userIngredientes && (<button className="button" onClick={handleGenerate}>Gerar minha receita</button>)}
            
      </div>

      <div className="notebook">
            {/* Renderiza os ingredientes armazenados */}
            <div className="recipeContent">

            <div id="content" style={{ padding: "0.25rem", margin: "0.25rem", backgroundColor: 'black' }}>
                {geminiAI ? (
                  <Recipe
                    title={geminiAI.title}
                    ingredients={geminiAI.ingredientes}
                    preparation={geminiAI.modoDePreparo}
                    harmonizations={geminiAI.harmonizacoes}
                  />
                ) : (
                  "nenhuma receita gerada ainda"
                )}
            </div>

                <div className="generateImg">IMAGEM GERADA</div>
        </div>
      </div>
    </div>
  );
}
