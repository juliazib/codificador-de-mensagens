let radioButton = document.getElementById("radioBtn")
let codificar = document.getElementById("codificar")
let decodificar = document.getElementById("decodificar")
let codificarDecodificar = document.getElementById("submit")
let entradaCifra = document.querySelector("#metodo")
let mensagemDevolvida = document.getElementById("mensagemDevolvida")

// Esconde ou mostra opção de deslocamento de acordo com a escolha do usuário
function selecao() {
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


// Codifica e decodifica mensagems em base64
function base64() {
    let mensagem = document.getElementById("mensagemRecebida").value
    if (codificar.checked) {
        let encodeBase64 = btoa(mensagem)
        return encodeBase64
    } 
    else if (decodificar.checked) {
        let decodeBase64 = atob(mensagem)
        return decodeBase64
    }
    
}

//Codifica e decodifica mensagens em cifra de césar
function cifraDeCesar() {
    let mensagem = document.getElementById("mensagemRecebida").value
    let incremento = document.getElementById("incremento").value
    let mensagemCodificada = ""
    let mensagemDecodificada = ""

    if (codificar.checked) {
        for (let i = 0; i < mensagem.length; i++) {
            let letraAscii = mensagem[i].charCodeAt()
            if (letraAscii >= 65 && letraAscii <= 90) {
                let novaLetra = letraAscii + parseInt(incremento)
                if (novaLetra > 90) {
                    novaLetra = novaLetra - 26
                }
                mensagemCodificada += String.fromCharCode(novaLetra)
            }
            else if (letraAscii >= 97 && letraAscii <= 122) {
                let novaLetra = letraAscii + parseInt(incremento)
                if (novaLetra > 122) {
                    novaLetra = novaLetra - 26
                }
                mensagemCodificada += String.fromCharCode(novaLetra)
            } 
            else {
                mensagemCodificada += mensagem[i]
            }
        }
        return mensagemCodificada

    } else if (decodificar.checked) {
        for (let i = 0; i < mensagem.length; i++) {
            let letraAscii = mensagem[i].charCodeAt()
            if (letraAscii >= 65 && letraAscii <= 90) {
                let novaLetra = letraAscii - parseInt(incremento)
                if (novaLetra < 65) {
                    novaLetra = novaLetra + 26
                }
                mensagemDecodificada += String.fromCharCode(novaLetra)
            }
            else if (letraAscii >= 97 && letraAscii <= 122) {
                let novaLetra = letraAscii - parseInt(incremento)
                if (novaLetra < 97) {
                    novaLetra = novaLetra +26
                }
                mensagemDecodificada += String.fromCharCode(novaLetra)
            } 
            else {
                mensagemDecodificada += mensagem[i]
            }
        }
        return mensagemDecodificada
    }
}

// Exibe resultado dependendo do método escolhido pelo usuário e previne comportamento padrão do botão
codificarDecodificar.addEventListener("click", function(event) {
    event.preventDefault()
    if (entradaCifra.value === "cifraCesar") {
        mensagemDevolvida.innerHTML = cifraDeCesar()
        
    }
    else if (entradaCifra.value === "base64") {
        mensagemDevolvida.innerHTML = base64()
    }
})

// Testando light/dark mode


    function changeMode() {
        let img = document.getElementById("light-dark-mode")
        console.log(img.src)
        let body = document.querySelector("body")
        let h1 = document.querySelector("h1")
        let label = document.querySelector("label")
        let p = document.querySelector("p")
        let a = document.querySelector("a")

        
        img.addEventListener("click", function() {
            if (img.src == "file:///D:/Gera%C3%A7%C3%A3o%20Futuro/m%C3%B3dulo-2/passinho-do-romano/assets/light-removebg-preview.png") {
                img.src = "file:///D:/Gera%C3%A7%C3%A3o%20Futuro/m%C3%B3dulo-2/passinho-do-romano/assets/dark-removebg-preview.png"

                body.style.backgroundColor = "white"
                h1.style.color = "#231F20"
                label.style.color = "#231F20"
                p.style.color = "#231F20"
                a.style.color = "purple"
                codificarDecodificar.style.color = "#E1D9D1"
                codificarDecodificar.style.backgroundColor = "#231F20"
            }
            else if (img.src == "file:///D:/Gera%C3%A7%C3%A3o%20Futuro/m%C3%B3dulo-2/passinho-do-romano/assets/dark-removebg-preview.png") {
                img.src = "file:///D:/Gera%C3%A7%C3%A3o%20Futuro/m%C3%B3dulo-2/passinho-do-romano/assets/light-removebg-preview.png"

                body.style.backgroundColor = "#231F20"
                h1.style.color = "#E1D9D1"
                label.style.color = "#E1D9D1"
                p.style.color = "#E1D9D1"
                a.style.color = "#CBC3E3"
                codificarDecodificar.style.color = "#231F20"
                codificarDecodificar.style.backgroundColor = "#E1D9D1"
            }
        return img.src
    })

    }
    


