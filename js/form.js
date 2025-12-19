const form = document.querySelector("form")
const botao = document.querySelector("form button")

function formEnviado(res) {
    if (res.ok) {
        
    } else {
        form.innerHTML =
            "<p class='message'><span class='erro'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: <span class='email'>contato@bikcraft.net</span></p>"
    }
    form.innerHTML =
            "<p class='message'> <span class='sucesso'>Mensagem Enviada</span>, em breve entraremos em contato</p>"
}

function enviarForm(event) {
    event.preventDefault()
    botao.disabled = true
    botao.innerText = "Enviando..."

    const data = new FormData(form)

    fetch("../enviar.php", {
        method: "POST",
        body: data,
    }).then(formEnviado)
}

form.addEventListener("submit", enviarForm)
