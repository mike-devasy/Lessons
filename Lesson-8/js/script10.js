// Задача10. Знайти суму цифр числа, що знаходяться між першою цифрою 7 
// і останньою цифрою 7 (у числі є всього дві цифри 7,  наприклад: 2679328712)
// Знаходимо першу цифру 7 :
 
let num = 98275567825763
let c
do {
c = num % 10
num = Math.floor(num / 10)
}
while(c !== 7)
let s = 0
    c = 0
while(c !==7) {
	s += c
	c = num % 10
	num = Math.floor(num / 10)
}
c = 0
while(c !==7) {
	s += c
	c = num % 10
	num = Math.floor(num / 10)
}
alert(`Sum = ${s}`)