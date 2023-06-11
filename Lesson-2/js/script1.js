//Задача 1.Знайти сумму,добуток та частку двоч дійсних чисел.Результат вивести у формі таблицію
// Описуємо та вводимо значення змінних:
//a-перше дійсне число
//b-перше дійсне число
//Виводимо результати в змінних:
// sum-сума. prod-добуток quontient-частка
let a = parseFloat(prompt("Введіть значення а","0"));
let b = parseFloat(prompt("Введіть значення b","0"));
let sum = a + b;
let prod = a * b;
let quontient = a / b;
console.log(`${a}`);
console.log(`${b}`);
console.log(`${sum.toFixed(4)}`);
console.log(`${prod.toFixed(4)}`);
console.log(`${quontient.toFixed(4)}`);
document.write(`<table border="1" border-collapse="collapse"   >
						<thead>
							<tr>
								<th>Операція</th>
								<th>Значення a</th>
								<th>Значення b</th>
								<th>Результат</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>a+b</td>
								<td>${a}</td>
								<td>${b}</td>
								<td>${sum.toFixed(4)}</td>
							</tr>
							<tr>
								<td>a*b</td>
								<td>${a}</td>
								<td>${b}</td>
								<td>${prod.toFixed(4)}</td>
							</tr>
							<tr>
								<td>a/b</td>
								<td>${a}</td>
								<td>${b}</td>
								<td>${quontient.toFixed(4)}</td>
							</tr>
						</tbody>
						</table>`);
	