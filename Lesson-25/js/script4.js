// Задача 4. Використовуючи один з АРІ 
//https://github.com/public-apis/public-apis#animals


// та функцію fetch організувати завантаження та відображення даних
// async function getImage(){
// 	let response = await fetch("https://dog.ceo/api/breed/chihuahua/images/random")
// if(response.ok){
// 	const data = await response.json()
// 	document.body.innerHTML = `<img src = "${data.message}">`
// }
// else throw new Error('Error of download data')
// }
// setInterval(() => getImage(), 3000)  
async function getImageLink(){
	let url = "https://dog.ceo/api/breed/chihuahua/images/random"
return new Promise((resolve, reject) => {
	fetch(url)
	.then((response) => response.json())
	.then((data) => data.message)
	.then((imageLink) => {
		resolve(imageLink)
	})
	.catch((err) =>{
		reject(err)
	})
})
}
async function go() {
	const imageLink = await getImageLink()
	document.body.innerHTML = `<img src = "${imageLink}" alt="photo" >`
	 }
	 go()
	//  setInterval(() => go(), 3000) 

  