// Задача 1. Розробити калькулятор
function getSum() {
	const firstNum = parseFloat(document.getElementById('firstNum').value)
	const secondNum = parseFloat(document.getElementById('secondNum').value)
	const s = firstNum + secondNum
	document.getElementById('result').value = s.toFixed(2)
}
function getProd() {
	const firstNum = parseFloat(document.getElementById('firstNum').value)
	const secondNum = parseFloat(document.getElementById('secondNum').value)
	const p = firstNum * secondNum
	document.getElementById('result').value = p.toFixed(2)
}
function getReduce() {
	const firstNum = parseFloat(document.getElementById('firstNum').value)
	const secondNum = parseFloat(document.getElementById('secondNum').value)
	const r = firstNum - secondNum
	document.getElementById('result').value = r.toFixed(2)
}
function getDivid() {
	const firstNum = parseFloat(document.getElementById('firstNum').value)
	const secondNum = parseFloat(document.getElementById('secondNum').value)
	const d = firstNum / secondNum
	document.getElementById('result').value = d.toFixed(2)
}
const lab1 = document.createElement('label')
const lab2 = document.createElement('label')
const inp1 = document.createElement('input')
const inp2 = document.createElement('input')
inp1.setAttribute('type', 'number')
inp1.setAttribute('placeholder', '0')
inp1.id = 'firstNum'
inp2.setAttribute('type', 'number')
inp2.setAttribute('placeholder', '0')
inp2.id = 'secondNum'
const baseElement = document.getElementById('base')
baseElement.append(lab1)
lab1.append(inp1)
lab1.after(lab2)
lab2.append(inp2)
const title1 = document.createElement('div')
const title2 = document.createElement('div')
title1.classList.add('title_1')
title2.classList.add('title_2')
title1.innerText = 'First number'
title2.innerText = 'Second number'
lab1.before(title1)
lab2.before(title2)
const buttonBlock = document.createElement('div')
buttonBlock.classList.add('button_block')
lab2.after(buttonBlock)
for (let i = 1; i <= 4; i++) {
	const btn = document.createElement('button')
	btn.setAttribute('type', 'button')
	btn.classList.add(`btn_${i}`, 'btn')
	buttonBlock.append(btn)
}
const button1 = document.querySelector('.btn_1')
button1.textContent = 'Додати'
const button2 = document.querySelector('.btn_2')
button2.textContent = 'Відняти'
const button3 = document.querySelector('.btn_3')
button3.textContent = 'Помножити'
const button4 = document.querySelector('.btn_4')
button4.textContent = 'Поділити'
const result = document.createElement('div')
buttonBlock.after(result)
const lab3 = document.createElement('label')
result.append(lab3)
const inp3 = document.createElement('input')
inp3.setAttribute('type', 'number')
inp3.setAttribute('placeholder', '0')
inp3.id = 'result'
lab3.append(inp3)
const title3 = document.createElement('div')
inp3.before(title3)
title3.classList.add('title_3')
title3.innerText = 'Результат'
button1.onclick = getSum
button2.onclick = getReduce
button3.onclick = getProd
button4.onclick = getDivid