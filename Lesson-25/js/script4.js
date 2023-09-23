// Задача 4. Використовуючи один з АРІ 
//https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
async function getImage(){

let response = await fetch("https://dog.ceo/api/breed/chihuahua/images/random")
if(response.ok){
	const data = await response.json()
	document.body.innerHTML = `<img src = "${data.message}">`
}
}
setInterval(() => getImage(), 3000)          