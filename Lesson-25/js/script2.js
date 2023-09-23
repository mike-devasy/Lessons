// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product 
// 	(назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при
// 	 ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
class Shop{
	constructor(productList){
		this.productList = productList
	}
[Symbol.iterator](){
	this.currentIndex = 0
	return this
}
next(){
	if(this.currentIndex < this.productList.length){
		const currentProduct = this.productList[this.currentIndex++]
		return {
			done:false,
			value:`${currentProduct.title} - ${currentProduct.price}`
		}
	}
		else return {done:true}
}
}
class Product{
	constructor(title,price,quantity){
		this.title =  title
		this.price = price
		this.quantity = quantity
	}
	[Symbol.toPrimitive](hint){
		switch (hint) {
			case 'string':
				return `${this.title}-${this.price}`
			default:
				return this.title
		}
	}
}
const prod1 = new Product('Сорочка', 500, 5)
const prod2 = new Product('Костюм', 2500, 2)
const prod3 = new Product('Юбка', 1500, 3)
const prod4 = new Product('Піджак', 2500, 2)
const prod5 = new Product('Пуловер', 1500, 4)
let productList = [prod1, prod2, prod3, prod4, prod5]
const shop = new Shop(productList)
for (const item of shop) {
	console.log(item);
}
// let arr = [...shop]
// console.log(arr);
