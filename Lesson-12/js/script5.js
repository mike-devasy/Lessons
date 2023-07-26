// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
let namesArr = ['Sergy', 'Olena', 'Nikola', 'Stas', 'Ganna', 'Olga', 'Petro', 'Dmitro']
let modifyNamesArr = namesArr.sort()
document.write(`Отсортований масив: ${modifyNamesArr}<br>`)
let searchElement = 'Olga' ;
function includeIndexElem(arr, searchElement) {
    let startIndex = 0;
    let endIndex = arr.length - 1
    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((endIndex + startIndex) / 2);
        if (arr[middleIndex] === searchElement) return middleIndex;
        if (arr[middleIndex] < searchElement) startIndex = middleIndex + 1
        if (arr[middleIndex] > searchElement) endIndex = middleIndex - 1
    }
    return -1;
}
const searchIndexElem = includeIndexElem(modifyNamesArr, searchElement);
if (searchIndexElem !== -1) document.write(`В масиві є ім'я ${searchElement} під номером ${searchIndexElem}`)
else document.write('В масиві нема такого імені')