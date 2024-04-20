var paisA = {
    habitantes: 80000,
    novoshabitantes: 0,
    taxacrescimento: function() {
        this.novoshabitantes = this.habitantes * 1.03;
        return this.novoshabitantes;
    }
}

var paisB = {
    habitantes: 200000,
    novoshabitantes: 0,
    taxacrescimento: function() {
        this.novoshabitantes = this.habitantes + (0.015 * this.habitantes);
        return this.novoshabitantes;
    }
}

function anos_necessários() {
    var anos = 0;
    while (paisA.habitantes <= paisB.habitantes) {
        paisA.taxacrescimento();
        paisB.taxacrescimento();
        anos++;
}
return anos;
}

alert('Anos necessários para que o pais A se iguale á população do pais B: ' + anos_necessários());