
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
]
  
function ordena(a, b){
  if (a < b) return -1
  return 1
}

function mostra(matrizObj){
  let media = []
  let lista_ordenada = []
  for (let i = 0; i < matrizObj.length; i++) {
    lista_ordenada.push(matrizObj[i].notas.sort(ordena))
  }
  
  lista_ordenada.forEach(function(valores){
    let total = valores.slice(1,4).reduce((valorAcumulado, elementoAtual) => {
      return valorAcumulado + elementoAtual
    }, 0);
    media.push(total / 3)

  })
  let resultado = []
  for (let i = 0; i < matrizObj.length; i++) {
    //console.log(matrizObj[i].notas)
    let res = {Atleta: matrizObj[i].nome, Notas_Obtidas: matrizObj[i].notas, Média_Válida:media[i]}
    resultado.push(res)
  }
  return resultado
  
}
console.log(mostra(atletas))