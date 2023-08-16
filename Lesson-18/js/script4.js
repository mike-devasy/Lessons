// Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження <br>
// сторінки випадковим чином вибираються <br>
// 3 і відображаються у окремих div (їх треба створити і додати на сторінку)
let dreams = ['Здоров`я', 'Кохання', 'Перемога', 'Карьєра' , 'Відпустка', 'Депозіт', 'Авто',]
const baseElement = document.querySelector('.block')
function getRandDream(arr) { 
	randIndex = Math.floor(Math.random()*arr.length)
	return arr[randIndex]
 }
 function getDreams(arr) {  
for (let i = 1; i <= 3; i++) {
	const dream = document.createElement('div')
	dream.classList.add(`dream_${i}`, 'dream')
	dream.innerText = `${getRandDream(arr)}`
	baseElement.append(dream)
}
 }
 window.onload = function () {
	getDreams(dreams)
}