var varstring = "sayang"
var varinteger = 1
var varboolean = true
var varchar = 'z'
var varstrng = "indra"
var input1 = document.querySelector(".angka1")
var input2 = document.querySelector(".angka2")
var Operasi = document.querySelector(".operasi")
var Hitung = document.querySelector(".btnsubmit")
var jumlah = document.querySelector(".jumlah")

function Jumlahkan() {
    console.log("masuk")
    var tem1=input1.value 
    var tem2=input2.value
    var tem3=Operasi.value
    var tem4
    if (tem3==="*") {
       tem4=tem1*tem2 
    } else if (tem3==="-") {
        tem4=tem1-tem2
    } else if (tem3==="+") {
        tem4=tem1+tem2 
    } else if (tem3==="/") {
        tem4=tem1/tem2
    } 
    jumlah.textContent = tem4
}
Hitung.addEventListener('click',Jumlahkan)
