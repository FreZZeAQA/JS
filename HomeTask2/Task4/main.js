//- з файлу arrays.js (лежить в папці 2023 plan )взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sequenceNumber = +prompt('Write a sequence number of object to use get from array:') - 1;

if (isNaN(sequenceNumber) || sequenceNumber >= coursesAndDurationArray.length) {
    alert('Incorrect Data')
} else {
    if (coursesAndDurationArray[sequenceNumber].monthDuration > 5) {
        console.log(coursesAndDurationArray[sequenceNumber].title, 'Super')
    } else {
        console.log(coursesAndDurationArray[sequenceNumber].title, 'Bad')
    }
}