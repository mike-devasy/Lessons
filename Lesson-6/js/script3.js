// Задача 3.Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.
for (let c1 = 1; c1 <= 9; c1++) {
    for	(let c2 = 0; c2 <= 9; c2++){
			for	(let c3 = 0; c3 <= c1-c2; c3++){
				document.write(`${c1}${c2}${c3}<br>`)
			}
		}
}






















































