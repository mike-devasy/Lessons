// Задача 6.Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.<br>
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін <br>
// протягом одного сеансу.
let changeCount = 0

function getInput() { const baseElement = document.getElementById('base')
const lab = document.createElement('label')
baseElement.append(lab)
const inp = document.createElement('input')
inp.setAttribute('type', 'color')
lab.append(inp)
inp.addEventListener('change', function(){
	document.body.style.backgroundColor = this.value
	localStorage.setItem('color', this.value)
changeCount++
localStorage.setItem('changeCount', changeCount)
})
}


 window.onload = function(){
	getInput()
if(localStorage.getItem('color')){
	document.body.style.backgroundColor = localStorage.getItem('color')
}
if(localStorage.getItem('changeCount')){
	changeCount = parseInt(localStorage.getItem('changeCount'))
}
 }
