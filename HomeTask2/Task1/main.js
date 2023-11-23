// Масиви та об'єкти:

/* - Створити масив, наповнити його 10 елементами будь-якого типу
, вивести кожен елемент в консоль
 */
let arr = [1, 15, true, 'okten', 'school', 22, false, 'owu', 100, 'stakhiv'];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/
let book1 = {
    title: prompt('Write first book title:'),
    pageCount: +prompt('Write first book page count:'),
    genre: prompt('Write first book genre:'),
    author: {
        name: prompt("Write first book author's name:"),
        age: +prompt("Write first book author's age:")
    }
}
let book2 = {
    title: prompt('Write second book title:'),
    pageCount: +prompt('Write second book page count:'),
    genre: prompt('Write second book genre:'),
    author: {
        name: prompt("Write second book author's name:"),
        age: +prompt("Write second book author's age:")
    }
}
let book3 = {
    title: prompt('Write third book title:'),
    pageCount: +prompt('Write third book page count:'),
    genre: prompt('Write third book genre:'),
    author: {
        name: prompt("Write third book author's name:"),
        age: +prompt("Write third book author's age:")
    }
}

console.log(book1)
console.log(book2)
console.log(book3)

/*
- Створити масив з 10 об'єктами які описують сутніть "користувач".
Поля: name, username,password.
Вивести в консоль пароль кожного користувача
*/

let users = [
    user1 = {
        name: 'Ihor',
        userName: 'Ihorchik',
        password: 'ekfjgneknek2101'
    },
    user2 = {
        name: 'Yurii',
        userName: 'Yur4ek',
        password: 'yura84938'
    },
    user3 = {
        name: 'Oleh',
        userName: 'Olegik',
        password: 'ol34311gik'
    },
    user4 = {
        name: 'Valeria',
        userName: 'Valerchik',
        password: 'qwertcdfl2211'
    },
    user5 = {
        name: 'Zoriana',
        userName: 'Zorka',
        password: 'zorka010222'
    },
    user6 = {
        name: 'Andrii',
        userName: 'Andrik',
        password: 'Andrek101122'
    },
    user7 = {
        name: 'Vlas',
        userName: 'Vladik',
        password: 'vladik2000'
    },
    user8 = {
        name: 'Arsen',
        userName: 'Arsenko',
        password: 'ars1010'
    },
    user9 = {
        name: 'Roman',
        userName: 'Romchik',
        password: '12345Romchik54321'
    },
    user10 = {
        name: 'Petro',
        userName: 'Petya',
        password: 'petya228'
    }
]

let user1Password = users[0].password;
let user2Password = users[1].password;
let user3Password = users[2].password;
let user4Password = users[3].password;
let user5Password = users[4].password;
let user6Password = users[5].password;
let user7Password = users[6].password;
let user8Password = users[7].password;
let user9Password = users[8].password;
let user10Password = users[9].password;

console.log("Users' passwords:")
console.log(user1Password)
console.log(user2Password)
console.log(user3Password)
console.log(user4Password)
console.log(user5Password)
console.log(user6Password)
console.log(user7Password)
console.log(user8Password)
console.log(user9Password)
console.log(user10Password)

