// Задача1.Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. 
// Визначити за допомогою циклів суму, яку він одержить.
const investMoney = parseFloat(prompt("Введіть інвестовану суму(тис.грн.)",'0'))
	const investRateBank = 20
	const investTax = 5
	let totalIncome = 0
	for (let i = 0; i < 20; i++) {
	totalIncome += investMoney * 0.2 - investMoney * 0.2 * 0.05
	}
	alert(`Загальна сума с прибутком = ${totalIncome.toFixed(4)}`)