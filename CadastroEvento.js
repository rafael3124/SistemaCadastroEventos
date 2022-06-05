let DataEvento = new Date('06/20/2022')
let DataAtual = new Date()


console.log(DataAtual);


if (DataAtual < DataEvento) {
    console.log("Cadastro dentro do prazo")

    let IdadePArticipante = 19

    if (IdadePArticipante > 18) {
        console.log("Idade permitida")
    }


}else{
    console.log("Cadastro Bloqueado")
}

let LisataParticipantes = ["Danilo", "Carla", "Gabriela", "Rafael","Esmeralda","Vanessa"]



for (let contador = 0; contador < LisataParticipantes.length; contador++){
    console.log(LisataParticipantes[contador])
}
if (LisataParticipantes.length > 100) {
    console.log("Cadastro excede o número de participantes")   
}else{
    console.log("Execute o cadastro")
}







