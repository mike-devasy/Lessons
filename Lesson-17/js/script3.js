// Задача 3.		Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма<br>
// нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз <br>
// вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. <br>
// Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
 class Reminder {
	static interval = 3000
	static reminder
	constructor(message){
	this.message = message
	this.countOfNumber = 0
	this.firstInterval = 0
if(Reminder.reminder){
	return Reminder.reminder
}
Reminder.reminder = this
	}
	startInterval(){
	this.firstInterval =	setInterval(() => {
	document.write(`Я вам нагадувала о ${this.message} вже ${this.countOfNumber} раз<br>`)
		this.countOfNumber += 1
		},Reminder.interval)

	}
	updateNewMessage(message){
	 
		this.message = message
	}
	stopReminder(firstInterval){
		clearInterval(firstInterval)
	}
 }
 let T1 = new Reminder('Remainder')
 T1.startInterval()
 T1.updateNewMessage('new-new-new-Reminder')
T1.stopReminder(T1.firstInterval)