// Задача 5.	Розробити клас «Керівник танців»
let boyClass = ['Ivan', 'Bogdan', 'Igor', 'Mykhailo', 'Mikola','Oleg']
let girlClass = ['Olena', 'Tetyana', 'Ganna', 'Ninel', 'Olga','Irina']
class DanceLeader {
	constructor(boyClass, girlClass){
this.boyClass = boyClass
this.girlClass = girlClass
	}
getRandNum(arr){
return	 Math.floor(Math.random()*arr.length)
}
getRandBoy(){
let index = this.getRandNum(this.boyClass)
return this.boyClass[index]
}
getRandGirl(){
let index = this.getRandNum(this.girlClass)
return this.girlClass[index]
}
getRandCoupleOfDancer(){
	let i = this.getRandNum(this.boyClass)
	let j = this.getRandNum(this.girlClass)
	return [this.boyClass[i], this.girlClass[j] ]
}
run(){
	 setInterval(() => {
		let couple = this.getRandCoupleOfDancer()
		console.log(`Наступна випадкова пара для танців : ${couple}`);
	 }, 5000)
}
render(){
	console.log(`Випадковий танцюрист : ${this.getRandBoy()}`);
	console.log(`Випадкова танцюристка : ${this.getRandGirl()}`);
	console.log(`Випадкова пара для танців : ${this.getRandCoupleOfDancer()}`);
}
}
 let randSelectOfDancer = new DanceLeader(boyClass, girlClass)
 randSelectOfDancer.render()
 randSelectOfDancer.run()