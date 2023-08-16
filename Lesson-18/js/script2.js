// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
const dollarRate = 37
const euroRate = 41
function converter() { 
	const grn = parseFloat(document.getElementById('grn').value)
	const euro = grn / euroRate
	const dol = grn / dollarRate
	document.getElementById('res1').value = euro.toFixed(2)
	document.getElementById('res2').value = dol.toFixed(2)
 }
 
const lab1 = document.createElement('label')
const inp1 = document.createElement('input')
inp1.setAttribute('type', 'number')
inp1.setAttribute('placeholder', '0')
inp1.id = 'grn'
const baseElement = document.getElementById('base')
baseElement.append(lab1)
lab1.append(inp1)
const btn = document.createElement('button')
btn.setAttribute('type', 'button')
btn.classList.add('btn')
lab1.after(btn)
const button = document.querySelector('.btn')
button.textContent = 'Конвертувати'
const lab2 = document.createElement('label')
btn.after(lab2)
const inp2 = document.createElement('input')
inp2.setAttribute('type', 'number')
inp2.setAttribute('placeholder', '0')
inp2.id = 'res1'
lab2.append(inp2)
const title1 = document.createElement('div')
const title2 = document.createElement('div')
const title3 = document.createElement('div')
title1.classList.add('title_1')
title2.classList.add('title_2')
title3.classList.add('title_3')

title1.innerText = 'Сума в гривнях'
title2.innerText = 'Сума в евро'
title3.innerText = 'Сума в доларах'
lab1.before(title1)
lab2.before(title2)
lab2.after(title3)
const lab3 = document.createElement('label')
lab2.after(lab3)
const inp3 = document.createElement('input')
lab3.append(inp3)
inp3.before(title3)
inp3.setAttribute('type', 'number')
inp3.setAttribute('placeholder', '0')
inp3.id = 'res2'
lab1.classList.add('label')
lab2.classList.add('label')
lab3.classList.add('label')
button.onclick = converter