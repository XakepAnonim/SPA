const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    const container = document.querySelector('tbody');
    if (container) {
        data.map(todo => {
            const html = `
                    <tr>
                        <td>${todo.userId}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}
getTodos();