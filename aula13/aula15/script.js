function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('.aside')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.querySelector('#foto')
        //var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.src = 'imagem/bebe-masculino.jpg'
                //img.setAttribute('src', 'imagem/bebe-masculino.jpg')
            } else if (idade < 25) {
                img.src = 'imagem/jovem-homem.jpg'
            } else if (idade < 50) {
                img.src = 'imagem/adulto-homem.jpg'
            } else {
                img.src = 'imagem/idoso-homem.jpg'
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade <= 12)  {
                img.src = 'imagem/bebe-feminino.jpg'
            } else if (idade < 25) {
                img.src = 'imagem/jovem-mulher.jpg'
            } else if (idade < 50) {
                img.src = 'imagem/adulto-mulher.jpg'
            } else {
                img.src = 'imagem/idosa-mulher.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}