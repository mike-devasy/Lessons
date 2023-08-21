// Задача4.	Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори (піб, рік народження, короткий опис),<br>
// назва книги, жанр, видавництво (назва, реєстраційний номер, рік засування)).<br> 
// Реалізувати розділи бібліотеки організувати додавання/вилучення книг та  вибір книг за назвою,<br> 
// за ПІБ автора, за видавництвом.
class Author {
	constructor(name, surName, birthdayYear, description){
		this.name = name
		this.surName = surName
		this.birthdayYear = birthdayYear
		this.description = description
	}
}
class PublishingHouse {
	constructor(publishingTitle, regNumber, foundationYear){
this.publishingTitle = publishingTitle
this.regNumber = regNumber
this.foundationYear = foundationYear
	}
}
class Book{
	constructor(titleOfBook, genre){
		this.authors = []
		this.publishingHouses = []
		this.titleOfBook = titleOfBook
		this.genres = genre
	}
	addAuthor(author){
		this.authors.push(author)
	}
	addPublishingHouse(publishingHouse){
		this.publishingHouses.push(publishingHouse)
	}

}
class Biblio {
	constructor(){
this.books = []
this.availableBooks = []
	}
	addAvailableBook(book){
		this.availableBooks.push(book)
}
// додавання книги за назвою : 
	addBook(title){
 let book = this.availableBooks.find((book) => book.titleOfBook === title)
 if(book) this.books.push(book)
	}
	// видалення книги за назвою : 
		removeBook(title){
			this.books = this.books.filter((book) => book.titleOfBook !== title)		
	}
	// Вибір книги за назвою : 
	selectBook(title){
		this.books = this.books.filter((book) => book.titleOfBook === title)
	}
		// Вибір книги за ПИБ автора : 
		selectBookByAuthor(name, surname){
		return this.books.filter((book) => book.authors.some((authors) => authors.name === name && authors.surName === surname))
		}
		// Вибір книги за видавництвом:
		selectBookByPublishingHouse(publishingTitle){
			return this.books.filter((book) => book.publishingHouses.some((publishingHouse) => publishingHouse.publishingTitle === publishingTitle ))
		}
}
let book1 = new Book('white Wolf', 'adventures')
book1.addAuthor(new Author('Jack', 'London', 1824, ' He was very good writer...'))
book1.addPublishingHouse(new PublishingHouse('publicTitle', 48656689, 1859 ))
let book2 = new Book('Oceola', 'adventures')
book2.addAuthor(new Author('Main', 'Reed', 1874, ' He was beautiful writer...'))
book2.addPublishingHouse(new PublishingHouse('publicTitle2', 5298647, 1899 ))
let book3 = new Book('War of worlds', 'fantastic')
book3.addAuthor(new Author('Herbert', 'Yells', 1844, ' He was fantastic writer...'))
book3.addPublishingHouse(new PublishingHouse('publicTitle3', 7845966, 1905 ))
let bibl1 = new Biblio()
bibl1.addAvailableBook(book1)
bibl1.addAvailableBook(book2)
bibl1.addAvailableBook(book3)
 bibl1.addBook('Oceola')
 bibl1.addBook('War of worlds')
console.dir(bibl1, {depth: null})
bibl1.removeBook('War of worlds')
console.dir(bibl1, {depth: null})
bibl1.selectBook('Oceola')
console.dir(bibl1.books, {depth: null})
let bookByAuthor = bibl1.selectBookByAuthor('Herbert', 'Yells')
console.dir(bookByAuthor, {depth: null})
let bookByPublishingHouse = bibl1.selectBookByPublishingHouse('publicTitle2')
console.dir(bookByPublishingHouse, {depth: null})
