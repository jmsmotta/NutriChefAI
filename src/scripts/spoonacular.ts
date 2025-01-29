interface Ingredient {
    name: string;
    id: string;
    amount: number;
    unit: string;
}

// Função que recebe uma lista de ingredientes como strings
export function transformIngredient(ingredients: {name : string, unit : string, amount : number}[]) {

    const newIngredients: Ingredient[] = ingredients.map((ingredient, index) => ({
        name: ingredient.name,
        id: `id-${index}`,  // ID fictício 
        amount: ingredient.amount,           
        unit: ingredient.unit,        
    }));

    return newIngredients;
}

export async function getIngredientId(ingredient: string) {
    const apiKey = "b42bbd255cbf4135a62e811ad72dc9b0";
    const url = `https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=1&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      
      const data = await response.json();
      if (data.results.length > 0) {
        console.log("ID do ingrediente:", data.results[0].id);
      } else {
        console.log("Nenhum ingrediente encontrado.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  
 
  
