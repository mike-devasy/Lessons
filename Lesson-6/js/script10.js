// Задача 10.  Щоденно спортзал відвідує певна кількість людей. Користувач вводить такі дані: скільки людей 
// відвідало спортзал за день та вік кожного відвідувача. Потрібно вивести вік 
// найстаршого та наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день.

const numberVisitorsOfDay = parseInt(prompt('Скількі людей відвідало зал сьогодні ?'))
let arrAgeVisitors = []
for (let i = 0; i < numberVisitorsOfDay; i++) {
	const ageVisitor = parseInt(prompt(`Введіть вік ${i+1}-го відвідувача`))
	arrAgeVisitors.push(ageVisitor)
}
function getMaxMinAverageAge(arrAgeVisitors) {
	const minAge = Math.min(...arrAgeVisitors);
	const maxAge = Math.max(...arrAgeVisitors);
	const averageAge = arrAgeVisitors.reduce((a, b) => a+b) / numberVisitorsOfDay
return result = [maxAge, minAge,averageAge]
  }
	document.write(`вік 
	 найстаршого , наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день = ${getMaxMinAverageAge(arrAgeVisitors)}
	`)