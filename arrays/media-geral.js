const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaDaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Media da sala de JavaScript ${mediaDaSala(salaJS)} media da sala de Java ${mediaDaSala(salaJava)} media da sala de Python ${mediaDaSala(salaPython)}`)


const notas = [10, 6.5, 8, 7]

const media = notas.reduce((x,y) => y + x, 0) /notas.length
console.log(media)
