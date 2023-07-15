// Задача 5.Дано масив елементів. Знайти добуток додатних елементів
const arr = [45, -80, 120, 5, -78, 155, -585, 630, 15]
const arrProdPositiveNum = arr.reduce((prevProd, elem) => elem > 0 ? prevProd *= elem : prevProd, 1) 
console.log(arrProdPositiveNum);