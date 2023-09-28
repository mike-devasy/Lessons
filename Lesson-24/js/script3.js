// Задача 3. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, 
// 		та кількість студентів кожного з курсів. 
let studArr = [{'name' : 'name1', 'curs' : 3, 'faculty' : 1},
               {'name' : 'name2', 'curs' : 1, 'faculty' : 2},
							 {'name' : 'name3', 'curs' : 2, 'faculty' : 3},
               {'name' : 'name4', 'curs' : 3, 'faculty' : 3},
							 {'name' : 'name5', 'curs' : 2, 'faculty' : 1},
               {'name' : 'name6', 'curs' : 2, 'faculty' : 2},
							 {'name' : 'name7', 'curs' : 3, 'faculty' : 1},
               {'name' : 'name8', 'curs' : 1, 'faculty' : 1},]
const quantityOfFaculty = new Set(studArr.map((stud) => stud.faculty)).size	
console.log(quantityOfFaculty);

let mapStudArr = new Map()
for (const stud of studArr) {
	mapStudArr.set(stud.curs, (mapStudArr.get(stud.curs) ?? 0) + 1)
}
 
mapStudArr.forEach((val,key) => {
	console.log(`Клькість студентів ${key}курсу: ${val}осіб`);
})
