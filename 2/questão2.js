const numéros_pares = []
const numéros_impares = []

for (var i = 1; i<=10; i++){
    if (i % 2 == 0) {
        numéros_pares[i] = i
    }

    else {
        numéros_impares[i] = i
    }
}

alert('Numéros pares: ' + numéros_pares)
alert('Numéros impares: ' + numéros_impares)