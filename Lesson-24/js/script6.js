// Задача 6.Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.<br>
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін <br>
// протягом одного сеансу.
let changeCount = 0
function getInput() { 
	const baseElement = document.getElementById('base')
const lab = document.createElement('label')
baseElement.append(lab)
const inp = document.createElement('input')
inp.setAttribute('type', 'color')
lab.append(inp)
inp.addEventListener('change', function(){
	document.body.style.backgroundColor = this.value
sessionStorage.setItem('color', this.value)
 changeCount++
sessionStorage.setItem('changeCount', changeCount)
})
}


 window.onload = function(){
	changeCount = 0
sessionStorage.setItem('changeCount', changeCount)
	getInput()
if(sessionStorage.getItem('color')){
	document.body.style.backgroundColor = sessionStorage.getItem('color')
}
if(sessionStorage.getItem('changeCount')){
	changeCount = parseInt(sessionStorage.getItem('changeCount'))
}

 }
