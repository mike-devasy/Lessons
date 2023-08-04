// Задача 4. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за 
// окремими викликами видавати по одну букву наперед заданого слова. 
// З використанням нього розробити гру «Прекладач». Виводимо для користувача опис
//  цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.
function getLettersInWord(word) {
	return word.split('');
}
      function translator(word, description) {
        let taskInfo = alert(
          `Перекладіть англійською мовою: ${description} (${word.length} букв)`
        )
        let wordInLetters = getLettersInWord(word)
        let counter = 0
        let userLettersArr = []
        for (let letter = 0; letter < word.length; letter++) {
          const userLetter = prompt(
            `Введіть ${letter + 1} букву перекладу`
          ).toLowerCase()
          const wrightLetter = wordInLetters[letter]

          userLettersArr.push(userLetter)
          if (wrightLetter === userLetter) counter++
        }
        return [userLettersArr, counter]
      }
			 let word = 'spring'
      let description =
        'Oдна з чотирьох пір року між зимою та літом, характерна для помірних широт '
      let [userLettersArr, counter] = translator(word, description)
      document.write(
        `Переклад слова: ${word}; <br>  Ви ввели букви: ${userLettersArr} <br>
      Кількість правильно вгаданих букв: ${counter}`
      )