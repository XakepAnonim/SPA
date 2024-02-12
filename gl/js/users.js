const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const container = document.querySelector('tbody');
    if (container) {
        data.map(user => {
            const html = `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.address.city}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                        <td>${user.company.name}</td>
                    </tr>
                `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}
getUsers();