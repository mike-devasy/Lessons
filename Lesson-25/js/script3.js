// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану<br>
// кількість парних чисел.
function randEvenNum(min = 0, max = 1000){
	let number = min + Math.floor(Math.random()*max)
	if(number %2 !== 0) 
	number++ ;
	return number;
}


function* generateRandomEvenNumber(start = 1, userNumbers = 100){
	for (let i = start; i <= userNumbers; i++) {
		let randNumEven = randEvenNum();
     console.log(randNumEven);
		 yield randNumEven
	}
}
let gen = generateRandomEvenNumber()
console.log(gen);

for (const number of gen) {
	console.log(number);
}