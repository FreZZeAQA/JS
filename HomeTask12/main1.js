
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userInfo = document.getElementById('userInfo');


        userInfo.innerHTML = `
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Company:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                `;
    })
    .catch(error => console.error('Error fetching user details:', error));