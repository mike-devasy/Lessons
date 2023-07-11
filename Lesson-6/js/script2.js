// Задача 2.Інвестор вклав  тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. 
// Визначити за допомогою циклів суму, яку він одержить.
  const investMoney1 = parseFloat(prompt("Введіть інвестовану суму(тис.грн.)",'0'))
  const investMoney2 = parseFloat(prompt("Введіть інвестовану суму(тис.грн.)",'0'))
	const investRateBank1 = 20
	const investRateBank2 = 27
	let totalIncome1 = 0 ,
	    totalIncome2 = 0 ,
      totalIncome
	for (let i = 0; i < 20; i++) {
	totalIncome1 += investMoney1 * 0.2
	}
	for (let j = 0; j < 17; j++) {
	totalIncome2 += investMoney2 * 0.27
	}
	totalIncome = totalIncome1 + totalIncome2
	alert(`Загальна сума обох вкладів с прибутком = ${totalIncome.toFixed(4)}`)