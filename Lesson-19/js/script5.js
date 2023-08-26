//  Задача 5 		Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену <br>
//  рамку (при кліку робити toogle з класом вибраного елемента)
const baseElement = document.querySelector('.base')
class Card{
	constructor(){
		this.card = document.createElement('div')
		baseElement.append(this.card)
	}
	addCard(imgSrc){
		const imageCard = document.createElement('img')
		this.card.append(imageCard)
		imageCard.setAttribute('src', imgSrc)
	}
}
const card1 = new Card()
card1.addCard('../img/shop_01.jpeg')
const card2 = new Card()
card2.addCard('../img/shop_02.jpeg')
const card3 = new Card()
card3.addCard('../img/shop_03.jpeg')
const card4 = new Card()
card4.addCard('../img/shop_04.jpeg')
function selectCard(card) {
card.classList.toggle('selectCard')
  }
card1.card.onclick = () => selectCard(card1.card)
card2.card.onclick = () => selectCard(card2.card)
card3.card.onclick = () => selectCard(card3.card)
card4.card.onclick = () => selectCard(card4.card)