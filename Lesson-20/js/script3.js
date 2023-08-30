// Задача 3. На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата,<br> 
// 	стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму <br> 
// 	і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0.<br> 
// 	 Використати делегування
let userProperty = [
	{age : 'вік'},
	{height : 'зріст'},
	{weight : 'вага'},
	{salary : 'заробітна плата'},
	{experience : 'стаж'},
	{departNumber : 'номер відділу'},
	{number : 'порядковий номер'},
]
let inputMessages = ['Введіть вік', 'Введіть зріст', 'Введіть вагу', 'Введіть заробітну плату', 'Введіть стаж', 'Введіть номер відділу', 'Введіть порядковий номер']
function getForm(userProperty, inputMessages, formNumbers = 7) {
	const baseElement = document.querySelector('.block')
	for (let i = 0; i < formNumbers; i++) {
		const title = document.createElement('p')
		title.innerText = Object.values(userProperty[i])[0]
		const lab = document.createElement('label')
		let inputMessage = inputMessages[i]
		baseElement.append(lab)
		lab.before(title)
		const inp = document.createElement('input')
		inp.setAttribute('type', 'number')
		inp.setAttribute('placeholder', inputMessage)
		lab.append(inp)
	}
	const formButton = document.createElement('button')
	formButton.setAttribute('type', 'submit')
	formButton.className = 'btn'
	formButton.innerText = 'Відправити'
	baseElement.append(formButton)
	return

}
getForm(userProperty, inputMessages)
function clickInput(event) {
	event.target.value = 0
}
const inputs = document.querySelectorAll('input')
inputs.forEach(input => input.addEventListener('click', clickInput))