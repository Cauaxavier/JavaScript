var agora = new Date()
var diaSem = agora.getDay()

/*
DOMINGO - 0
SEGUNDA-FEIRA - 1
TERÇA-FEIRA - 2
QUARTA-FEIRA - 3
QUINTA-FEIRA - 4
SEXTA-FEIRA - 5
SÁBADO - 6
*/
//console.log(`Hoje é um(a) ${diaSem}`)

switch (diaSem) {
    case 0: console.log('Domingo')
        break
    case 1: console.log('Segunda-feira')
        break
    case 2: console.log('Terça-feira')
        break
    case 3: console.log('Quarta-feira')
        break
    case 4: console.log('Quinta-feira')  
        break
    case 5: console.log('Sexta-feira')
        break
    case 6: console.log('Sábado')
        break
    default: console.log('erro, esse número não corresonde a nenhum dia da semana.')
        break
}
