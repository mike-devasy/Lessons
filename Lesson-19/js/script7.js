// Задача 7. Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану <br>
// (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод,<br>
//  у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану<br>
// 	(top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
// create a snowflake element
const baseElement = document.querySelector('.block')
const snowflake = document.createElement('div');
snowflake.classList.add('snowflake');
baseElement.append(snowflake)
const imgSnowFlake = document.createElement('img')
imgSnowFlake.setAttribute('src', '../img/snowflake.png')
snowflake.append(imgSnowFlake)
// set initial position and speed
let snowflakeTop = 0;
let snowflakeLeft = 0;
let speed = Math.random() * 3 + 1;

// update the position of the snowflake
function updateSnowflake() {
	snowflakeTop += speed;
	snowflakeLeft += 0.8 * speed;
	snowflake.style.top = snowflakeTop + 'px';
    snowflake.style.left = snowflakeLeft  + 'px';

    // reset the position when the snowflake reaches the bottom
    if (snowflakeTop > window.innerHeight ) {
			snowflakeTop = 0;
			snowflakeLeft = 0;
        speed = Math.random() * 3 + 1;
    }

}

// update the position of the snowflake every 10ms
setInterval(updateSnowflake, 15);
