const nomes = ['João', 'Ana', 'Caio', 'Lara']
const notas = [4.5 ,8, 5, 10]

const reprovados = nomes.filter( (_, indice) => notas[indice] <5 )

console.log(`Reprovados: ${reprovados}`)