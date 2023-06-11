 //============Обчислити значення виразів=============

//  1. Описуємо і вводимо значення змінних 
let a = parseFloat(prompt('Введіть значення змінної а', '0'));
let b = parseFloat(prompt('Введіть значення змінної b', '0'));
let c = parseFloat(prompt('Введіть значення змінної c', '0'));
//2.Знаходимо результат
let sumS1 = a + 12 + b; 
let squareRootS2 = Math.sqrt((a + b) / (2*a ));
let cubeRooteS3 =  Math.cbrt((a + b)*c );
let sinS4 = Math.sin(a / -b );
//3.Виводимо результат
document.write(`S1= ${sumS1.toFixed(3)}<br/>`);
document.write(`S2= ${squareRootS2.toFixed(3)}<br/>`);
document.write(`S3= ${cubeRooteS3.toFixed(3)}<br/>`);
document.write(`S4= ${sinS4.toFixed(3)}`);
