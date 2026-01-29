function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora são <strong>${hora}:${min} minutos</strong> `
if(hora >= 0 && hora <12){
    //bom dia
    img.src = 'images/manhafoto.png'
    document.body.style.background = '#ffe098ff'
    }
else if(hora >=12 && hora < 18){
    //boa tarde
    img.src = 'images/tardefoto.png'
    document.body.style.background = '#febb75'
    }
else { 
    img.src = 'images/noitefoto.png'
    //boa noite
    document.body.style.backgroundColor = '#0b0c3aff'
    }
}