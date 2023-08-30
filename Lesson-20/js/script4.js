// Задача 4. На сторінці міститься певна кількість кнопок і інпутів. 
// Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.
const baseElement = document.querySelector('.block')
function getInpBlocks(inpNumbers){
	for (let i = 0; i < inpNumbers; i++) {
		const inpBlock = document.createElement('div')
		inpBlock.className = 'itemBlock'
		baseElement.append(inpBlock)
		const lab = document.createElement('label')
		inpBlock.append(lab)
		const inp = document.createElement('input')
		inp.setAttribute('type', 'text')
		lab.append(inp)
		const btn = document.createElement('button')
		btn.setAttribute('type', 'button')
		btn.innerText = 'Submit'
		lab.after(btn)
	}

}
getInpBlocks(5);
const showCounter = document.createElement('div')
let counter = 0;
showCounter.textContent = `Кількість кліків на інпутах: ${counter}`
baseElement.after(showCounter)
function clickInput() {
	counter++
	showCounter.textContent = `Кількість кліків на інпутах: ${counter}`
	return counter
}
const inputs = document.querySelectorAll('input')
inputs.forEach(input => input.addEventListener('click', clickInput))

const showCountBtn = document.createElement('div')
let countBtn = 0;
showCountBtn.textContent = `Кількість кліків на кнопках: ${countBtn}`
baseElement.after(showCountBtn)
function clickBtn() {
	countBtn++
	showCountBtn.textContent = `Кількість кліків на кнопках: ${countBtn}`
	return countBtn
}
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', clickBtn))