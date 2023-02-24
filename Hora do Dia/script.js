

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    if (min < 10 ){
        msg.innerHTML = `Agora são ${hora}:0${min} `
    }else{
        msg.innerHTML = `Agora são ${hora}:${min} `
    }
    
    if (hora >= 6 && hora <= 11){
        saudacao.innerHTML = 'Bom Dia !!'
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#E8D3A4'
    }else if(hora >= 12 && hora <= 17 ){
        saudacao.innerHTML = 'Boa Tarde !!'
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#E28E48'
    }else{
        saudacao.innerHTML = 'Boa Noite !!'
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#081B1F'
    } 
    
setInterval(carregar, 1000);
    
}

