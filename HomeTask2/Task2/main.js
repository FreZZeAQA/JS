/*
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1,  0, -3
*/

let x = +prompt('Write number:')

if (isNaN(x) || x === 0) {
    alert('Incorrect')
}else{
    alert('Correct')
}

/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/

let time = +prompt('Write a number between 0 to 59:')

if (time >= 0 && time <= 15) {
    console.log('First Quarter')
} else if (time > 15 && time <= 30) {
    console.log('Second Quarter')
} else if (time > 30 && time <= 45) {
    console.log('Third Quarter')
} else if (time > 45 && time <= 59) {
    console.log('Fourth Quarter')
} else {
    alert('Incorrect number')
}

/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити,
у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/
let day = +prompt('Write a number between 1 to 31:')

if (day >= 1 && day <= 11) {
    console.log('First Decade')
} else if (day > 11 && day <= 21) {
    console.log('Second Decade')
} else if (day > 21 && day <= 31) {
    console.log('Third Decade')
} else {
    alert('Incorrect day of Month')
}

let sequenceNumber = +prompt('Write sequence number of a day:')

switch (sequenceNumber) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        alert('There is no day under this sequence number')
}

/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/

let firstNumber = +prompt('Write first number');
let secondNumber = +prompt('Write second number');

if (firstNumber === secondNumber) {
    console.log('First Number is equal to Second one')
} else if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber) {
    console.log(secondNumber)
} else {
    alert('A number was missed in some input')
}


