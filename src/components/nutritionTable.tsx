// components/NutritionTable.js
import React from "react";
const NutritionTable = ( nutritionData : {totalCalories: number, totalCarb : number, totalFat : number, totalProtein : number}) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Tabela Nutricional</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Nutriente</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Quantidade</th>
            
          </tr>
        </thead>
        <tbody>
          {<>
                <tr  className={ "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">Carboidratos</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{nutritionData.totalCarb} g</td>
                </tr>
                <tr  className={ "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-2">Gorduras</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{nutritionData.totalFat} g</td>
                </tr>
                <tr  className={ "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-2">Proteina</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{nutritionData.totalProtein} g</td>
                </tr>
                <tr  className={ "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-2">CALORIAS TOTAIS</td>
                <td className="border border-gray-300 px-4 py-2 text-right">{nutritionData.totalCalories}</td>
                </tr>
            </>
          }
        </tbody>
      </table>
    </div>
  );
};
export default NutritionTable;