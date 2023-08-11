// Задача 1.Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється  <br>
// структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну  <br>
// кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.
 class TDate {
 #month
 #year
 #day
	constructor(initDay, initMonth, initYear){
this.Day = initDay
this.Month = initMonth
this.Year  = initYear
//  this.askUser = askUser
	}
	askUser()  {
		const askUser = confirm('Should be add TDate ?')
		if(askUser){
		 const addYear = parseInt(prompt('addYear ?',''))
		 this.addYear(addYear)
		 const addMonth = parseInt(prompt('addMonth ?',''))
		 this.addMonth(addMonth)
		 const addDay = parseInt(prompt('addDay ?',''))
		 this.addDay(addDay)
		}
		else {
		 const reduceYear = parseInt(prompt('reduceYear ?',''))
		 this.reduceYear(reduceYear)
		 const reduceMonth = parseInt(prompt('reduceMonth ?',''))
		 this.reduceMonth(reduceMonth)
		 const reduceDay = parseInt(prompt('reduceDay ?',''))
		 this.reduceDay(reduceDay)
		}
	}
	get Month(){
		return this.#month;
	}
	get Year(){
		return this.#year
	}
	set Month(newMonth){
		if(newMonth < 1 || newMonth > 12)
		throw new Error('Введіть коректне значення місяця!')
		this.#month = newMonth
	}
	set Year(newYear){
		if(newYear< 0)
		throw new Error('Не коректне значення')
		this.#year = newYear
	}
	get Day() {
		return this.#day
}
set Day(newDay) {
		if (newDay < 1 || newDay > 31) throw new Error('Не коректне значення')
		this.#day = newDay
}
	addYear(addYear){
 return this.Year += addYear
	}
	reduceYear(reduceYear){
		return this.Year -= reduceYear
	}
	addMonth(addMonth){
		let currentMonth = this.Month + addMonth;
		if(currentMonth > 12){
			this.Year += Math.floor(currentMonth / 12)
			this.Month = currentMonth % 12
		}
		else  this.Month += addMonth
		
	}
reduceMonth(reduceMonth){
	const totalMonth = this.Year * 12 + this.Month -1 ;
	const newReduceMonth = totalMonth - reduceMonth;
	this.Year = Math.floor(newReduceMonth / 12)
	this.Month = newReduceMonth % 12 + 1
}
addDay(addDay){
	let currentDay = this.Day + addDay;
	if(currentDay > 31){
		this.Month += Math.floor(currentDay / 31)
		this.Day = currentDay % 31
	}
	else  this.Day += addDay
	
}	
reduceDay(reduceDay){
	let currentDay = this.Day - reduceDay;
	while (currentDay < 1){
		this.Month--
 if(this.Month < 1){
	this.Year--
	this.Month = 12
 } 
 let daysInMonth = 31;
 if (this.Month === 4 || this.Month === 6 || this.Month === 9 || this.Month === 11) {
		 daysInMonth = 30;
 } else if (this.Month === 2) {
		 daysInMonth = (this.Year % 4 === 0 && (this.Year % 100 !== 0 || this.Year % 400 === 0)) ? 29 : 28;
 }
 currentDay += daysInMonth;
}
this.Day = currentDay;
	}


	toString(){
		return `Updating new Date : ${this.Day}.${this.Month}.${this.Year} `
	}
 }
 
 const  initYear = parseInt(prompt('Year ?',''))
 const  initMonth = parseInt(prompt('Month ?',''))
 const  initDay = parseInt(prompt('Day ?',''))

 let T1 = new TDate(initDay, initMonth, initYear)
 T1.askUser()
	alert(`${T1.toString()}`)

 