// Задача 9. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.
const startUserRelax = new Date()
const endUserRelax = new Date(startUserRelax.setDate(startUserRelax.getDate()+ 56))
console.log(`${endUserRelax}`);
