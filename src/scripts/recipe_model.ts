interface harmonizacao{
    dica: string;
    justificativa: string;
  }
  
  class Recipe {
    tittle: string;
    ingredientes: string[];
    modoDePreparo: string[];
    harmozinacoes: harmonizacao[];
  
    constructor(tittle: string, ingredientes: string[], modoDePreparo: string[], harmonizacoes: harmonizacao[]){
      this.tittle = tittle;
      this.ingredientes = ingredientes;
      this.modoDePreparo = modoDePreparo;
      this.harmozinacoes = harmonizacoes;
    }
  
  }