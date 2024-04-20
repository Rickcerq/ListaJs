const valores = [3, 2, 9, 5, 4]
var somador = 0
var menor_numero = valores[0]
var maior_numero = valores[0]

for (var i in valores) {
    if (valores[i] < menor_numero) {
        menor_numero = valores[i]
    }

    else if (valores[i] > maior_numero) {
        maior_numero = valores[i]
    }
    
    somador = somador + valores[i]
}

alert ('Maior numero dos valores: ' + maior_numero)
alert ('Menor numero dos valores: ' + menor_numero)
alert ('Soma entre todos os valores: ' + somador)