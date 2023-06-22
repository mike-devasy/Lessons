//  Задача 5.Вивести на екран N абзаців (N вводиться користувачем) за зразком:
 let userNum = parseInt(prompt('Введіть кількість абзаців', '2'))
 for (let sectionCount = 1; sectionCount <= userNum ; sectionCount++) {
 document.write(`<h1>Заголовок ${sectionCount}</h1>`);
	for (let paragrathCount = 1; paragrathCount <= userNum; paragrathCount++) {
		document.write(`<p>Розділ ${sectionCount}, параграф ${paragrathCount}</p>`);
	}
	document.write(`<hr>`)
 }