// Задача 10.Дано масив цін у грн. Податок складає 20%. 
// Сформувати масив, який буде містити величину сплаченого податку у грн.
const arrPrices = [200, 550, 850, 1500, 750, 2400, 3500, 500]
let taxe = 0.2
const arrTaxes = []
arrPrices.forEach((elem) => 
arrTaxes.push(elem * taxe)
)
console.log(arrTaxes);