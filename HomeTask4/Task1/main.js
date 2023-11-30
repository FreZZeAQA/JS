//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateRectangleSquareBySides(a, b) {
    return a * b
}

console.log(calculateRectangleSquareBySides(10, 11))

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function calculateRectangleSquareByRadius(r) {
    return Math.PI * r * r
}

console.log(calculateRectangleSquareByRadius(12))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

function calculateCylinderSquare(r, h) {
    return 2 * Math.PI * r * (r + h)
}

console.log(calculateCylinderSquare(5, 10))

//- створити функцію яка приймає масив та виводить кожен його елемент

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function outputEveryElementsFromArray(...arr) {
    for (const item of arr) {
        console.log(item)
    }
}

outputEveryElementsFromArray(coursesAndDurationArray)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<h1>${text}</h1>`)
}

createParagraph("Yurii")

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlAndLiWithinText(text, countOfLi) {
    document.write(`<ul>`)
    for (let i = 0; i < countOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createUlAndLiWithinText('Hello Okten', 5)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function buildList(arr) {

    for (const arrElement of arr) {
        document.write(`<ul>`)
        document.write(`${arrElement.title} ${arrElement.monthDuration}`)
        document.write(`</ul>`)
    }
}

buildList(coursesAndDurationArray)

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


let arr = [
    {id: 1, name: 'Yurii', age: 20},
    {id: 2, name: 'Lera', age: 20},
    {id: 3, name: 'Andrii', age: 21},
    {id: 4, name: 'Marek', age: 16},
    {id: 5, name: 'Vlad', age: 22},
    {id: 6, name: 'Nazar', age: 14}
]

function outputArrayInDocumentAndCreatingOneBlockForEachObject(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`)
        document.write(`<p>${arrElement.id} ${arrElement.name} ${arrElement.age}</p>`)
        document.write(`</div>`)
    }
}

outputArrayInDocumentAndCreatingOneBlockForEachObject(arr)

//- створити функцію яка повертає найменьше число з масиву

let numbArr = [100, 460, 5, 6, 7, 2, 3, 56, 8, 899, 99, 9]

function gettingMinNumberFromArray(arr) {
    let min = arr[0]
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    return min
}

console.log('Min number is : '+gettingMinNumberFromArray(numbArr));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10])

    function sumAllNumbersOfArray(arr) {
        let sum = 0;

        for (const numb of arr) {
            sum+=numb
        }
        return sum
    }

console.log('Sum of Array is : '+sumAllNumbersOfArray([1, 23, 1,100]));

    //- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(array,index1,index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

console.log(swap([2, 4, 6, 8], 0, 3));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let result;
    for (const element of currencyValues) {
        if (element.currency===exchangeCurrency){
            result = sumUAH/element.value
        }
    }
return result
    }

alert(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))

