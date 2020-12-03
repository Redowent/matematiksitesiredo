

var sayı = document.getElementById('sayi')
var veriler = document.getElementsByClassName('veriler')
var sayi2 = document.getElementById('sayi2')
var verialan = document.getElementById('verialan')
var topla = document.getElementById('topla'),
carp = document.getElementById('carp'),
bol = document.getElementById('bol'),
cikar = document.getElementById('cikar')
topla.onclick = function(){
    if(!sayı.value) alert('Birinci sayıyı gir!')
    if(!sayi2.value) alert('İkinci sayıyı gir!')

    verialan.innerHTML = `<p>${Number(sayı.value)+Number(sayi2.value)}</p>`
}
carp.onclick = function(){
    if(!sayı.value) alert('Birinci sayıyı gir!')
    if(!sayi2.value) alert('İkinci sayıyı gir!')

    verialan.innerHTML = `<p>${sayı.value*sayi2.value}</p>`
}
bol.onclick = function(){
    if(!sayı.value) alert('Birinci sayıyı gir!')
    if(!sayi2.value) alert('İkinci sayıyı gir!')

 verialan.innerHTML = `<p>${sayı.value/sayi2.value}</p>`
}
cikar.onclick = function(){
    if(!sayı.value) alert('Birinci sayıyı gir!')
    if(!sayi2.value) alert('İkinci sayıyı gir!')

    verialan.innerHTML = `<p>${sayı.value-sayi2.value}</p>`
}
