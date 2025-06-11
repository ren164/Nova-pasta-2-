const readLine = require("readLine")
const rl = readLine.createInterface({
    input: ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
})
let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false
}

function menuPrincipal() {
    console.log("\nVocê está em uma sala trancada")
    console.log("ao seu redor, você ê")
    console.log("1. Um grampeador velho")
    console.log("2. Um monte de papeis amassados na mesa")
    console.log("3. Uma almofada fora do lugar")
    console. log("4. Tentar abrir a porta")

    rl.question("\nO que você deseja fazer", (resposta) =>{
        switch(resposta.trim()){
            case "1":
                investigarGrampeador
                break
            case "2":
                investigarPapeis()
                break
            case "3":
                investigarAlmofada()
                break
            case "4":
                verificarSaida()
                break
            default:
                console.log("Escolha inválida")
                menuPrincipal
        }
    })
}

function investigarGrampeador(){
    if(resolvidos.grampeador){
        console.log("você ja resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n Dentro do grampeador tem um bilhete: 'sou cheio de buracos, mas seguro a água. O eu sou?'", (resposta =>
        if(resposta.trim().toLowerCase() == "esponja"){
            console.log("Acertou! você desbloqueou a chave q estava no grampeador")
        }no grampeador")
resolvidos.grampeador = true
} else {
console. log("Resposta Errada. Tente novamente depois")

menuPrincipal()

}

}

})

Function investigarPapeis() {
if(resolvidos.papeis) {
console. log("Você ja resolveu esse desafio")
return menuPrincipal()

rl.question("nUm dos papeis diz:
    if(resposta.trim().toLowerCase() == "errada") {
console. log("Acertou! Voce encontrou a chave no meio dos
papéis")
resolvidos.papeis = true
} else {
console.log("Errou! Não é isso")

menuPrincipal()

}

}

})

function investigarAlmofada() {
if(resolvidos.almofada) {
console.log("Você já resolveu esse desafio")
return menuPrincipal()

rl.question("\nNa almofada, tem um enigma: 'Estou no comeco, no
meio, mas nunca no fim. Quem sou?'", (resposta) => {
    ))
}