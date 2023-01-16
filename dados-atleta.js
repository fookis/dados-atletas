class Atleta{
  constructor(nome, idade, peso, altura, notas){
this.nome = nome;
this.idade = idade;
this.peso = peso;
this.altura = altura;
this.notas = notas;
  }
  
  calculaCategoria(){
    if(this.idade > 8 && this.idade < 12){
      return "Infantil"
    } else if(this.idade > 11 && this.idade < 14){
      return "Juvenil"
    } else if(this.idade > 13 && this.idade < 16){
      return "Intermediário"
    } else if(this.idade > 15 && this.idade < 31){
      return "Adulto"
    } else{return "Sem categoria"} ;
  };

  calculaIMC(){
    return this.peso/(this.altura*this.altura)
  };

  calculaMediaValida(){ 
    let notasCresc = this.notas.sort(function(a, b){return a-b});
    let notasComp = notasCresc.slice(1, notasCresc.length-1);
    let somaNotas = notasComp.reduce(function(soma, total){return soma+total}, 0);
  return somaNotas/notasComp.length
   };

   obtemNomeAtleta(){return `Nome: ${this.nome}`};
   obtemIdadeAtleta(){return `Idade: ${this.idade}`};
   obtemPesoAtleta(){return `Peso: ${this.peso}`};
   obtemAlturaAtleta(){return `Altura: ${this.altura}`}
   obtemNotasAtleta(){return `Notas: ${this.notas}`};
   obtemCategoria(){return `Categoria: ${this.calculaCategoria()}`};
   obtemIMC(){return `IMC: ${this.calculaIMC()}`};
   obtemMediaValida(){return `Média válida: ${this.calculaMediaValida()}`};
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());