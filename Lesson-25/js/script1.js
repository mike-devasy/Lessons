// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому <br>
// на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
class PhoneNumber {
	constructor(userPhoneNumber){
		this.userPhoneNumber = userPhoneNumber
	}
	getOperatorCode(userPhoneNumber){
userPhoneNumber = this.userPhoneNumber
return this.userPhoneNumber.substr(0, 3)
	}
	[Symbol.toPrimitive](hint){
		hint = this.getOperatorCode()
		let res
		switch (hint) {
			case '050' :
				res = 'MTC'
				break;
				case '063' :
        res = 'lifecell'
				break;
				case '068' :	
				res = 'Kiyvstar'
				break;
			default: 
			throw new Error('Невірний код операторa')
		}
	return res

	}
}
let phoneNumber = new PhoneNumber('0638936558')
console.log('Оператор для цього номеру:  ' + phoneNumber);

