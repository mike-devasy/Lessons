// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table».<br>
// В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього<br>
//  натискає на кнопку “get sum” і знаходить середнє значення.
const baseElement = document.querySelector('.block')
const lab = document.createElement('label')
baseElement.after(lab)
const inp = document.createElement('input')
inp.id = 'scoreNumbers'
inp.setAttribute('type','number')
inp.setAttribute('placeholder', 'Введіть кількість оцінок')
lab.append(inp)
const button = document.createElement('button')
button.innerText = 'get table'
button.setAttribute('type', 'button')
button.classList.add('btn')
lab.after(button)
// let butAverage;
function getTable() {
let table = document.querySelector('table');
if (table) {
	table.remove();
}
table = document.createElement('table')
button.after(table)
 let butAverage = document.querySelector('.btn2')
 if(butAverage){
	butAverage.remove()
 }
 butAverage = document.createElement('button')
	butAverage.innerText = 'get sum'
	butAverage.setAttribute('type', 'button')
	butAverage.classList.add('btn2')
	table.after(butAverage)
	const lab2 = document.createElement('label')
	butAverage.after(lab2)
	let inpAverage = document.getElementById('average')
	if(inpAverage){
		inpAverage.remove()	
	}
	 inpAverage = document.createElement('input')
	inpAverage.id = 'average'
	inpAverage.setAttribute('type','number')
	inpAverage.setAttribute('placeholder', 'Середня  оцінка')
	lab2.append(inpAverage)
const	scoreNumbers = parseInt(document.getElementById('scoreNumbers').value)
	for (let i = 0; i < scoreNumbers; i++) {
		const row = document.createElement('tr')
		table.append(row) 
		const col = document.createElement('td')
		row.append(col)
		const labScore = document.createElement('label')
		col.append(labScore)
		const inpScore = document.createElement('input')
		inpScore.setAttribute('type','number')
		inpScore.classList.add('inpScore')
    inpScore.setAttribute('placeholder', `Введіть оцінку по ${i+1}-му предмету`)
		inpScore.id = `score${i+1}` 
		labScore.append(inpScore)
	}
	butAverage.onclick = getAverage
	
  }
	
	function getAverage (){
		const scoreNumbers = parseInt(document.getElementById('scoreNumbers').value);
		let sum = 0
		for (let i = 0; i < scoreNumbers; i++) {
			 sum += parseInt(document.getElementById(`score${i+1}`).value)
			
		}
	
		const average = sum / scoreNumbers
		document.getElementById('average').value = average.toFixed(2)
	}
	button.onclick = getTable
