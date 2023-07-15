// Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
const arr = [45, -80, 120, 5, -78, 155, -585, 630, 15]
const newArr = arr.map((elem) => elem > arr[0] ? elem * 2 : elem)
console.log(newArr);
