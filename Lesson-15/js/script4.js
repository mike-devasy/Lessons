// Задача 4.	Розробити клас Baner 
class  Baner{
	constructor(link, sourse) {
		this.link = link
		this.sourse  = sourse
	}
static getRandBaner(arr){
	let index = Math.floor(Math.random()*arr.length)
	return arr[index]
}
showRandBaner(){
	document.write(`<a href= ${this.link}><img src='../img/${this.sourse}' <style: max-width = 100%  mmax-hight = 100% >  ></img></a>`);
}
}
let gallery = [
	new Baner('https://www.patreon.com/freelancerlifestyle/posts', '../img/photo5.png'),
	new Baner('https://uk.javascript.info/', '../img/photo2.png'),
	new Baner('https://ru.gravatar.com/', '../img/photo3.png'),
	new Baner('https://www.udemy.com/join/login-popup/?next=/home/my-courses/learning/', '../img/photo4.png'),
	new Baner('https://favicon.io/favicon-generator/','../img/photo5.png'),
]
let randBaner = Baner.getRandBaner(gallery)
randBaner.showRandBaner()