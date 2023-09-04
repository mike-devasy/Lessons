// Задача 3. Розробити Класи
class Home{
	constructor(positionX, positionY, source, interval){
		this.positionX = positionX
		this.positionY = positionY
		this.source = source
		this.interval = interval
	}

render(containerSelector){
const el = document.createElement('div')
 this.el = el
el.style.top = `${this.positionY}px`
el.style.left = `${this.positionX}px`
const img = document.createElement('img')
 this.img = img
img.setAttribute('src', this.source)
el.append(img)
if(containerSelector)
document.querySelector(containerSelector).append(el)
return el
}
}
class House extends Home{
constructor(positionX, positionY, source, interval){
	super(positionX, positionY, source, interval)
}
render(containerSelector){
	super.render(containerSelector)
	this.scaleMove(this.img, this.interval)
}
scaleMove(img, interval){
	setInterval(() => img.style.transform = 'scale(0.5)', interval)
	}
}
window.onload = function printHouse(){
const  house = new House(50, 100, '../img/house.jpg', 1500)
house.render('.block')
}
class Dog extends Home{
	constructor(positionX, positionY, source, interval){
	super(positionX, positionY, source, interval)
}
	render(containerSelector){
		super.render(containerSelector)
		this.leftMove(this.el, this.interval,this.positionX, this.shiftX)
	}

	randShift(){  
		return  Math.floor(Math.random()* 500)
	}

	leftMove(el, interval, positionX, shiftX){
		shiftX = this.randShift()
		setInterval(() => el.style.left = `${positionX + shiftX}px`, interval)
		}
	}

window.onload = function printDog(){
	const  dog = new Dog(50, 0, '../img/dog.png', 2500)
	dog.render('.block')
	}
	class Bird extends Home{
		constructor(positionX, positionY, source, interval){
		super(positionX, positionY, source, interval)
		}
		render(containerSelector){
			super.render(containerSelector)
			this.randMove(this.el, this.interval,this.positionX, this.shiftX, this.shiftY)
		}
		randShift(){  
			return  Math.floor(Math.random()* 300)
		}
		randMove(el, interval, positionX, positionY, shiftX, shiftY){
			shiftX = this.randShift()
			shiftY = this.randShift()
			setInterval(() => {el.style.left = `${positionX + shiftX}px`;
			el.style.top = `${positionY + shiftY}px`
		}, interval)
			}	
	}
	window.onload = function printBird(){
		const  bird = new Bird(50, 0, '../img/bird.png', 300)
		bird.render('.block')
		}