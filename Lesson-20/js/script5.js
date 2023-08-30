// Задача5. Перекладач. Користувачу виводять змішані картки з словами на англійській і <br>
// українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). <br>
// Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. <br>
// Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.
     /*
          --- властивості
             wordsList
             cardEn - вибрана картка з англійським словом
             cardUa - вибрана картка з українським словом
             waitInterval - інтервал очікування перед видаленням або деселектом
          --- методи
             cardClick
             render
          */
class Translator{
	constructor(wordList){
		this.wordList = wordList
		this.selectedWords = {}
		this.correctAnswers = 0
		this.wrongAnswers = 0
	}
	getRandomNumber(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	createWordsSectionDiv(lang) {
		 //створюємо контейнер
		 const container = document.createElement('div')
		 container.setAttribute('lang', lang)
		  //створюємо копію списку слів
	const wordObjectList = [...this.wordList]	
	//поки копія списку не порожня
	while(wordObjectList.length > 0){
		 //визначаємо рандомний індекс у копії списку слів
		 const randomWordIndex = this.getRandomNumber(0, wordObjectList.length - 1)
		 //свторюємо div для слова і наповнюємо його
		 const selectedWord = wordObjectList[randomWordIndex]
		 const wordDiv = document.createElement('div')
		 wordDiv.setAttribute('word-id', selectedWord.id)
		 wordDiv.className = 'item'
		 wordDiv.innerText = selectedWord[lang]
    //видаляємо слово  з копії списку
		wordObjectList.splice(randomWordIndex, 1)
		//додаємо слово у контейнер
		container.append(wordDiv)
	}	
	return container
	}
	checkSelectedWords(){
		if ('en' in this.selectedWords && 'ua' in this.selectedWords) {
			this.selectedWords['en'].targetDiv.classList.toggle('selected')
			this.selectedWords['ua'].targetDiv.classList.toggle('selected')

			if (
				this.selectedWords['en'].wordId ===
				this.selectedWords['ua'].wordId
			) {
				this.selectedWords['en'].targetDiv.remove()
				this.selectedWords['ua'].targetDiv.remove()
				this.selectedWords = {}
				this.correctAnswers++
			} else {
				this.selectedWords['en'].targetDiv.classList.toggle('wrong')
				this.selectedWords['ua'].targetDiv.classList.toggle('wrong')
				this.wrongAnswers++
				setTimeout(() => {
					this.selectedWords['en'].targetDiv.classList.toggle('wrong')
					this.selectedWords['ua'].targetDiv.classList.toggle('wrong')
					this.selectedWords = {}
				}, 1000)
			}
			if (this.correctAnswers === this.wordsList.length) {
				const completeEvent = new CustomEvent('testComplete', {
					detail: {
						wrongAnswers: this.wrongAnswers,
					},
				})
				this.container.dispatchEvent(completeEvent)
			}
		}
	}
	onWordListClick(lang, event) {
		const targetDiv = event.target
		const wordId = targetDiv.getAttribute('word-id')
		if (wordId) {
			if (this.selectedWords[lang])
				this.selectedWords[lang].targetDiv.classList.toggle('selected')
			this.selectedWords[lang] = {
				wordId,
				targetDiv,
			}
			this.selectedWords[lang].targetDiv.classList.toggle('selected')
			this.checkSelectedWords()
		}
	}
	render(targetContainerSelector) {
		const container = document.createElement('div')
		container.className = 'translator'

		const enList = this.createWordsSectionDiv('en')
		enList.className = 'words-list'
		enList.onclick = (event) => this.onWordListClick('en', event)
		container.append(enList)

		const uaList = this.createWordsSectionDiv('ua')
		uaList.className = 'words-list'
		uaList.onclick = (event) => this.onWordListClick('ua', event)
		container.append(uaList)

		if (targetContainerSelector)
			document.querySelector(targetContainerSelector)?.append(container)
		this.container = container
		return container
	}
}
const words = [
	{ id: 0, en: 'table', ua: 'стіл' },
	{ id: 1, en: 'car', ua: 'автомобіль' },
	{ id: 2, en: 'bus', ua: 'автобус' },
	{ id: 3, en: 'man', ua: 'людина' },
	{ id: 4, en: 'boy', ua: 'хлопець' },
]
//----------------
function onComplete(e) {
	document.querySelector('#container').remove()
	alert(`Кількість помилок ${e.detail.wrongAnswers}`)
}
window.onload = function () {
	const t1 = new Translator(words)
	t1.render('#container')
	t1.container.addEventListener('testComplete', onComplete)
}