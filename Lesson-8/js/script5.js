// /Задача 5.Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
let scores = [2, 3, 3, 4, 4, 5, 5, 4, 3, 4];

function getQuantityBad_GoodScores(scores) {
	let countBadScores = 0
	let countGoodScores = 0
	let countLessAverageScore = 0
	const averageScore = scores.reduce((a, b) => a + b) / scores.length;
	for (const item of scores) {
	 if(item === 2){countBadScores++;}
	 else if(item === 4 || item === 5) {countGoodScores++;}
	 else if(item < averageScore) {countLessAverageScore ++;}
  }
	return [countBadScores, countGoodScores, countLessAverageScore]
}
	document.write(`кількість двійок,  хороших(добре, відмінно), оцінок, які нижче середнього = ${getQuantityBad_GoodScores(scores)}`)