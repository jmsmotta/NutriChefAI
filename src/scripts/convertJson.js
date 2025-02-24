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
      return jsonObject;
    } catch (error) {
      console.error("Erro ao analisar o JSON:", error);
    }


}
function main(){
    console.log('teste de caso normal, entrada: " asdasdas {"nome": "João", "idade": 25}"\n saída esperada: { nome: "João", idade: 25 }')
    console.log(clearJson(' asdasdas {"nome": "João", "idade": 25}'))


    console.log('teste de caso inválido, entrada: "{"nome": "Maria", "idade":"\n saída esperada: Mensagem de erro no console ')
    console.log(clearJson('{"nome": "Maria", "idade":'))


}

main()
