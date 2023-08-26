// Задача 4.  Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік <br>
							//  на якійсь із клітинок, то до відповідної таблиці додається червона рамка <br>
							//  (спробуйте додати можливість відображення кількості кліків біля назви таблиці <br>
							//   з використанням відповідно доданого для цього атрибута).
		const baseElement = document.querySelector('.block')

		function randNum(min = 1, max = 100) { 
			return min + Math.floor(Math.random()* (max - min + 1))
		 }							
 function getTable(rowNum, colNum) {
	const table =  document.createElement('table')
  table.dataset.clicks = 0
for (let i = 0; i < rowNum; i++) {
	const row = document.createElement('tr')
	for (let j = 0; j < colNum; j++) {
		const td = document.createElement('td')
    td.innerText = randNum()
		row.append(td)
	}
	table.append(row)

}
return table
  }
	const tableNumber = 3
	for (let i = 0; i < tableNumber; i++) {
		const tableElem = getTable(3, 3)
		baseElement.append(tableElem)

		const lab = document.createElement('label')
		tableElem.before(lab)
    const inp = document.createElement('input')
		lab.append(inp)
    inp.setAttribute('type', 'number')
    inp.setAttribute('placeholder', `Кількість кліків ${i+1} таблиці`)

	}
 function clickTest(event) {
	if(event.target.tagName === 'TD'){
	const table = event.target.closest('table')
	event.target.closest('table').style.border = '2px solid red'
	table.dataset.clicks = parseInt(table.dataset.clicks)+1
	table.previousElementSibling.querySelector('input').value = table.dataset.clicks
}
 }
 document.querySelectorAll('table').forEach((table) => {
	table.onclick = clickTest

})
