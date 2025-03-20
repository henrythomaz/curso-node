function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var vel = Number(txtv.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você esta multado!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}