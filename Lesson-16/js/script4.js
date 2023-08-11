// Задача 4.		Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для <br>
// зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та <br>
// мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
class TBankomat {
	constructor(numberOf5, numberOf10, numberOf20, numberOf50, numberOf100, numberOf200){
		this.numberOf5 = numberOf5
		this.numberOf10 = numberOf10
		this.numberOf20 = numberOf20
		this.numberOf50 = numberOf50
		this.numberOf100 = numberOf100
		this.numberOf200 = numberOf200
	}
	getMaxSum(){
		return this.numberOf5 * 5 + this.numberOf10 * 10 + this.numberOf20 *20 + this.numberOf50 * 50 + this.numberOf100 * 100 + this.numberOf200 * 200
	}
	getMinSum(){
		if(this.numberOf5 !== 0) return 5
		else if(this.numberOf10 !== 0) return 10
		else if(this.numberOf20 !== 0) return 20
		else if(this.numberOf50 !== 0) return 50
		else if(this.numberOf100 !== 0) return 100
		else if(this.numberOf200 !== 0) return 200
	}

		getReduceSum(userSum) {
			let sum = userSum;
			let bills = [200, 100, 50, 20, 10, 5];
			let billCounts = [this.numberOf200, this.numberOf100, this.numberOf50, this.numberOf20, this.numberOf10, this.numberOf5];
			let result = {};
	
			for (let i = 0; i < bills.length; i++) {
					let billCount = Math.floor(sum / bills[i]);
					if (billCount > billCounts[i]) {
							billCount = billCounts[i];
					}
					result[bills[i]] = billCount;
					sum -= billCount * bills[i];
			}
	
			if (sum > 0) {
					return null;
			} else {
					this.numberOf200 -= result[200];
					this.numberOf100 -= result[100];
					this.numberOf50 -= result[50];
					this.numberOf20 -= result[20];
					this.numberOf10 -= result[10];
					this.numberOf5 -= result[5];
					return result;
			}
	}
	}

let T1 = new TBankomat(20, 50, 40, 50, 30, 20)
let maxSum = T1.getMaxSum()
console.log(`Максимальна сума,яку може видати банкомат: ${maxSum}`);
console.log(`Максимальна сума,яку може видати банкомат: ${T1.getMinSum()}`);
let withdrawalResult = T1.getReduceSum(1875);
if (withdrawalResult === null) {
    console.log('Банкомат не має достатньо грошей для зняття вашої суми');
} else {
    console.log('Банкомат видаст вам гроші наступними купюрами: ' + Object.entries(withdrawalResult).map(([bill, count]) => count + ' - ' + bill + '-гривнева купюра').join(', ') + '.');
}