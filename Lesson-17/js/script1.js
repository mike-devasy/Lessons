// Задача 1.	Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних,<br>
// кількості від’ємних, кількість входжень деякого числа (статичні методи).
class ArrSelect {
	static getCountSignOfNum(){
		let count1 = 0,
		    count2 = 0
				for (const elem of this.arr) {
					if (elem >= 0) count1++
					else count2++
				}
				return [count1, count2]
		}
static getCountSomeNum(someNum){
	 if(this.arr.includes(someNum) === false) throw new Error('В масиві немає такого числа')
	 else
		return this.arr.reduce((prevCount, elem) => elem === someNum ? prevCount + 1 : prevCount, 0)
	
}
	constructor(initArr){
		this.constructor.arr = initArr
	}

}
let T1 = new ArrSelect([12, 85, -9, 5, 81, -9, 1, 25, 12, 85, 12])
let [posCount, negCount] = ArrSelect.getCountSignOfNum()
console.log(`Кількість додатніх : ${posCount}\nКількість від ємних : ${negCount}`);
const someNum = 12
let quantity =  ArrSelect.getCountSomeNum(someNum)
console.log(`Число ${someNum} зустрічається ${quantity} рази`);


