function carregar() {
    var msg  = document.querySelector('div.section')
    var img = document.querySelector('#imagem')
    var h = new Date()
    var horas = h.getHours()

    msg.innerHTML = `Agora são ${horas} horas`
    if (horas > 0 && horas < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (horas >= 12 && horas <= 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}