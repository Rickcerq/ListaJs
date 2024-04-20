var funcionario = {
    nome: "Givanildo",
    salario_inicial: 1000,
    novosalario: 0,
    primeiro_aumento_salarial: function() {
        this.novosalario = this.salario_inicial + (this.salario_inicial * 0.015)
        return this.novosalario
    },

    segundo_aumento_salarial: function() {
        this.novosalario = this.primeiro_aumento_salarial() + (this.primeiro_aumento_salarial() * 0.03)
        return this.novosalario
    },

    atual_aumento_salarial: function() {
        this.novosalario = this.salario_inicial + (this.salario_inicial * 0.405)
        return this.novosalario
    }

}

alert('Primeiro salário: ' + funcionario.salario_inicial)
alert('Salário com aumento de 1.5%: ' + funcionario.primeiro_aumento_salarial())
alert('Salário com aumento de 3%: ' + funcionario.segundo_aumento_salarial())