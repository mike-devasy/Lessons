// Задача 2.Створити об’єкт «Авто».
let auto = {
	make : 'Audi',
  sizeOfTank : 63,
	currentNumberOfLiter : 31,
	numberOfSeats : 6,
	numberOfPassenger : 5,
	refuelingQuantityLitres : function(quantityLitres){
if(this.sizeOfTank < this.currentNumberOfLiter + quantityLitres) throw new Error('There is not Enough ....')
return this.currentNumberOfLiter += quantityLitres

	},
	toString  :   function(){
		return `Кількість пасажирів - ${this.numberOfPassenger}`
	},
addPassengers : function (passengers) { 
	return this.numberOfPassenger += passengers;
 },
 disembarkationOfPassengers : function(passengers){
	return  this.numberOfPassenger -= passengers;
 }
}
console.log(auto.toString());
console.log(auto.refuelingQuantityLitres(10));