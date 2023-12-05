



let users = [
    {id: 1, name: 'Yurii', age: 20},
    {id: 2, name: 'Lera', age: 20},
    {id: 3, name: 'Andrii', age: 21},
    {id: 4, name: 'Marek', age: 16},
    {id: 5, name: 'Vlad', age: 22},
    {id: 6, name: 'Nazar', age: 14}
]

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleSquare = (a,b) => a * b;
console.log(rectangleSquare(10,15))


//- створити функцію яка обчислює та повертає площу кола з радіусом r

let circleSquare = (r) => Math.PI*r*r;
console.log(circleSquare(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

let cylindrSquare = (h , r) => 2*Math.PI*h + 2*Math.PI*r*r;
console.log(cylindrSquare(5 ,15))

//- створити функцію яка приймає масив та виводить кожен його елемент

let outputEveryElement = (...arr) =>{
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
outputEveryElement([1,3,5,7,9,0])

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParagraph = (text) => {
    document.write(`<p>${text}</p>`)
}

createParagraph('Hello Okten')

//- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
let creatingUlWithLi = (text,countOfLi) =>{
    document.write(`<ul>`)
    for (let i = 0; i < countOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

creatingUlWithLi('hello okten',7)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let createListOfArrayElement = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>'${arrElement}'</li>`)
    }
    document.write(`</ul>`)
}
createListOfArrayElement([2,5,7,'OktenWeb',true])


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age
// , та виводить їх в документ. Для кожного об'єкту окремий блок.

let createDivForEveryObjectOfArr = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>`)
        document.write(`<p>${arrElement.id} ${arrElement.name} ${arrElement.age} </p>`)
        document.write(`</div>`)
    }
}

createDivForEveryObjectOfArr(users)


//- створити функцію яка повертає найменьше число з масиву

let minNumberOfArr = (arr) =>{
    let min = arr[0];
    for (const minElement of arr) {
        if(minElement<min){
            min=minElement
        }
    }
    return min
}

console.log(minNumberOfArr([1, 6, 8, 6, 3]));

//- створити функцію sum(arr)яка
// приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let sum = (arr) =>{
    let sum = 0;
    for (const arrElement of arr) {
        sum+=arrElement
    }
    return sum
}
console.log(sum([1,56,3]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


 let swap = (array,index1,index2) =>{
     let temp = array[index1];
     array[index1] = array[index2];
     array[index2] = temp;

     return array;
 }

console.log(swap([1,5,7,8,9],0,3))


let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let result;
    for (const element of currencyValues) {
        if (element.currency===exchangeCurrency){
            result = sumUAH/element.value
        }
    }
    return result
}

alert(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))






