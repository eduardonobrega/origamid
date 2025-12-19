// Ativar links do Menu
const links = document.querySelectorAll(".header-bg nav a")

function ativarLink(link) {
    const url = location.href

    if (url.includes(link.href)) {
        link.classList.add("selected")
    }
}

links.forEach(ativarLink)

// Ativar itens do Orçamento
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const produto = document.getElementById(parametro)

    if (produto) {
        produto.checked = true
    }
}

parametros.forEach(ativarProduto)

// Galeria Imagens
const imagens = document.querySelectorAll(".detalhes-galeria img")

function mudarImagem(event) {
    const img = event.currentTarget

    if (img.width !== imagens[0].width) {
        const srcMain = imagens[0].src

        imagens[0].src = img.src
        img.src = srcMain
    }
}

imagens.forEach(img => {
    img.addEventListener("click", mudarImagem)
})

// Animação
if (window.SimpleAnime) {
    new SimpleAnime()
}
