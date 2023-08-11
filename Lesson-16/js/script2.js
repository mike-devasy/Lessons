// Задача 2.Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового <br>
// еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу  <br>
// долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 
class Money {
	#dollarBalance
	constructor(initGRNBalance, dollarRate){
	this.dollarRate = dollarRate
	this.Balance = initGRNBalance
}
	get Balance (){
		return this.#dollarBalance * this.dollarRate 
	}
	set Balance (grnSum){
		if(grnSum < 0)
		throw new Error ('Помилка.Початкова сума не може бути меншою за нуль')
	
	this.#dollarBalance = grnSum / this.dollarRate
	}
	addMoney(grnSum){
		if(grnSum < 0)
		throw new Error ('Сума поповнення не може бути меншою за нуль')
		this.Balance += grnSum
	}
	getMoney(grnSum){
		if(grnSum > 0)
		throw new Error ('Немає стільки грошей на рахунку')
		this.Balance -= grnSum
	}
	getTarget100Rate() {
	return (this.Balance + 100) / this.#dollarBalance
		  }
}
let newBalance = new Money(100000, 37)
// console.log(newBalance);
let p = 23000
newBalance.addMoney(p)
let s = newBalance.Balance
console.log(`Ваш рахунок поповнено на ${p} грн.,та зараз на вашому рахунку ${s}грн.`);
