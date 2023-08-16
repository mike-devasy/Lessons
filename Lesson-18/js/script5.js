// Користувач задає кількість рядків і стовпців. Відобразити таблицю, у клітинках<br> 
// якої знаходяться числа 1, 2, 3, …
const baseElement = document.querySelector('.block')
const lab = document.createElement('label')
baseElement.after(lab)
const inp = document.createElement('input')
inp.setAttribute('type','text') 
inp.setAttribute('pattern','\d+[\s,]\d+') 
inp.setAttribute('placeholder', 'Введіть кількість рядків та столбців скрізь пробіл або кому')
lab.append(inp)
function getTable() {  

const[rowNum, colNum] = inp.value.split(/[\s,]+/).map(Number);
console.log([rowNum, colNum]);

let table = document.querySelector('table');
if (table) {
	table.remove();
}
table = document.createElement('table')
lab.after(table)
let num = 0
for (let i = 1; i <= rowNum; i++) {
	const row = document.createElement('tr')
	for (let j = 1; j <= colNum; j++) {
		const col = document.createElement('td')
		num++
		col.innerText = `${num}`
		row.append(col)
	}
	table.append(row)
	
}
}
 inp.onchange = getTable