// Задача 2. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
 
class  Client {
	constructor(id, surName, amountOfMoney, statusId ){
this.id = id
this.surName = surName
this.amountOfMoney = amountOfMoney
this.statusId = statusId
	}
}
const arrClients = [];
const data = [
    [1, 'Ф.И.О. 1', 12000, 'client'],
    [2, 'Ф.И.О. 2', 45000, 'Gold-client'],
    [3, 'Ф.И.О. 3', 2000, 'client'],
    [4, 'Ф.И.О. 4', 22000, 'client'],
    [5, 'Ф.И.О. 5', 72000, 'Gold-client']
];

for (let i = 0; i < data.length; i++) {
    const [id, surName, amountOfMoney, statusId] = data[i];
    arrClients.push(new Client(id, surName, amountOfMoney, statusId));
}
function showClient( arrClients) { 
	let clients = []
	let goldClients =[]
	arrClients.forEach((client) => client.statusId === 'client' ? clients.push(client) : goldClients.push(client))
	return [clients, goldClients]
 }
 const [clients, goldClients] =  showClient( arrClients)
 const totalAmountOfMoney = arrClients.reduce((prevSum,client) => client.amountOfMoney + prevSum, 0)
 console.log(`Звичайні кліенти банку : ${clients.map(client => `id:${client.id} ${client.surName}(${client.amountOfMoney} грн)`).join(', ')}
  Gold-кліенти банку: ${goldClients.map(client => `id: ${client.id} ${client.surName} (${client.amountOfMoney} грн)`).join(', ')}`);
	console.log(`Загальна кількість грошей: ${totalAmountOfMoney}`);