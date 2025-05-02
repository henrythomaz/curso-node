function recebe() {
var txt = window.document.getElementById('pais')
var pais = txt.value.toUpperCase()

var res = window.document.getElementById('res')
    res.innerHTML = `Vivendo no ${pais}`

    if (pais == 'BRASIL' || pais == 'BRAZIL') {
        res.innerHTML += '<br> brasileiro!'
    }else {
        res.innerHTML += '<br> estrangeiro'
    }
}