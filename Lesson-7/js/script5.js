// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.
function getSentimToInch(Num) {
	return Num / 2.54 ;
}
function getKilogramToPounds(Num) {
	return 2.205 * Num;
}
function getKilometerToMiles (Num) { 
	return Num / 1.6;
 }
 const userSentimNum = parseFloat(prompt('Введіть значення в см.'));
 alert(`Це відповідає ${getSentimToInch(userSentimNum).toFixed(3)} дюймам`);
 const userKilogramNum = parseFloat(prompt('Введіть значення в кг.'));
 alert(`Це відповідає ${getKilogramToPounds(userKilogramNum).toFixed(3)} фунтам`);
 const userKilometerNum = parseFloat(prompt('Введіть значення в км.'));
 alert(`Це відповідає ${getKilometerToMiles(userKilometerNum).toFixed(3)} милям`);