var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener('click', function(){
    console.log("Buscando pacientes...")
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function(){

       if(xhr.status == 200){
        document.querySelector("#erro-ajax").classList.add("invisivel")
           var resposta = xhr.responseText
           var pacientes = JSON.parse(resposta)
    
           pacientes.forEach(function(paciente){
                adicionaPaciente(paciente)
           })

       }else{
           console.log(xhr.status)
           console.log(xhr.responseText)
           document.querySelector("#erro-ajax").classList.remove("invisivel")

       } 

    })
    
    xhr.send()
})