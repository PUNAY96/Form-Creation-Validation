// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container
    const dataContainer = document.getElementById('api-data');

    // Step 4: Fetch data using try-catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 8: Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
