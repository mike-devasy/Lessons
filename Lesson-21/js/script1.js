// Задача 1. Створити клас Client
 class Client{
	constructor(id, surName, amountOfMoney){
this.id = id
this.surName = surName
this.amountOfMoney = amountOfMoney
	}
addMoney(money){
return  this.amountOfMoney += money
}
withdrawingMoney(money){
	return  this.amountOfMoney -= money
}
toString(){
	return `id : ${this.id},${this.surName}, кількість грошей на рахунку- ${this.amountOfMoney}грн`
}
 }
 const client1 = new Client(453, 'Петро Сидоров', 12000)
 console.log(client1.toString());
 class GoldenClient extends Client{
	constructor(id, surName, amountOfMoney,creditLimit = 30000, percentForCredit = 5){
		super(id, surName, amountOfMoney)
this.creditLimit = creditLimit
this.percentForCredit = percentForCredit
this.period = 3
	}
	addMoney(money){
		super.addMoney(money)
		}
		withdrawingMoney(money){
			super.withdrawingMoney(money)
		}
getPenaltyPerCredit(percentForCredit, period){
	percentForCredit = this.percentForCredit
	period = this.period
	return  this.amountOfMoney *  this.percentForCredit * this.period / 100
}
toString(){
	return `id : ${this.id}, Ф.И.О. : ${this.surName}, кількість грошей на рахунку- ${this.amountOfMoney}грн,Пеня за використання кредиту:${this.getPenaltyPerCredit()}грн.`
}
 }
 const goldClient1 = new GoldenClient(152, 'Богдан Шуйко', 2000 )
 goldClient1.addMoney(500);
 console.dir(goldClient1.toString())
 goldClient1.withdrawingMoney(1500);
 console.dir(goldClient1.toString())
