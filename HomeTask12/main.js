// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('userList');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="user-details.html?id=${user.id}">${user.id} - ${user.name}</a>`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching users:', error));





