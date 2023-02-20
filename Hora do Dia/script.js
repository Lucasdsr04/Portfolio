

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora <= 12){
        saudacao.innerHTML = 'Bom Dia !!'
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#E8D3A4'
    }else if(hora > 12 && hora <= 18 ){
        saudacao.innerHTML = 'Boa Tarde !!'
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#E28E48'
    }else{
        saudacao.innerHTML = 'Boa Noite !!'
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#081B1F'
    } 

}

