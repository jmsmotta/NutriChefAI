//import { json } from "stream/consumers";

export function clearJson(stringJson) {

    let chavesIncompletas = 0;
    let cleanText = ``;
    

    for (let i = 0; i < stringJson.length; i++) {
    if (stringJson[i] == '{'){chavesIncompletas += 1}
    if (chavesIncompletas > 0) {
        cleanText += `${stringJson[i]}`
        if (stringJson[i] == `}`) {
            chavesIncompletas -= 1;
            if (chavesIncompletas == 0) {
                break;    
            }
        }
    }
}

  try {
      const jsonObject = JSON.parse(cleanText);
      console.log('entrou')
      return jsonObject;
    } catch (error) {
      console.error("Erro ao analisar o JSON:", error);
    }


}



