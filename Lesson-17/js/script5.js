// Задача 5.Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, <br>
// 	які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа  <br>
// 	у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу  <br>
// 	Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
// Приклад.
// testsList= [
// {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
// {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.  <br>
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує  <br>
// якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.  <br>
// Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було <br> 
// створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.
// 0) TestData
      class TestData {
        constructor(testDataObj) {
          Object.assign(this, testDataObj)
        }
        toString() {
          return `Test: "${this.firstNumber} ${this.operation} ${this.secondNumber}", User answer =${this.userAnswer}, Corect answer = ${this.correctAnswer}`
        }
      }
      //1) розробити MultChecker
      class MultChecker {
        constructor(minNumber = 0, maxNumber = 9) {
          this.minNumber = minNumber
          this.maxNumber = maxNumber
        }
        getRandomNumber(minNumber, maxNumber) {
          // if(minNumber===undefined)
          //   minNumber = this.minNumber
          minNumber ??= this.minNumber
          maxNumber ??= this.maxNumber
          return (
            minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
          )
        }
        test() {
          const firstNumber = this.getRandomNumber()
          const secondNumber = this.getRandomNumber()
          const correctAnswer = firstNumber * secondNumber
          const userAnswer = parseInt(
            prompt(`${firstNumber} * ${secondNumber} = `)
          )
          if (correctAnswer === userAnswer) alert('Ok')
          else alert('Error')
          return new TestData({
            firstNumber,
            secondNumber,
            operation: '*',
            userAnswer,
            correctAnswer,
          })
        }
      }
      //2) розробити AddChecker
      class AddChecker {
        constructor(minNumber = 0, maxNumber = 9) {
          this.minNumber = minNumber
          this.maxNumber = maxNumber
        }
        getRandomNumber(minNumber, maxNumber) {
          // if(minNumber===undefined)
          //   minNumber = this.minNumber
          minNumber ??= this.minNumber
          maxNumber ??= this.maxNumber
          return (
            minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
          )
        }
        test() {
          const firstNumber = this.getRandomNumber()
          const secondNumber = this.getRandomNumber()
          const correctAnswer = firstNumber + secondNumber
          const userAnswer = parseInt(
            prompt(`${firstNumber} + ${secondNumber} = `)
          )
          if (correctAnswer === userAnswer) alert('Ok')
          else alert('Error')
          return new TestData({
            firstNumber,
            secondNumber,
            operation: '+',
            userAnswer,
            correctAnswer,
          })
        }
      }
      //3) розробити History
      class History {
        constructor() {
          this.testList = []
        }
        addNewTest(testObj) {
          this.testList.push(new TestData(testObj))
        }
        printTestList() {
          for (const test of this.testList) {
            document.write(test)
            document.write('<hr>')
          }
        }
      }
      //4) розробити TestManager
      class TestManager {
        constructor(
          totalTestCount,
          intervalBetweenTests,
          minNumber = 0,
          maxNumber = 9
        ) {
          this.totalTestCount = totalTestCount
          this.intervalBetweenTests = intervalBetweenTests
          this.testsNumberDone = 0
          this.multChecker = new MultChecker()
          this.addChecker = new AddChecker(minNumber, maxNumber)
          this.history = new History()
        }
        doTest() {
          let testResult
          //визначаємо що будемо перевіряти   [0,0.5,1)
          if (Math.random() > 0.5) testResult = this.addChecker.test()
          else testResult = this.multChecker.test()
          //результа додаємо у історію
          this.history.addNewTest(testResult)
          this.testsNumberDone++
          if (this.testsNumberDone < this.totalTestCount)
            setTimeout(() => {
              this.doTest()
            }, this.intervalBetweenTests)
          else this.history.printTestList()
        }
        run() {
          // this.doTest()
          setTimeout(() => {
            this.doTest()
          }, this.intervalBetweenTests)
        }
      }
      //5) використати клас TestManager
      const manager = new TestManager(3, 3000, 2, 10)
      manager.run()