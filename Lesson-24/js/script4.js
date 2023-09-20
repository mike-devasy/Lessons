// Задача 4.Дано масив показів температур. Підрахувати кількість входжень кожного із показів
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.
let mapArrTemp = new Map()
for (const temp of temperatures) {
	mapArrTemp.set(temp, (mapArrTemp.get(temp) ?? 0) +1)
}
console.log(mapArrTemp);
const quantityDifTemp = new Set(temperatures.map((temp) => Math.ceil(temp))).size
console.log(quantityDifTemp);
