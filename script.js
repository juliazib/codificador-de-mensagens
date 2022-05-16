let radioButton = document.getElementById("radioBtn")
let codificar = document.getElementById("codificar")
let decodificar = document.getElementById("decodificar")
let codificarDecodificar = document.getElementById("submit")

// Esconde ou mostra opção de deslocamento de acordo com a escolha do usuário
function selecao() {
    let entradaCifra = document.querySelector("#metodo")
    let deslocamentoCifra = document.getElementById("deslocamento")
    entradaCifra.addEventListener("click", function() {
        if (entradaCifra.value === "cifraCesar") {
            deslocamentoCifra.style.display = "block"
        }
        else {
            deslocamentoCifra.style.display = "none"
        }
    })
}


// Muda texto do botão dependendo da escolha do usuário
radioButton.addEventListener("click", function() {
    if (codificar.checked) {
        codificarDecodificar.innerText = "Codificar"
    }
    else if (decodificar.checked) {
        codificarDecodificar.innerText = "Decodificar"
    }
    
})





