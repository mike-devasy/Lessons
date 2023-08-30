// Задача 2. Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі
//  з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану. 
class Tank {
	constructor(tankLeft = 100, tankStep = 1, interval = 50){
		this.tankLeft = tankLeft
		this.tankStep = tankStep
		this.interval = interval
		this.tankTop = 0
	}

	tankMove(tankTop){
const baseElement = document.getElementById('base')
const height = parseInt(baseElement.offsetHeight)
console.log(height);
if(tankTop < height){

this.timerID = setInterval(() => {
	if(this.tankTop >=  height)
	clearInterval(this.timerId)
else {
this.tankTop += this.tankStep;
this.divTank.style.top = `${this.tankTop}px`
}
	}, this.interval)
	}
	return this;
 }
 bayraktarGame(){
	this.divFire.style.zIndex = '1'
	setTimeout(() => {
    this.divTank.style.display = 'none';
}, 1000);

}
render(){
	const baseElement = document.getElementById('base')
	let divTank = document.createElement('div')
	divTank.className = 'tank'
	baseElement.append(divTank)
	const divImgTank = document.createElement('img')
	divImgTank.className = 'imgTank'
	divTank.style.left = `${this.tankLeft}px`
	divTank.style.top = `${this.tankTop}px`
	divImgTank.setAttribute('src', '../img/tank.png')
	divTank.append(divImgTank)
	const divFire = document.createElement('div')
	divFire.className = 'fire'
	divFire.style.zIndex  =  '-1'
	divTank.append(divFire)
	this.divTank = divTank
	this.divFire = divFire
	const divImgFire = document.createElement('img')
	divImgFire.className = 'imgFire'
	divImgFire.setAttribute('src', '../img/fire.png')

	divFire.append(divImgFire)
	let that = this;
	divTank.addEventListener('click', function(){
		that.bayraktarGame();})
return this;
}
}
const tank1 = new Tank() 
tank1.render().tankMove(tank1.tankTop)
const tank2 = new Tank(50, 1, 40) 
tank2.render().tankMove(tank2.tankTop)
const tank3 = new Tank(200, 1, 35) 
tank3.render().tankMove(tank3.tankTop)