let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('big array')
} else {
    console.log("small array there aren't three elements")
}

/*
-Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
Знайти, яке з них є середнім (більше одного, але менше за інше).
Перевірити, чи знаходиться перше число між двома іншими.
*/

let numb1 = 27
let numb2 = 25
let numb3 = 31

if (numb1 > numb2 && numb1 < numb3 || numb1 > numb3 && numb1 < numb2) {
    console.log(numb1)
} else if (numb2 > numb1 && numb2 < numb3 || numb2 > numb3 && numb2 < numb1) {
    console.log(numb2)
} else {
    console.log(numb3)
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
let a = 11;
let b = 11;

let result = a + b < 4 ? 'Мало' : 'Багато';

console.log(result)

/* - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число:
 позитивним, негативним або нулем напишіть це тернарним оператором*/
let num = 2220;

let numberBetween = num > -100 && num < 100 ? num : 'Incorrect Data';
let result2 =
    numberBetween > 0 ? 'positive' : 'negative'
    && numberBetween === 0 ? null : 'Incorrect Data';
console.log(result2)

/*
- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно',
інакше виведіть 'Неправильно'.
Перевірте роботу скрипта при test, що дорівнює true, false.
Напишіть два варіанти скрипта - з коротким записом(тернаркою)
*/

let test = prompt('Write true or false');

let result3 = test === 'true' ? 'Вірно' : 'Неправильно'
console.log(result3)

/*
- Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
„Яка «офіційна» назва JavaScript?“Якщо користувач вводить «ECMAScript», то показати:
«Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/

let officialNameOfJs = prompt('What is the official name of Java Script?');

if (officialNameOfJs === 'ECMAScript') {
    console.log('correct')
} else {
    console.log('Dont u know?,ECMAScript')
}

/*
 - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
*/

let numberOfFlat = +prompt("Write flat's number to find out the entrance:")

if (numberOfFlat >= 1 && numberOfFlat <= 20) {
    console.log('First Entrance')
} else if (numberOfFlat > 20 && numberOfFlat < 49) {
    console.log('Second Entrance')
} else if (numberOfFlat >= 49 && numberOfFlat <= 90) {
    console.log('Third Entrance')
} else {
    console.log('No entrances by this flat of number')
}

/*-
Ми маємо змінну number в яку користувач задає числове значення, якщо змінна рівна 10
вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
 */

let number = 10;

if (number === 10) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

/*
- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
Змінна, яка характеризує температуру. Якщо температура від +10 до +22
вивести повідомлення що ми йдемо ВЧИТИСЯ .Якщо інша темпаретура, тоді виводимо
повідомлення що сидимо вдома і вчимося ОНЛАЙН
*/

let temperature = +30;

if (temperature >= +10 && temperature <= +22) {
    console.log('let\'s go to study')
} else if (temperature < +10 || temperature > +22) {
    console.log('sit at home and study online')
} else {
    console.log('incorrect data')
}

let prizeNumber = 1;

switch (prizeNumber) {
    case 1 :
        alert('Iphone15')
        break;
    case 2 :
        alert('MacBook Air')
        break;
    case 3 :
        alert('BMW 7 series')
        break;
    case 4 :
        alert('Flat in Kyiv')
        break;
    case 5 :
        alert('MotoBike')
        break;
    default:
        alert('The number is incorrect')
}
