// Задача 2.	Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити<br> 
// тільки один екземпляр цього класу.
class OfficialCar {
	static officialCarRef
	constructor(initName, initMark, initNumber){
if(OfficialCar.officialCarRef) return OfficialCar.officialCarRef
this.Name = initName
this.Mark = initMark
this.Number = initNumber
OfficialCar.officialCarRef = this
	}
}
const T1 = new OfficialCar('Ivan','Mazda','RTY 458')
const T2 = new OfficialCar('Bogdan','Audi','YBG 492')
const T3 = new OfficialCar('Ishtvan','Mersedes','LKM 253')
console.log(T1);
console.log(T2);
console.log(T3);
