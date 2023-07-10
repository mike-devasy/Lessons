// Задача 1. 
// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься 
// (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
 
  //функція для знаходження мінмального елемента масиву
      // function getMinValue(arr) {
      //   let min = arr[0]
      //   for (let i = 1; i < arr.length; i++) {
          //Як змінюються номери елементів
      //     if (arr[i] < min)
            //Що треба зробити з кожним із елементів
      //       min = arr[i]
      //   }
      //   return min
      // }
      // function getMinValue(arr) {
      //   return Math.min(...arr)
      // }
      //функція для знаходження категорії студента
      // function getStudentCategory(scores) {
      //   let category
      //   switch (getMinValue(scores)) {
      //     case 1:
      //     case 2:
      //       category = 'двійочник'
      //       break
      //     case 3:
      //       category = 'трійочник'
      //       break
      //     case 4:
      //       category = 'хорошист'
      //       break
      //     case 5:
      //       category = 'відмінник'
      //       break
      //     default:
      //       throw new Error('Некоректна оцінка')
      //       break
      //   }
      //   return category
      // }

      // let scores = [3, -4, 5, 4, 5, 3, 4]
      // let category = getStudentCategory(scores)
      // document.write(category)
function getMinScore(arr) {
	let min = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] < min) 
		min = arr[i]
	}
	return min
}
function getStudentCategory(scores) {
	let category
	switch (getMinScore(scores)) {
		case 1 :
		case 2 :
		category = 'двійочник'	
			break;
		case 3 :
	  category = 'трійочник'
		break
		case 4 :
			category = 'хорошист'
			break
		case 5 :
			category = 'відмінник'
			break
		default:
			//  throw new Error('Некоректна оцінка')
			 category ='Некоректна оцінка'
			break
	}
	return category
}
let scores = [2, 3, 3, 4, 5, -5 ,1]
let category = getStudentCategory(scores);
alert(category);




//--- ФУНКЦІЯ ДЛЯ ВВЕДЕННЯ МАСИВУ (ВКАЗУЄМО КІЛЬКІСТЬ ПОТІРБНИХ ЕЛЕМЕНТІВ)
      //userLength - кількість потрібних елементів
      //prefixMessage - повідомлення для користувача при введенні одного елемента
      // function inputArray(userLength, prefixMessage) {
      //   let arr = []
      //   for (let i = 0; i < userLength; i++) {
      //     let val = parseFloat(prompt(`${prefixMessage} ${i + 1} = `))
      //     arr.push(val)
      //   }
      //   return arr
      // }