// Задача 6. Через 20 секунд перейти на сайт ukr.net. Для цього через 20 секунд після відкриття треба виконати команду
// window.location.href = 'https://www.ukr.net
function getOpenLink() {
	window.location.href = 'https://www.ukr.net';
  }
	setTimeout(getOpenLink, 20000)