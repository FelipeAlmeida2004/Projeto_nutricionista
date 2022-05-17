var titulo = document.querySelector('.titulo')
titulo.textContent =  "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]
    var tpeso = paciente.querySelector('.info-peso')
    var taltura = paciente.querySelector('.info-altura')
    var rImc = paciente.querySelector('.info-imc')

    var peso = tpeso.textContent
    var altura = taltura.textContent

    var pesoV = validaPeso(peso)
    var alturaV = validaAltura(altura)


    if(!pesoV) {
        rImc.textContent = "Peso inválido!"
        pesoV = false
        paciente.classList.add('paciente-invalido')
    }

    if (!alturaV) {
        rImc.textContent = "Altura inválida!"
        alturaV = false
        paciente.classList.add('paciente-invalido')
    }

    if (pesoV && alturaV) {
        var imc = calculaImc(peso, altura)
        rImc.textContent = imc
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true
    }else{
        return false
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura *altura)
    return imc.toFixed(2)

}
