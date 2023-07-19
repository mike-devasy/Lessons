// Знайти суми елементів у вказаній області (масиви розділені на 4 рівні частини -  не звертаємо увагу на криві малюнки ☺ )
// 5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.
const totalArray = [[5, 45, 70, 20, 25, 88], 
									 [15, 45, 20, 20, 45, 98], 
                   [38, 25, 90, 50, 35, 80], 
                   [70, 15, 20, 30, 45, 8]]
// const columnNum = 6
// const rowNum = totalArray.length

function getSumSelectedSection(rowStartIndex,columnStartIndex, rowEndIndex, columnEndIndex) { 
let sum = 0
for (let rowIndex = rowStartIndex ; rowIndex < rowEndIndex; rowIndex++) {
	for (let columnIndex = columnStartIndex; columnIndex < columnEndIndex; columnIndex++) {
		sum += totalArray[rowIndex][columnIndex]
		
	}
}
return sum	
}
document.write(` 1) Сума єлементів в верхній лівій зоні = ${getSumSelectedSection(0, 0, 2, 3)}<br>`)
document.write(` 2) Сума єлементів в верхній правій зоні = ${getSumSelectedSection(0, 3, 2, 6)}<br>`)
document.write(` 3) Сума єлементів в нижній лівій зоні = ${getSumSelectedSection(2, 0, 4, 3)}<br>`)
document.write(` 4) Сума єлементів в нижній правій зоні = ${getSumSelectedSection(2, 3, 4, 6)}<br>`)
function getSumEvenRows(rowStartIndex,columnStartIndex, rowEndIndex, columnEndIndex) { 
	let sum = 0
	for (let rowIndex = rowStartIndex ; rowIndex < rowEndIndex; rowIndex += 2) {
		for (let columnIndex = columnStartIndex; columnIndex < columnEndIndex; columnIndex++) {
			sum += totalArray[rowIndex][columnIndex]
		}
	}
	return sum	
}
document.write(` 5) Сума парних рядків = ${getSumEvenRows(1, 0, 4, 6)}<br>`)
function getSumOddColumns(rowStartIndex,columnStartIndex, rowEndIndex, columnEndIndex) { 
	let sum = 0
	for (let rowIndex = rowStartIndex ; rowIndex < rowEndIndex; rowIndex ++) {
		for (let columnIndex = columnStartIndex; columnIndex < columnEndIndex; columnIndex += 2) {
			sum += totalArray[rowIndex][columnIndex]
			
		}
	}
	return sum	
}
document.write(` 6) Сума непарних стовбців = ${getSumOddColumns(0, 0, 4, 5)}<br>`)
function getSumChessElements(rowStartIndex,columnStartIndex, rowEndIndex, columnEndIndex) { 
	let sum = 0
	for (let rowIndex = rowStartIndex ; rowIndex < rowEndIndex; rowIndex += 2) {
		for (let columnIndex = columnStartIndex; columnIndex < columnEndIndex; columnIndex += 2) {
			sum += totalArray[rowIndex][columnIndex]
			
		}
	}
	return sum	
}
document.write(` 7) Сума У парних рядках – непарні стовпці, у непарних – парні. = ${getSumChessElements(1, 0, 4, 6)}<br>`)