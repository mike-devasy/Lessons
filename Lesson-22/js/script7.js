// Задача 7. Користувач бере авто на вказану кількість годин. Визначити кінцевий час повернення.
const startUserRentOfCar = new Date()
const rentHours = 5
const endUserRentOfCar = new Date(startUserRentOfCar.setHours(startUserRentOfCar.getHours() + rentHours))
console.log(`${endUserRentOfCar}`);
