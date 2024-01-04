//- Знайти та вивести довижину настипних стрінгових значень

let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javaScriptIsCool = 'javascript is cool';

console.log(helloWorld.length)
console.log(loremIpsum.length)
console.log(javaScriptIsCool.length)

console.log('----------------------------')
// - Перевести до великого регістру наступні стрінгові значення

console.log(helloWorld.toUpperCase())
console.log(loremIpsum.toUpperCase())
console.log(javaScriptIsCool.toUpperCase())

console.log('----------------------------')
// - Перевести до нижнього регістру настипні стрінгові значення

helloWorld
let upperCaseHelloWorld =helloWorld.toUpperCase()
let upperCaseLoremIpsum =loremIpsum.toUpperCase()
let upperCaseJavaScriptIsCool =javaScriptIsCool.toUpperCase()

console.log(upperCaseHelloWorld.toLowerCase())
console.log(upperCaseLoremIpsum.toLowerCase())
console.log(upperCaseJavaScriptIsCool.toLowerCase())

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str = ' dirty string   '

console.log(str.replaceAll(' ',''));

//- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

let str1 = 'Ревуть воли як ясла повні';

let stringToArr=(str)=> str.split(' ');
console.log(stringToArr(str1))

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbArr=[10,8,-7,55,987,-1011,0,1050,0]

let strNumbArr = numbArr.map((item) => item.toString());

console.log(strNumbArr)


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let numbers = [11,21,3];

console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));


//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray
    .sort((a,b) => {
     return  b.monthDuration-a.monthDuration
    })

console.log(coursesAndDurationArray)

coursesAndDurationArray.filter((value)=>{
    if (value.monthDuration>5){
        console.log(value.title)
    }
})

coursesAndDurationArray.map((value,index)=>{
    value.id = index+1

    return value
})
console.log(coursesAndDurationArray)


//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

coursesArray.forEach((value)=>{
    if (value.modules.includes('sass')) {
        console.log(value)
    }
})

coursesArray.filter((value)=>{
    if (value.modules.includes('docker')) {
        console.log(value)
    }
})



