// Задача 1. Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
//  Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального
//  до максимального розміру. Як тільки досягнути максимального розміру
//  зірочка повинна з’являтися у іншій випадковій позиції.
class Star {
	constructor(starTop = 0, starLeft = 0, minStarWidth = 10, maxStarWidth = 100, widthStep = 10, interval = 500){
		this.starTop = starTop;
		this.starLeft = starLeft;
    this.minStarWidth = minStarWidth;
		this.maxStarWidth = maxStarWidth;
		this.widthStep = widthStep;
		this.interval = interval
		this.starWidth = minStarWidth;
	}
	randStarPosition(){
 const randNum = Math.random() * 500
this.starTop += randNum
this.starLeft += randNum / 2
return this;
	}
	scaleStar(starWidth) {
		if (starWidth < this.maxStarWidth) {
				this.starWidth += this.widthStep;
				let starImg = document.querySelector('img');
				starImg = this.starImg;
				starImg.style.width = `${this.starWidth}px`;
				starImg.style.top = `${this.starTop}px`;
				starImg.style.left = `${this.starLeft}px`;
				setInterval(() => this.scaleStar(this.starWidth), this.interval);
		}
		return this;
}
	render(){
		const baseElement = document.querySelector(".block")
		const starDiv = document.createElement('div')
		baseElement.append(starDiv)
		const starImg = document.createElement('img')
		starImg.setAttribute('src', '../img/star.png')
		this.starImg = starImg
		starDiv.append(starImg);
		  return this;
	}
}
function getStars(starNumbers, Star){
	const stars = []
for (let i = 1; i <= starNumbers; i++) {
	const  star = new Star()
	star.render().randStarPosition().scaleStar(star.starWidth)
	stars.push(star)
}
return stars;
}
getStars(5, Star)


 