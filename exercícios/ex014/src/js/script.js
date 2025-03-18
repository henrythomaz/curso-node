function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'src/imgs/manha.jpg';
        document.body.style.background = '#e2cd9f'
        img.style = 'border-radius: 50%'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'src/imgs/tarde.jpg'
        document.body.style.background = '#b9846f'
        img.style = 'border-radius: 50%'
    } else {
        // Boa noite
        img.src = 'src/imgs/noite.jpg'
        document.body.style.background = '#515154'
        img.style = 'border-radius: 50%'
    }
}