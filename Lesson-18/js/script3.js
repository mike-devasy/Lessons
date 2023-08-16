// Задача 3. Користувач задає рік народження. Визначити кількість років користувача.
function getUserAge(userAge, currentYear = 2023) {
const userBirthYear = parseInt(document.getElementById('birthYear').value)
 userAge = currentYear - userBirthYear
document.getElementById('age').value = userAge
  }
const baseElement = document.querySelector('.block')
const lab = document.createElement('label')
baseElement.append(lab)
const inp = document.createElement('input')
inp.setAttribute('type', 'number')
inp.setAttribute('placeholder', 'Введіть свій рік народження')
inp.id = 'birthYear'
lab.append(inp)
const title = document.createElement('h2')
lab.after(title)
title.innerText = 'Ваш вік :'
const lab2 = document.createElement('label')
title.after(lab2)
const inp2 = document.createElement('input')
inp2.setAttribute('type', 'number')
inp2.id = 'age'
lab2.append(inp2)
inp.onchange = function() {
  getUserAge(document.getElementById('birthYear').value)
}
