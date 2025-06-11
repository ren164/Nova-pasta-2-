
let texto = document.getElementById("texto")
texto.innerText = "LISTA DOWN"
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    texto.style.color = "red"
})

botaodois.addEventListener("click", function(){
    botaodois.style.color = "red"
})


let texto2 = document.getElementById("texto2")
texto2.innerText = "nicolas neto-oh"
let passe = document.getElementById("passe")
passe.addEventListener("dblclick", function(){
    texto2.style.fontSize = "125px"
})

passe.addEventListener("click", function(){
    texto2.style.fontSize = ""
})

let botao52 = document.getElementById("botao52")
botao52.addEventListener("mouseover", function(){
    botao52.style.backgroundColor = "red"
})


botao52.addEventListener("mouseout", function(){
    botao52.style.backgroundColor = ""
})
let peiche = document.getElementById("peiche"); 
let imagem = document.getElementById("nicolasnetooh"); 

peiche.addEventListener("click", function () {
    imagem.style.width = "200px"; 
    imagem.style.height= "200px";
});

let red = document.getElementById("red")
let redo = document.getElementById("redo")

red.addEventListener("click", function(){
    redo.style.borderRadius = "1000px"
})

    let firt = document.getElementById("firt")
    let secnd = document.getElementById("secnd")
    let trd = document.getElementById("trd")
    let b1 = document.getElementById("b1")
    let b2 = document.getElementById("b2")
    let b3 = document.getElementById("b3")

    b1.addEventListener("click", function(){
        firt.style.backgroundColor = "black"
        firt.style.color = "white"
    });

    b2.addEventListener("click", function(){
        secnd.style.backgroundColor = "blue"
        secnd.style.color = "yellow"
        secnd.style.fontSize = "45px"
    });

    b3.addEventListener("click", function(){
        trd.style.backgroundColor = "red"
        trd.style.color = "white"
        trd.style.fontSize = "45px"
        trd.style.borderRadius = "100px"
    })
