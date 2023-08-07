// Задача 0.Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми,
//  а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
let obj1 = {
	name : 'Ivan',
	age  : 12 ,
	height : 170,
	scores : [5, 8, 10 , 7, 9, 12],
	getSumScores : function(){
		let sum = 0;
		for (let i = 0; i < this.scores.length; i++) {
			sum += this.scores[i]
		}
		return sum
	}
}
const totalScores = obj1.getSumScores()
console.log(totalScores);
let obj2 = {
	name : 'Bogdan',
	age  : 10 ,
	height : 160,
	scores : [3, 8, 11 , 6, 10, 12, 10, 12, 9],
	getProdFromRange : function(min = 10, max = 12){
		return this.scores.reduce((prevProd, score) => score >= min && score <= max ? prevProd * score : prevProd , 1)
	}
}
const prodScores2 = obj2.getProdFromRange()
console.log(prodScores2);
const totalScores2 = obj1.getSumScores.call(obj2);
console.log(totalScores2);
const prodScores = obj2.getProdFromRange.apply(obj1, [5, 8]);
console.log(prodScores);