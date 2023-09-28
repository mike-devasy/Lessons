// Задача 5.Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.<br> 
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. <br> 
// Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
let historyClub = ['name1','name3','name2','name4','name5','name6','name7','name8','name9','name10',]
let mathemClub = ['name3','name2','name4','name6','name7','name9','name10',]
const allClub =  historyClub.concat(mathemClub)
let mapAllClub = new Map()
for (const name of allClub ) {
	mapAllClub.set(name,(mapAllClub.get(name) ?? 0) + 1)
}
console.log(mapAllClub);
const arrStudOfAllClub = Array.from(mapAllClub.values()).filter((value) => value == 2)
const arrStudOfOneClub = Array.from(mapAllClub.values()).filter((value) => value == 1)
	console.log(`Кількість студентів 2-х кружків - ${arrStudOfAllClub.length}, 1-го кружка - ${arrStudOfOneClub.length}`);


